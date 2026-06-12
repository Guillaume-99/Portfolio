import ProjectCard from "../ProjectCard/ProjectCard";
import "./Projects.scss";

function Projects({ projects, onOpenModal }) {
    return (
        <div className="projects projects__fade">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} onOpenModal={onOpenModal} />
            ))}
        </div>
    );
}

export default Projects;
