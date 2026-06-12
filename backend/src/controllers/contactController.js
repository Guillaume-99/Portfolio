const Contact = require("../models/Contact");

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitizeString(value) {
    return String(value || "").trim();
}

function stripLineBreaks(value) {
    return String(value || "")
        .replace(/[\r\n]+/g, " ")
        .trim();
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

exports.sendContact = async (req, res) => {
    try {
        let { name, email, subject, message } = req.body;

        name = sanitizeString(name);
        email = stripLineBreaks(email).toLowerCase();
        subject = stripLineBreaks(subject);
        message = sanitizeString(message);

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                message: "Tous les champs sont obligatoires.",
            });
        }

        if (name.length < 2 || name.length > 80) {
            return res.status(400).json({
                message: "Le nom doit contenir entre 2 et 80 caractères.",
            });
        }

        if (!isValidEmail(email) || email.length > 120) {
            return res.status(400).json({
                message: "Adresse e-mail invalide.",
            });
        }

        if (subject.length < 3 || subject.length > 120) {
            return res.status(400).json({
                message: "Le sujet doit contenir entre 3 et 120 caractères.",
            });
        }

        if (message.length < 10 || message.length > 2000) {
            return res.status(400).json({
                message: "Le message doit contenir entre 10 et 2000 caractères.",
            });
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeSubject = escapeHtml(subject);
        const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

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
                    name: stripLineBreaks(name),
                },
                subject: `[Portfolio] ${subject}`,
                htmlContent: `
          <h2>Nouveau message depuis le portfolio</h2>
          <p><strong>Nom :</strong> ${safeName}</p>
          <p><strong>Email :</strong> ${safeEmail}</p>
          <p><strong>Sujet :</strong> ${safeSubject}</p>
          <p><strong>Message :</strong></p>
          <p>${safeMessage}</p>
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

            return res.status(500).json({
                message: "Message enregistré, mais e-mail non envoyé.",
            });
        }

        return res.status(201).json({
            message: "Message envoyé avec succès.",
        });
    } catch (error) {
        console.error("Contact error:", error);
        return res.status(500).json({
            message: "Erreur serveur, réessaie plus tard.",
        });
    }
};
