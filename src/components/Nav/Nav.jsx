import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Nav = ({ scrollToProjects, scrollToAbout, scrollToContact }) => {
    return (
        <nav>
            <div className="logo">
                <img
                    className="logo-image"
                    src={logo}
                    alt="MichaelGee76-Logo"
                />
            </div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <a
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToProjects();
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
                            scrollToAbout();
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
                            scrollToContact();
                        }}
                        className="nav-link"
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
