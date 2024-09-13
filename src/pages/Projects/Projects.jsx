import "./Projects.css";
import { useState } from "react";
import etchImage from "../../assets/images/etch-a-sketch.png";
import sportsDb from "../../assets/images/sportsDB.png";
import finsta from "../../assets/images/finstagram.png";
import tasty from "../../assets/images/tasty.png";
import movie from "../../assets/images/movie4you.png";
import weather from "../../assets/images/weather-react.png";

const projects = [
    {
        id: 1,
        title: "Tasty",
        image: tasty,
        link: "https://tasty-mu.vercel.app/",
        github: "https://github.com/fredwardp/tasty",
        summary:
            "Tasty is a mobile-only web app that allows users to browse and search for recipes by category and country, providing detailed recipe information, built using React and a third-party recipe API.",
        stack: "React, API",
    },
    {
        id: 2,
        title: "Finstagram",
        image: finsta,
        link: "https://www.mern-stack.de/",
        github: "https://github.com/MichaelGee76/finstergram",
        summary:
            "Finstagram is a full-featured Instagram clone that allows users to follow others, post images with filters, engage with posts, and includes features like chat, notifications, and a dark mode, built using React, Express.js, and MongoDB.",
        stack: "React, Express.js, Mongoose, MongoDB",
    },
    {
        id: 3,
        title: "Sports Database",
        image: sportsDb,
        link: "https://sports-db-eta.vercel.app/",
        github: "https://github.com/fredwardp/SportsDB?tab=readme-ov-file",
        summary:
            "SportsDB is a React-based application that provides real-time, detailed information on clubs, leagues, and players from various sports, with customizable themes and filtering options.",
        stack: "React, API",
    },
    {
        id: 4,
        title: "Etch-A-Sketch",
        image: etchImage,
        link: "https://michaelgee76.github.io/etch-a-sketch/",
        github: "https://github.com/MichaelGee76/etch-a-sketch",
        summary:
            "Etch-A-Sketch is an interactive drawing game where users create pixelated designs by moving their mouse across a customizable grid.",
        stack: "HTML, CSS, JavaScript",
    },
    {
        id: 5,
        title: "Movie4You",
        image: movie,
        link: "https://movie4you-fawn.vercel.app/",
        github: "https://github.com/MichaelGee76/movie4you-react",
        summary:
            "Movies4You is a React-based web application that offers a movie list with filtering and search functionalities, allowing users to sort by date, rating, and alphabetical order.",
        stack: "HTML, CSS, JavaScript",
    },
    {
        id: 6,
        title: "Weather-App",
        image: weather,
        link: "https://michaelgee76.github.io/weather/",
        github: "https://github.com/MichaelGee76/weather",
        summary:
            "The weather app is a JavaScript-based application that provides current weather information and a 5-day forecast for any location, with dynamic background changes based on the weather conditions.",
        stack: "HTML, CSS, JavaScript",
    },
];

const Projects = () => {
    const [flippedCardId, setFlippedCardId] = useState(null);

    const toggleFlip = (id) => {
        if (flippedCardId === id) {
            setFlippedCardId(null);
        } else {
            setFlippedCardId(id);
        }
    };

    return (
        <div className="projects-container">
            <h2 className="projects-headline">Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`flip-card ${
                            flippedCardId === project.id ? "flip" : ""
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
                                <h3 className="flip-card-front-headline">
                                    {project.title}
                                </h3>
                                <p className="flip-card-front-stack">
                                    {project.stack}
                                </p>
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
