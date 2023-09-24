import Link from "next/link";
import Image from "next/image";

import NavLink from "./navlink";

export default function Header() {
  return (
    <header className="bg-header">
      <div className="flex justify-center">
        <div className="flex w-2/3 py-4">
          <Link href="/">
            <Image
              src="/images/mcg-logo.webp"
              alt="MCG Logo"
              width="1200"
              height="1200"
              className="h-28 w-28 rounded-full"
            />
          </Link>
          <div className="flex flex-col justify-center pl-4">
            <Link href="/" className="font-bold text-white hover:text-white">
              <h1 className="py-0 text-4xl">Marie-Curie-Gymnasium</h1>
              <h3 className="py-0 text-xl">Dallgow-Döberitz</h3>
            </Link>
          </div>
        </div>
      </div>
      <nav className="flex justify-center bg-nav">
        <ul className="flex w-2/3 gap-8 p-0">
          <NavLink title="Start" href="/" />
          <NavLink title="Unsere Schule" href="/unsere-schule">
            <NavLink title="Vorstellung" href="/unsere-schule/vorstellung" />
            <NavLink title="Schulleben" href="/unsere-schule/schulleben" />
            <NavLink title="Digitale Schule" href="/unsere-schule/digitale-schule" />
          </NavLink>
          <NavLink title="Für Schüler" href="/fuer-schueler">
            <NavLink title="Stundenplan" href="/fuer-schueler/stundenplan" />
            <NavLink title="AGs" href="/fuer-schueler/arbeitsgemeinschaften" />
            <NavLink title="MCG-App" href="/fuer-schueler/mcg-app" />
          </NavLink>
          <NavLink title="Für Eltern" href="/fuer-eltern">
            <NavLink title="Schließfächer" href="/fuer-eltern/schliessfaecher" />
          </NavLink>
          <NavLink title="Kontakt" href="/kontakt" />
        </ul>
      </nav>
    </header>
  );
}
