import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Unsere Schule</h1>
      <section>
        <h2>Wer sind wir?</h2>
        <Image
          src="/images/mcg-logo.webp"
          alt="MCG Logo"
          width="200"
          height="200"
          className="float-right"
        />
        <p>
          Die gesamte Schulgemeinschaft des Marie-Curie-Gymnasiums in
          Dallgow-Döberitz begrüßt Sie recht herzlich auf der Homepage unserer
          Schule.
        </p>
        <p>
          Seien Sie eingeladen, sich über unsere schöne und moderne Schule zu
          informieren, sich einen Überblick über die Unterrichtsinhalte und über
          das Schulleben zu verschaffen.
        </p>
        <p>
          Unser Gymnasium wurde im Schuljahr 2002/2003 mit zwei siebten Klassen
          völlig neu gegründet und hat seitdem eine interessante und spannende
          Schulentwicklung vollzogen.
        </p>
      </section>
      <section>
        <h2>Unsere Schwerpunkte</h2>
        <p>
          Dem Namen Marie Curie verpflichtet, legen wir einerseits großen Wert
          auf die Ausbildung in den MINT-Fächern (Mathematik, Informatik,
          Naturwissenschaften und Technik). Aus diesem Grund wurde unsere Schule
          im November des Jahres 2016 in das nationale MINT-EC-Schulnetzwerk
          aufgenommen.
        </p>
        <p>
          Andererseits stärken wir in einem weiteren Schwerpunkt die Geistes-
          und Sozialwissenschaften sowie die Sprachen.
        </p>
        <p>
          Praktisch sieht das so aus, dass je nach Anzahl der Klassen im
          Jahrgang jeweils 2 bis 3 Klassen dem naturwissenschaftlichen Zweig und
          2 bis 3 Klassen dem gesellschaftswissenschaftlich-sprachlichen Zweig
          angehören. Seit dem Schuljahr 2017/2018 wird jährlich im
          gesellschaftswissenschaftlich-sprachlichen Zweig eine bilinguale
          Klasse eingerichtet.
        </p>
      </section>
      <section>
        <h2>Schulleben</h2>
        <p>
          Uns liegt ein interessantes und abwechslungsreiches Schulleben stark
          am Herzen. Ziele dabei sind:
        </p>
        <ul>
          <li>
            die Entwicklung eines Wir-Gefühls durch starke Identifikation von
            Schülern, Lehrkräften und Eltern mit ihrer Schule und
          </li>
          <li>
            die Durchführung von schulischen Veranstaltungen, Projekten und
            Höhepunkten.
          </li>
        </ul>
        <p>
          Das <Link href="/unsere-schule/schulleben#patenprojekt">Patenprojekt</Link>,
          die AG Schulklima, viele weitere&nbsp;
          <Link href="/fuer-schueler/arbeitsgemeinschaften">Arbeitsgemeinschaften</Link>
          &nbsp;und interessante Kooperationspartner in den Bereichen Wissenschaft
          und Wirtschaft helfen uns bei der Erfüllung dieser Ziele.
        </p>
        <br />
      </section>
      <section>
        <p>
          Sind Sie neugierig geworden? Das ist gut so, denn viele weitergehende
          Detailinformationen erwarten Sie auf den nächsten Seiten unserer
          Homepage.
        </p>
        <br />
        <p>
          <i>Die Schulgemeinschaft des Marie-Curie-Gymnasiums</i>
        </p>
        <Image
          src="/images/mintec-logo.webp"
          alt="MINT-EC Logo"
          width={980 / 3}
          height={450 / 3}
          className="rounded-xl"
        />
      </section>
    </div>
  );
}
