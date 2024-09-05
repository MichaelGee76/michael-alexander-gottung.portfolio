import "./Projects.css";

const projects = [
    {
        id: 1,
        title: "Tasty",
        description: "Final React Frontend Project",
        image: "https://picsum.photos/id/1/300/200",
        link: "",
    },
    {
        id: 2,
        title: "Movie DB",
        description: "React Project",
        image: "https://picsum.photos/id/2/300/200",
        link: "",
    },
    {
        id: 3,
        title: "Application Management Website",
        description: "An App",
        image: "https://picsum.photos/id/3/300/200",
        link: "",
    },
    {
        id: 4,
        title: "React Weather App",
        description: "React Weather App",
        image: "https://picsum.photos/id/4/300/200",
        link: "",
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2 className="projects-headline">Projects</h2>
            <div className="project-container">
                {projects.map((project) => (
                    <div key={project.id} className="project-card">
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
                            <a href={project.link} className="project-link"></a>
                            <span className="project-span">➜</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
