export default function Footer() {
  return (
    <footer className="text-white">
      <section className="flex justify-center bg-header py-16">
        <div className="flex gap-36">
          <div className="">
            <h2 className="pt-0">Adresse</h2>
            <p className="pb-0">
              Marie-Curie-Gymnasium
              <br />
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.openstreetmap.org/directions?from=&to=52.54148%2C13.04493#map=15/52.5421/13.0568"
                className="text-footer-link hover:text-footer-link-active"
              >
                Marie-Curie-Straße 1<br />
                14624 Dallgow-Döberitz
              </a>
            </p>
          </div>
          <div className="">
            <h2 className="pt-0">Kontakt</h2>
            <p className="pb-0">
              E-Mail:{" "}
              <a
                href="mailto:mcg@mcg-dallgow.de"
                className="text-footer-link hover:text-footer-link-active"
              >
                mcg@mcg-dallgow.de
              </a>
              <br />
              Telefon:{" "}
              <a
                href="tel:03322852520"
                className="text-footer-link hover:text-footer-link-active"
              >
                +49 (0)3322 85 25 20
              </a>
              <br />
              Fax:{" "}
              <a
                href="tel:033228525227"
                className="text-footer-link hover:text-footer-link-active"
              >
                +49 (0)3322 85 25 227
              </a>
              <br />
            </p>
          </div>
        </div>
      </section>
      <section className="bg-nav py-8">
        <p className="pb-0 text-center">© 2023 Marie-Curie-Gymnasium</p>
      </section>
    </footer>
  );
}
