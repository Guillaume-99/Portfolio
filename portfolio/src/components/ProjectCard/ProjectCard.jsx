import "./ProjectCard.scss";

function ProjectCard({ project, onOpenModal }) {
    return (
        <article className="project-card">
            <button className="project-card__button" type="button" onClick={() => onOpenModal(project)}>
                <img className="project-card__image" src={project.image} alt={project.alt} />
                <div className="project-card__content">
                    <h3 className="project-card__title">{project.title}</h3>
                    <p className="project-card__text">{project.shortDescription}</p>
                </div>
            </button>
        </article>
    );
}

export default ProjectCard;
