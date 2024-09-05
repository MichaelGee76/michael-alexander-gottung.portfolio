import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Contact from "./pages/Contact/Contact.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import { useRef } from "react";

function App() {
    const projectsRef = useRef(null);
    const aboutRef = useRef(null);
    const contactRef = useRef(null);

    const scrollToProjects = () => {
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToAbout = () => {
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <Router>
            <Nav
                scrollToProjects={scrollToProjects}
                scrollToAbout={scrollToAbout}
                scrollToContact={scrollToContact}
            />
            <Routes>
                <Route
                    path="/"
                    element={
                        <Home
                            projectsRef={projectsRef}
                            aboutRef={aboutRef}
                            contactRef={contactRef}
                        />
                    }
                />
            </Routes>
        </Router>
    );
}

export default App;
