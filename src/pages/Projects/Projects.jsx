import "./Projects.css";
import { useState } from "react";

const projects = [
    {
        id: 1,
        title: "Tasty",
        description: "Final React Frontend Project",
        image: "https://picsum.photos/400/300",
        link: "",
        github: "github link here",
        summary: "Some random text here",
    },
    {
        id: 2,
        title: "Movie DB",
        description: "React Project",
        image: "https://picsum.photos/400/300",
        link: "",
        github: "github link here",
        summary: "Some random text here",
    },
    {
        id: 3,
        title: "Application Management Website",
        description: "An App",
        image: "https://picsum.photos/400/300",
        link: "",
        github: "github link here",
        summary: "Some random text here",
    },
    {
        id: 4,
        title: "React Weather App",
        description: "React Weather App",
        image: "https://picsum.photos/400/300",
        link: "",
        github: "github link here",
        summary:
            "Some random text here Some random text hereSome random text here",
    },
];

const Projects = () => {
    const [flippedCards, setFlippedCards] = useState({});
    const toggleFlip = (id) => {
        setFlippedCards((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };
    return (
        <div className="projects-container">
            <h2 className="projects-headline">Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`flip-card ${
                            flippedCards[project.id] ? "flip" : ""
                        }`}
                        onClick={() => toggleFlip(project.id)}
                    >
                        <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-info">
                                    <div className="project-info-container">
                                        <p className="project-description">
                                            {project.description}
                                        </p>
                                        <h3 className="project-title">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <span className="project-span">➜</span>
                                </div>
                            </div>
                            <div className="flip-card-back">
                                <div className="project-summary">
                                    {project.summary}
                                </div>
                                <div className="project-link-container">
                                    <a
                                        href={project.link}
                                        className="project-link"
                                    >
                                        Live Site
                                    </a>
                                    <a href="#" className="project-link">
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
