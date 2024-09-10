import "./Contact.css";
import { FaLinkedin, FaXing, FaGithub, FaEnvelope } from "react-icons/fa";
// TODO - fix the dark light wave animation
const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-headline">Contact</h2>
            <h3 className="contact-secondary-headline contact-paragraph">
                Feel free to reach out!{" "}
            </h3>
            <p className="contact-paragraph">
                I'd love to hear from you! Whether you have a project in mind, a
                question, or just want to connect, feel free to send me an
                email. You can also connect with me on LinkedIn or Xing. <br />{" "}
                I look forward to meeting new people and exploring new
                opportunities!
            </p>

            <div className="contact-mail-social-container">
                <div className="social-icons">
                    <a
                        href="mailto:gottungmichael@gmail.com"
                        className="email-text icon"
                    >
                        <FaEnvelope size={32} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/michael-alexander-gottung-5265512a6/"
                        target="_blank"
                        className="icon-link"
                    >
                        <FaLinkedin size={32} />
                    </a>
                    <a
                        href="https://www.xing.com/profile/MichaelAlexander_Gottung039301/web_profiles"
                        target="_blank"
                        className="icon-link"
                    >
                        <FaXing size={32} />
                    </a>
                    <a
                        href="https://github.com/MichaelGee76/MichaelGee76"
                        target="_blank"
                        className="icon-link"
                    >
                        <FaGithub size={32} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;
