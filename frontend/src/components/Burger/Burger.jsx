function Burger({ isOpen, toggle }) {
    if (!isOpen) {
        return (
            <div className="burger" onClick={toggle}>
                <p className="burger__icon">☰</p>
            </div>
        );
    }

    return (
        <div className={`burger ${isOpen ? "open" : ""}`} onClick={toggle}>
            <nav className="nav">
                <ul className="nav__list">
                    <li className="about">
                        <a href="#about">À propos</a>
                    </li>
                    <li>
                        <a href="#projects">Projets</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Burger;
