import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Imprint from "./pages/Imprint/Imprint.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useRef } from "react";
import ScrollToTop from "./components/ScrollToTop/scrollToTop.jsx";

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
            <ScrollToTop />
            <Nav sectionRefs={refWithScroll} />
            <Routes>
                <Route
                    path="/"
                    element={<Home sectionRefs={refWithScroll} />}
                />
                <Route path="/imprint" element={<Imprint />} />
            </Routes>
        </Router>
    );
}

export default App;
