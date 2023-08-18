import Link from "next/link";
import Image from "next/image";

import NavBar from "./navbar";
import NavLink from "./navlink";

export default function Header() {
  return (
    <header>
      <div>
        <Link href="/">
          <Image
            src="/images/mcg-logo.webp"
            alt="MCG Logo"
            width="100"
            height="100"
          />
        </Link>
        <Link href="/">
          <h1>Marie-Curie-Gymnasium</h1>
          <h3>Dallgow-Döberitz</h3>
        </Link>
      </div>
      <NavBar>
        <NavLink title="Start" href="/" />
        <NavLink title="Unsere Schule" href="/unsere-schule" />
      </NavBar>
    </header>
  );
}
