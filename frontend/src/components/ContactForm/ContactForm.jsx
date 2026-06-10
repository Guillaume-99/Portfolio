import "./ContactForm.scss";
import { useState, useEffect } from "react";
import Toast from "../Toast/Toast";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [status, setStatus] = useState({
        loading: false,
        error: "",
        success: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setStatus({
            loading: false,
            error: "",
            success: "",
        });
        setShowToast(true);

        try {
            const response = await fetch("https://portfolio-16f4.onrender.com/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Erreur lors de l'envoi du message.");
            }

            setStatus({
                loading: false,
                error: "",
                success: "Message envoyé avec succès !",
            });

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                loading: false,
                error: error.message || "Une erreur est survenue.",
                success: "",
            });
        }
    };

    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (!showToast) return;

        const timer = setTimeout(() => {
            setShowToast(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, [showToast]);

    return (
        <>
            <Toast message="Message envoyé !" isVisible={showToast} />
            <div className="contact-form" aria-labelledby="contact-title">
                <h2 id="contact-title">Contactez-moi</h2>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Nom</label>
                        <input id="name" name="name" type="text" placeholder="Votre nom" value={formData.name} onChange={handleChange} autoComplete="name" required />
                    </div>

                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" type="email" placeholder="votre@email.com" value={formData.email} onChange={handleChange} autoComplete="email" required />
                    </div>

                    <div>
                        <label htmlFor="subject">Sujet</label>
                        <input id="subject" name="subject" type="text" placeholder="Sujet de votre message" value={formData.subject} onChange={handleChange} required />
                    </div>

                    <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows="6" required />
                    </div>

                    <button type="submit" disabled={status.loading}>
                        {status.loading ? "Envoi..." : "Envoyer"}
                    </button>

                    {status.success && <p className="success-message">{status.success}</p>}
                    {status.error && <p className="error-message">{status.error}</p>}
                </form>
            </div>
        </>
    );
}

export default ContactForm;
