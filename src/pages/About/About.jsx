import "./About.css";

const About = () => {
    return (
        <div className="about-container">
            <h3 className="about-headline">About Michael</h3>
            <div className="about-card">
                <p className="about-paragraph">
                    My journey into web development started after pursuing my
                    passion for problem-solving and creative thinking. After
                    enrolling in a Full-Stack Bootcamp at SuperCode and
                    dedicating countless hours to self-study, I successfully
                    transitioned into a career as a developer. Though it hasn't
                    always been easy, the challenges along the way have made me
                    more curious and eager to learn.
                </p>{" "}
                <p className="about-paragraph">
                    {" "}
                    I thrive in environments where I'm constantly expanding my
                    skill set, and I love the progress I see each day. Turning
                    ideas into tangible digital solutions has been an incredibly
                    rewarding experience, and I'm excited to continue growing in
                    this dynamic field.
                </p>
            </div>
        </div>
    );
};

export default About;
