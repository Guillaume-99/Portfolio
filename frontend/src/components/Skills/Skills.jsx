import "./Skills.scss";
function Skills() {
    return (
        <div className="skills">
            <h2 className="skills__title">Compétences</h2>
            <ul className="skills__list">
                <li className="skills__item html">
                    <i className="fa-brands fa-html5"></i>
                    <p className="hidden">HTML</p>
                </li>
                <li className="skills__item css">
                    <i className="fa-brands fa-css3-alt"></i>
                    <p className="hidden">CSS</p>
                </li>
                <li className="skills__item git">
                    <i className="fa-brands fa-github"></i>
                    <p className="hidden">Git</p>
                </li>
                <li className="skills__item react">
                    <i className="fa-brands fa-react"></i>
                    <p className="hidden">React</p>
                </li>

                <li className="skills__item javascript">
                    <i className="fa-brands fa-js"></i>
                    <p className="hidden">JavaScript</p>
                </li>
            </ul>
        </div>
    );
}

export default Skills;
