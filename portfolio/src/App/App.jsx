import Header from "../components/Header/Header";
import About from "../components/AboutMe/AboutMe";
import Projects from "../components/ProjectCard/ProjectCard";
import Skills from "../components/Skills/Skills";
import Contact from "../components/ContactForm/ContactForm";

function App() {
    return (
        <>
            <Header />
            <main>
                <section id="skills">
                    <Skills />
                </section>

                <section id="projects">
                    <Projects />
                </section>

                <section id="about">
                    <About />
                </section>

                <section id="contact">
                    <Contact />
                </section>
            </main>
        </>
    );
}

export default App;
