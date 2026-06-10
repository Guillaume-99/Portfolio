import "./ProjectModal.scss";

function ProjectModal({ project, onClose }) {
    if (!project) return null;

    return (
        <div className="project-modal" onClick={onClose}>
            <div className="project-modal__content">
                <button className="project-modal__close" type="button" onClick={onClose} aria-label="Fermer la modale">
                    ×
                </button>

                <img className="project-modal__image" src={project.image} alt={project.alt} />

                <h3 className="project-modal__title">{project.title}</h3>
                <p className="project-modal__description">{project.description}</p>

                <h4 className="project-modal__title">Les technologies utilisées :</h4>

                <ul className="project-modal__techs">
                    {project.technologies.map((tech) => (
                        <li key={tech}>{tech}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ProjectModal;
