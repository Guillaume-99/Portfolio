import Burger from "../Burger/Burger";
import DesktopNav from "../DesktopNav/DesktopNav";
import "./Header.scss";
import { useState } from "react";
function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <h1 className="name">Guillaume CEBIL</h1>
            <Burger isOpen={isOpen} toggle={toggle} />
            <DesktopNav />
        </header>
    );
}

export default Header;
