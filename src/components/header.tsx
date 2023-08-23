import Link from "next/link";
import Image from "next/image";

import NavLink from "./navlink";

export default function Header() {
  return (
    <header className="bg-header shadow-black">
      <div className="mx-auto flex w-2/3 flex-row py-4">
        <Link href="/">
          <Image
            src="/images/mcg-logo.webp"
            alt="MCG Logo"
            width="1200"
            height="1200"
            className="h-28 w-28 rounded-full"
          />
        </Link>
        <Link
          href="/"
          className="my-auto flex flex-col pl-4 font-bold text-white"
        >
          <h1 className="my-0 text-4xl">Marie-Curie-Gymnasium</h1>
          <h3 className="my-0 text-xl">Dallgow-Döberitz</h3>
        </Link>
      </div>
      <nav className="bg-nav">
        <ul className="mx-auto mb-0 flex w-2/3 flex-row py-1">
          <NavLink title="Start" href="/" />
          <NavLink title="Unsere Schule" href="/unsere-schule">
            <NavLink title="Schulleben" href="/unsere-schule/schulleben" />
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}
