import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";

const Nav = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img
                            className="logo-image"
                            src={logo}
                            alt="MichaelGee76-Logo"
                        />
                    </Link>
                </div>
                <div className={`menu ${isOpen ? "open" : ""}`}>
                    <ul>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionRefs.scrollToProjects();
                                    toggleMenu();
                                }}
                                className="nav-link"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionRefs.scrollToAbout();
                                    toggleMenu();
                                }}
                                className="nav-link"
                            >
                                About
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    sectionRefs.scrollToContact();
                                    toggleMenu();
                                }}
                                className="nav-link"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
