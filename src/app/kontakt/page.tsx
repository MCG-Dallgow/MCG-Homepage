export default function Page() {
  return (
    <div>
      <h1>Kontakt</h1>
      <h3>Impressum</h3>
      <p>
        Schulleiter: Herr Steil
        <br />
        Stellvertretende Schulleiterin: Frau Gatz
        <br />
        E-Mail: <a href="mailto:mcg@mcg-dallgow.de">mcg@mcg-dallgow.de</a>
        <br />
        Telefon: <a href="tel:03322852520">+49 (0)3322 85 25 20</a>
        <br />
        Fax: <a href="tel:033228525227">+49 (0)3322 85 25 227</a>
      </p>

      <h3>Rechtliche Angaben</h3>
      <p>
        Inhaltlich Verantwortlicher gemäß TMG:
        <br />
        Thorsten Steil
        <br />
        E-Mail:{" "}
        <a href="mailto:thorsten.steil@lk.brandenburg.de">
          thorsten.steil@lk.brandenburg.de
        </a>
      </p>

      <h3>Anfahrt</h3>
      <p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.openstreetmap.org/directions?from=&to=52.54148%2C13.04493#map=15/52.5421/13.0568"
        >
          Marie-Curie-Straße 1, 14624 Dallgow Döberitz
        </a>
      </p>
      <iframe
        width="100%"
        height="500vh"
        src="https://www.openstreetmap.org/export/embed.html?bbox=13.040438890457153%2C52.54000570422354%2C13.049397468566896%2C52.54287676733053&amp;layer=mapnik&amp;marker=52.54144125924865%2C13.044918179512024"
        className="rounded-lg border border-black"
      ></iframe>
      <br />
    </div>
  );
}
