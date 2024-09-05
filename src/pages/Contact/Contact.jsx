import "./Contact.css";
import { FaLinkedin, FaXing, FaGithub } from "react-icons/fa";

const Contact = () => {
    return (
        <div className="contact-container">
            <h2 className="contact-headline">Contact</h2>
            <p className="contact-paragraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam,
                unde tenetur dicta odio sunt doloremque molestias cumque
                voluptatem, fugit expedita, blanditiis vero quos obcaecati
                aspernatur voluptatum natus dignissimos eius iste quaerat? Rerum
                repellendus ducimus atque minus. Velit iusto sequi, unde labore
                optio alias magni illo quibusdam! Quisquam possimus, beatae quos
                mollitia eum ratione vero sequi, assumenda, dignissimos autem
                explicabo. Nobis fugiat minima sit illo error veritatis?
                Deleniti consequuntur odit nisi in atque eos repellat
                repudiandae!
            </p>

            <div className="email-container">
                <span className="email-icon">📧</span>
                <a
                    href="mailto:gottungmichael@gmail.com"
                    className="email-text"
                >
                    mail@michael
                </a>
            </div>

            <div className="social-icons">
                <a
                    href="https://www.linkedin.com/in/michael-alexander-gottung-5265512a6/"
                    target="_blank"
                    className="icon-link"
                >
                    <FaLinkedin size={24} />
                </a>
                <a
                    href="https://www.xing.com/profile/MichaelAlexander_Gottung039301/web_profiles"
                    target="_blank"
                    className="icon-link"
                >
                    <FaXing size={24} />
                </a>
                <a
                    href="https://github.com/MichaelGee76/MichaelGee76"
                    target="_blank"
                    className="icon-link"
                >
                    <FaGithub size={24} />
                </a>
            </div>
        </div>
    );
};

export default Contact;
