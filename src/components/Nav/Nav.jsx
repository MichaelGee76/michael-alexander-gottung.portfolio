import "./Nav.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Nav = ({ scrollToProjects }) => {
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
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
