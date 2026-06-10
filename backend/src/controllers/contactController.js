const Contact = require("../models/Contact");
const transporter = require("../config/mailer");

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

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.SMTP_FROM}>`,
            to: process.env.CONTACT_RECEIVER_EMAIL,
            replyTo: email,
            subject: `[Portfolio] ${subject}`,
            text: `
Nom: ${name}
Email: ${email}
Sujet: ${subject}

Message:
${message}
      `,
            html: `
        <h2>Nouveau message depuis le portfolio</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Sujet :</strong> ${subject}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p><small>ID MongoDB : ${savedContact._id}</small></p>
      `,
        });

        return res.status(201).json({ message: "Message envoyé avec succès." });
    } catch (error) {
        console.error("Contact error:", error);
        return res.status(500).json({ message: "Erreur serveur, réessaie plus tard." });
    }
};
