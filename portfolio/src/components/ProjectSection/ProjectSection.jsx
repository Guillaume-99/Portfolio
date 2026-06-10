import { useState } from "react";
import { projectsData } from "../../data/projectData";
import Filters from "../Filters/Filters";
import Projects from "../Projects/Projects";
import ProjectModal from "../ProjectModal/ProjectModal";

function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState("Tous");
    const [selectedProject, setSelectedProject] = useState(null);

    const filters = ["Tous", "React", "HTML/CSS", "JavaScript", "Référencement"];

    const filteredProjects = activeFilter === "Tous" ? projectsData : projectsData.filter((project) => project.category === activeFilter);

    return (
        <section id="projects">
            <h2>Projets</h2>

            <Filters filters={filters} activeFilter={activeFilter} setActiveFilter={setActiveFilter} />

            <Projects projects={filteredProjects} onOpenModal={setSelectedProject} />

            <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        </section>
    );
}

export default PortfolioSection;
