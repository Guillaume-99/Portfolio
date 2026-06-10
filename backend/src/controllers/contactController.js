const Contact = require("../models/Contact");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.sendContact = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({ message: "Tous les champs sont obligatoires." });
        }

        if (!isValidEmail(email)) {
            return res.status(400).json({ message: "Adresse e-mail invalide." });
        }

        const savedContact = await Contact.create({
            name,
            email,
            subject,
            message,
        });

        const emailResponse = await fetch("https://api.brevo.com/v3/smtp/email", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "api-key": process.env.BREVO_API_KEY,
            },
            body: JSON.stringify({
                sender: {
                    name: "Portfolio Contact",
                    email: process.env.SMTP_FROM,
                },
                to: [
                    {
                        email: process.env.CONTACT_RECEIVER_EMAIL,
                    },
                ],
                replyTo: {
                    email,
                    name,
                },
                subject: `[Portfolio] ${subject}`,
                htmlContent: `
          <h2>Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${name}</p>
          <p><strong>Email :</strong> ${email}</p>
          <p><strong>Sujet :</strong> ${subject}</p>
          <p><strong>Message :</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p><small>ID MongoDB : ${savedContact._id}</small></p>
        `,
                textContent: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
        `,
            }),
        });

        if (!emailResponse.ok) {
            const errorData = await emailResponse.text();
            console.error("Brevo API error:", errorData);
            return res.status(500).json({ message: "Message enregistré, mais e-mail non envoyé." });
        }

        return res.status(201).json({ message: "Message envoyé avec succès." });
    } catch (error) {
        console.error("Contact error:", error);
        return res.status(500).json({ message: "Erreur serveur, réessaie plus tard." });
    }
};
