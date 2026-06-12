import "./ProjectCard.scss";

function ProjectCard({ project, onOpenModal }) {
    return (
        <article className="project-card">
            <button className="project-card__button" type="button" onClick={() => onOpenModal(project)}>
                <img className="project-card__image" src={project.image} alt={project.alt} />
                <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <h4 className="project-card__title-techs">Les technologies utilisées :</h4>
                    <ul className="project-card__techs">
                        {project.technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </div>
            </button>
        </article>
    );
}

export default ProjectCard;
