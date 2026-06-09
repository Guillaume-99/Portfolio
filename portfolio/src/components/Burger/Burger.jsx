import { NavLink } from "react-router-dom";
function Burger({ isOpen, toggle, closeMenu }) {
    if (!isOpen) {
        return (
            <div className="burger" onClick={toggle}>
                <i className="fa-solid fa-bars"></i>
            </div>
        );
    }

    return (
        <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggle}>
            <nav className="nav">
                <i className="fa-solid fa-x close" onClick={closeMenu}></i>
                <ul className="nav__list">
                    <li>
                        <NavLink to="#about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="#projects">Projects</NavLink>
                    </li>
                    <li>
                        <NavLink to="#contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Burger;
