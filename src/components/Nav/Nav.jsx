import "./Nav.css";
import { Link } from "react-router-dom";
import lightLogo from "../../assets/images/logo.png";
import darkLogo from "../../assets/images/logo-black.png";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Nav = ({ sectionRefs }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [currentLogo, setCurrentLogo] = useState(lightLogo);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const toggleDarkLight = () => {
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute(
            "data-theme",
            isDarkMode ? "light" : "dark"
        );
        setCurrentLogo(isDarkMode ? darkLogo : lightLogo);
        setIsOpen(false);
    };

    // close menu when clicked
    const handleLinkClicks = (scrollFunction) => {
        scrollFunction();
        setIsOpen(false);
    };

    return (
        <nav>
            <div className="nav-container">
                <div className="logo">
                    <Link to="/">
                        <img
                            className="logo-image"
                            src={currentLogo}
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
                                    handleLinkClicks(
                                        sectionRefs.scrollToProjects
                                    );
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
                                    handleLinkClicks(sectionRefs.scrollToAbout);
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
                                    handleLinkClicks(
                                        sectionRefs.scrollToContact
                                    );
                                }}
                                className="nav-link"
                            >
                                Contact
                            </a>
                        </li>
                        <li className="toggle-theme" onClick={toggleDarkLight}>
                            {isDarkMode ? (
                                <FaSun size={24} color="white" />
                            ) : (
                                <FaMoon
                                    size={24}
                                    className="dark-light-icon-moon"
                                />
                            )}
                        </li>
                    </ul>
                </div>
                <div className="hamburger" onClick={toggleMenu}>
                    <div className={`bar ${isOpen ? "change" : ""}`}></div>
                    <div className={`bar ${isOpen ? "change" : ""}`}></div>
                    <div className={`bar ${isOpen ? "change" : ""}`}></div>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
