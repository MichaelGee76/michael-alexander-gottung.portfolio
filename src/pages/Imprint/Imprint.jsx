import "./Imprint.css";
import { Link } from "react-router-dom";

const Imprint = () => {
    return (
        <div className="imprint-container">
            <div className="imprint-content">
                <h1>Legal Notice (Impressum)</h1>

                <h2>Information according to § 5 TMG</h2>
                <p>
                    <strong>Michael Alexander Gottung</strong> <br />
                    Hauptstraße 8 <br />
                    74229 Oedheim <br />
                    Germany
                </p>

                <h2>Contact</h2>
                <p>
                    Email:{" "}
                    <a href="mailto:gottungmichael@gmail.com">
                        gottungmichael@gmail.com
                    </a>
                </p>

                <h2>Job Title</h2>
                <p>Full Stack Web Developer</p>

                <h2>Responsible for content according to § 55 Abs. 2 RStV</h2>
                <p>
                    <strong>Michael Alexander Gottung</strong> <br />
                    Hauptstraße 8 <br />
                    74229 Oedheim
                </p>

                <h2>Disclaimer</h2>
                <h3>Liability for content</h3>
                <p>
                    As a service provider, we are responsible for our own
                    content on these pages in accordance with § 7 paragraph 1 of
                    the TMG under general laws.
                </p>
                <p>
                    Obligations to remove or block the use of information in
                    accordance with general laws remain unaffected.
                </p>

                <h3>Liability for links</h3>
                <p>
                    Our website contains links to external third-party websites,
                    over whose content we have no control. Therefore, we cannot
                    accept any responsibility for these external contents.
                </p>
            </div>
            <div className="imprint-link-home">
                <Link to="/" className="home-button">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Imprint;
