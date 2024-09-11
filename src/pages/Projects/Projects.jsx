import "./Projects.css";
import { useState } from "react";
import etchImage from "../../assets/images/etch-a-sketch.png";
import sportsDb from "../../assets/images/SportsDB.png";
import finsta from "../../assets/images/finstagram.png";
import tasty from "../../assets/images/tasty.png";

const projects = [
    {
        id: 1,
        title: "Tasty",
        image: tasty,
        link: "https://tasty-mu.vercel.app/",
        github: "https://github.com/fredwardp/tasty",
        summary:
            "Tasty is a mobile-only web app that allows users to browse and search for recipes by category and country, providing detailed recipe information, built using React and a third-party recipe API.",
    },
    {
        id: 2,
        title: "Finstagram",
        image: finsta,
        link: "https://www.mern-stack.de/",
        github: "https://github.com/MichaelGee76/finstergram",
        summary:
            "Finstagram is a full-featured Instagram clone that allows users to follow others, post images with filters, engage with posts, and includes features like chat, notifications, and a dark mode, built using React, Express.js, and MongoDB.",
    },
    {
        id: 3,
        title: "Sports Database",
        image: sportsDb,
        link: "https://sports-db-eta.vercel.app/",
        github: "https://github.com/fredwardp/SportsDB?tab=readme-ov-file",
        summary:
            "SportsDB is a React-based application that provides real-time, detailed information on clubs, leagues, and players from various sports, with customizable themes and filtering options.",
    },
    {
        id: 4,
        title: "Etch-A-Sketch",
        image: etchImage,
        link: "https://michaelgee76.github.io/etch-a-sketch/",
        github: "https://github.com/MichaelGee76/etch-a-sketch",
        summary:
            "Etch-A-Sketch is an interactive drawing game where users create pixelated designs by moving their mouse across a customizable grid.",
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
                                {/* <div className="project-info">
                                    <div className="project-info-container">
                                        <h3 className="project-title">
                                            {project.title}
                                        </h3>
                                    </div>
                                </div> */}
                            </div>
                            <div className="flip-card-back">
                                <div className="project-summary">
                                    {project.summary}
                                </div>
                                <div className="project-link-container">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        className="project-link"
                                    >
                                        Live Site
                                    </a>
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        className="project-link"
                                    >
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
