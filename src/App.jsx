import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useRef } from "react";

function App() {
    const sectionRefs = {
        projectsRef: useRef(null),
        aboutRef: useRef(null),
        contactRef: useRef(null),
    };

    const scrollToSections = (ref) => {
        ref.current?.scrollIntoView({ behavior: "smooth" });
    };
    const refWithScroll = {
        ...sectionRefs,
        scrollToProjects: () => scrollToSections(sectionRefs.projectsRef),
        scrollToAbout: () => scrollToSections(sectionRefs.aboutRef),
        scrollToContact: () => scrollToSections(sectionRefs.contactRef),
    };

    return (
        <Router>
            <Nav sectionRefs={refWithScroll} />
            <Routes>
                <Route
                    path="/"
                    element={<Home sectionRefs={refWithScroll} />}
                />
            </Routes>
        </Router>
    );
}

export default App;
