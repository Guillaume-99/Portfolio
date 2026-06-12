import { useState } from "react";
import { projectsData } from "../../Data/projectData";
import Filters from "../Filters/Filters";
import Projects from "../Projects/Projects";
import ProjectModal from "../ProjectModal/ProjectModal";
import "./ProjectSection.scss";

function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState("Tous");
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = ["Tous", "React", "HTML/CSS", "JavaScript", "Référencement"];

    const filteredProjects = activeFilter === "Tous" ? projectsData : projectsData.filter((project) => project.category === activeFilter);

    return (
        <div className="projects-section">
            <h2 className="projects-section__title">Mes projets</h2>

            <Filters filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            <Projects key={activeFilter} projects={filteredProjects} onOpenModal={setSelectedProject} />

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </div>
    );
}

export default PortfolioSection;
