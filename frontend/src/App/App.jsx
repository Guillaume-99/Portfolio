import Header from "../components/Header/Header";
import About from "../components/AboutMe/AboutMe";
import Projects from "../components/ProjectSection/ProjectSection";
import Skills from "../components/Skills/Skills";
import Contact from "../components/ContactForm/ContactForm";
import Hero from "../components/Hero/Hero";

function App() {
    return (
        <>
            <Header />
            <main>
                <section id="hero">
                    <Hero />
                </section>

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
