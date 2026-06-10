import "./ContactForm.scss";
import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // À remplacer plus tard par l'appel API / backend
        console.log("Formulaire envoyé :", formData);
    };

    return (
        <section className="contact-form" aria-labelledby="contact-title">
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
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder="Votre message" value={formData.message} onChange={handleChange} rows="6" required />
                </div>

                <button type="submit">Envoyer</button>
            </form>
        </section>
    );
}

export default ContactForm;
