import "./Imprint.css";
import { Link } from "react-router-dom";

const Imprint = () => {
    return (
        <div className="imprint-container">
            <div className="imprint-content">
                <h1>Impressum</h1>

                <h2>Angaben gemäß § 5 TMG</h2>
                <p>
                    <strong>Michael Alexander Gottung</strong> <br />
                    Hauptstraße 8 <br />
                    74229 Oedheim <br />
                    Deutschland
                </p>

                <h2>Kontakt</h2>
                <p>
                    E-Mail:{" "}
                    <a href="mailto:gottungmichael@gmail.com">
                        gottungmichael@gmail.com
                    </a>
                </p>

                <h2>Berufsbezeichnung</h2>
                <p>Full Stack Web Entwickler</p>

                <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <p>
                    <strong>Michael Alexander Gottung</strong> <br />
                    Hauptstraße 8 <br />
                    74229 Oedheim
                </p>

                <h2>Haftungsausschluss (Disclaimer)</h2>
                <h3>Haftung für Inhalte</h3>
                <p>
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                    Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                    verantwortlich.
                </p>
                <p>
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                    Informationen nach den allgemeinen Gesetzen bleiben hiervon
                    unberührt.
                </p>

                <h3>Haftung für Links</h3>
                <p>
                    Unser Angebot enthält Links zu externen Websites Dritter,
                    auf deren Inhalte wir keinen Einfluss haben. Deshalb können
                    wir für diese fremden Inhalte auch keine Gewähr übernehmen.
                </p>
            </div>
            <div className="imprint-link-home">
                <Link to="/" className="home-button ">
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Imprint;
