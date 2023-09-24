import Link from "next/link";

export default function Page() {
     return (
        <div>
            <h1>Schließfächer am MCG</h1>
            <section>
                <h2>Wie miete ich ein Schließfach?</h2>
                <p>
                    Schließfächer können von Schülerinnen und Schülern gemietet werden.<br />
                    Die Miete beträgt 2,60 € pro Monat (31,20 € für 12 Monate) und mit&nbsp;
                    <Link
                        href="https://www.astradirect.de/schueler"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Schutzbrief</Link>
                    &nbsp;43,20 € für 12 Monate.<br />
                    Die Schließfächer werden vom Unternehmen "Astradirect" zur Verfügung gestellt.
                </p>
                <p>
                    <Link
                        href="https://www.astradirect.de/schliessfaecher/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Hier</Link>
                    &nbsp;können Sie sich über die Schließfächer informieren.
                </p>
            </section>
            <section>
                <h2>Anleitung</h2>
                <ol className="list-decimal list-outside pl-5">
                    <li>
                        Gehen Sie auf die Website von&nbsp;
                        <Link
                            href="https://www.astradirect.de/fach-mieten/schule-waehlen"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Astradirect</Link>
                    </li>
                    <li>Geben Sie bei Ort der Schule "Dallgow-Döberitz" ein und wählen Sie bei dem Namen der Schule das Marie-Curie-Gymnasium</li>
                    <li>Wählen Sie den Standort des Schließfaches (Am Marie-Curie-Gymnasium können Sie zwischen drei Standorten wählen!)</li>
                    <li>Wählen Sie die gewünschte Schließfachgröße aus</li>
                    <li>Wählen Sie die gewünschte Mietdauer aus</li>
                    <li>Wählen Sie die gewünschte Zahlungsart aus</li>
                    <li>Geben Sie Ihre Daten ein</li>
                    <li>Bestätigen Sie Ihre Bestellung</li>
                </ol>
            </section>
            <section>
                <h2>Wie kann ich mein Schließfach nutzen?</h2>
                <p>Sie können Ihr Schließfach mit einem Zahlencode öffnen. Der Zahlencode wird Ihnen per E-Mail zugeschickt.</p>
                <p>Die Schließfächer finden Sie im Haupteingang Flur (Treppenhaus C), im Treppenhaus zwischen C und D, sowie im Keller (Raum UG.60).</p>
            </section>
        </div>
    );
}
