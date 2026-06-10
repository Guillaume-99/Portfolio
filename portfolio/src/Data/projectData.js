import kasaImg from "../assets/projects/kasa.webp";
import argentBankImg from "../assets/projects/argentbank.webp";
import bookiImg from "../assets/projects/booki.webp";
import ninaImg from "../assets/projects/nina.webp";
import sophieImg from "../assets/projects/sophie.webp";

export const projectsData = [
    {
        id: 1,
        title: "Kasa",
        category: "React",
        image: kasaImg,
        alt: "Capture du projet Kasa",
        shortDescription: "Application de location immobilière en React.",
        description: "Projet OpenClassrooms réalisé avec React, React Router et une interface dynamique orientée composants.",
        technologies: ["React", "Sass", "React Router"],
    },
    {
        id: 2,
        title: "Argent Bank",
        category: "React",
        image: argentBankImg,
        alt: "Capture du projet Argent Bank",
        shortDescription: "Interface bancaire avec authentification utilisateur.",
        description: "Projet OpenClassrooms avec React, Redux Toolkit et intégration d’API pour la gestion du profil utilisateur.",
        technologies: ["React", "Redux Toolkit", "API REST", "Sass"],
    },
    {
        id: 3,
        title: "Booki",
        category: "HTML/CSS",
        image: bookiImg,
        alt: "Capture du projet Booki",
        shortDescription: "Page responsive de réservation et d’hébergement.",
        description: "Projet d’intégration responsive en HTML et CSS avec attention portée à la mise en page et à l’adaptation mobile.",
        technologies: ["HTML", "CSS", "Responsive Design"],
    },
    {
        id: 4,
        title: "Nina Carducci",
        category: "Référencement",
        image: ninaImg,
        alt: "Capture du projet Nina Carducci",
        shortDescription: "Optimisation SEO et performances d’un site existant.",
        description: "Travail sur l’accessibilité, les performances, le SEO et le débogage de plusieurs éléments du site.",
        technologies: ["Optimisation", "SEO", "Lighthouse", "Accessibilité"],
    },
    {
        id: 5,
        title: "Sophie Bluel",
        category: "JavaScript",
        image: sophieImg,
        alt: "Capture du projet Sophie Bluel",
        shortDescription: "Site portfolio pour un photographe.",
        description: "Projet OpenClassrooms réalisé avec HTML, CSS et JavaScript pour créer un site portfolio interactif.",
        technologies: ["HTML", "CSS", "JavaScript"],
    },
];
