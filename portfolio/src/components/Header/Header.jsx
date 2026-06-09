import Burger from "../Burger/Burger";
import "./Header.scss";
import { useState } from "react";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header>
            <h1 className="name">Guillaume CEBIL</h1>
            <Burger isOpen={isOpen} toggle={toggle} />
        </header>
    );
}

export default Header;
