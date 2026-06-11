import { SiHtml5, SiCss, SiGithub, SiReact, SiJavascript } from "react-icons/si";
import "./Skills.scss";
function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__title">Compétences</h2>
            <ul className="skills__list">
                <li className="skills__item html">
                    <SiHtml5 className="skills__item--icons" />
                    <p className="hidden">HTML</p>
                </li>
                <li className="skills__item css">
                    <SiCss className="skills__item--icons" />
                    <p className="hidden">CSS</p>
                </li>
                <li className="skills__item git">
                    <SiGithub className="skills__item--icons" />
                    <p className="hidden">Git</p>
                </li>
                <li className="skills__item react">
                    <SiReact className="skills__item--icons" />
                    <p className="hidden">React</p>
                </li>

                <li className="skills__item javascript">
                    <SiJavascript className="skills__item--icons" />
                    <p className="hidden">JavaScript</p>
                </li>
            </ul>
        </div>
    );
}

export default Skills;
