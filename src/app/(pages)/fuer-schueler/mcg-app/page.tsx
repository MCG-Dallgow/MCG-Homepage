import Link from "next/link";

export default function Page() {
  return (
    <div>
      <section>
        <h1>MCG-App</h1>
        <p>
          Die MCG-App wird eigens von Schülern programmiert, um den Schulalltag
          am MCG zu erleichtern.<br />
          Sie wurde in der Projektwoche zum 20. Jahrestag des MCG erstellt und
          wird seitdem aktiv weiterentwickelt.
        </p>
        <p>
          Die MCG-App ist Open Source! Sieh dir den Quellcode&nbsp;
          <Link
            href="https://github.com/MCG-Dallgow/MCG-App"
            target="_blank"
            rel="noopener noreferrer"
          >hier</Link>
          &nbsp;an.
        </p>
      </section>
      <section>
        <h2>Benutzung</h2>
        <p>
          Die App ist leider noch nicht im Google Play Store oder Apple App
          Store verfügbar, da die dortige Veröffentlichung mit viel Aufwand und
          Kosten verbunden ist. Ihr könnt die App jedoch auf zwei andere Wege
          verwenden:
        </p>
        <h3>Android APK</h3>
        <p>
          Wenn ihr ein Android-Gerät benutzt, könnt ihr euch über die&nbsp;
          <Link
            href="https://github.com/MCG-Dallgow/MCG-App/releases"
            target="_blank"
            rel="noopener noreferrer"
          >Releases-Page</Link>
          &nbsp;auf GitHub eine APK-Version der App herunterladen. So könnt
          ihr die MCG-App direkt ohne den Google Play Store installieren. Wenn
          ihr zum ersten Mal eine APK-Datei installiert, müsst ihr zusätzlich
          das "Installieren von Apps aus unbekannten Quellen" o.Ä. in den
          Einstellungen aktivieren.
        </p>
        <h3>Web App</h3>
        <p>
          Wenn ihr ein iOS-Gerät oder einen PC benutzt, oder die APK-Version aus
          anderen Gründen keine Option ist, könnt ihr die App auch direkt ohne
          Installation im Browser als Web-App nutzen. Klickt dazu auf folgenden
          Link:&nbsp;
          <Link
            href="https://mcg-app.hafemann.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >mcg-app.hafemann.xyz</Link>
        </p>
      </section>
      <section>
        <h2>Funktionen</h2>
        <ul>
          <li>Vertretungsplan mit Filterfunktion</li>
          <li>Lehrerliste</li>
          <li>Interaktiver Raumplan</li>
          <li>Notenübersicht</li>
          <li><i>Stundenplan (Coming Soon)</i></li>
          <li><i>Hausaufgaben- und Terminplaner (Coming Soon)</i></li>
        </ul>
        <h3>Vertretungsplan</h3>
        <ul>
          <li>Aktualisierender Vertretungsplan via WebUntis</li>
          <li>Pläne für die nächsten fünf Schultage</li>
          <li>Übersichtliche Darstellung</li>
          <li>Filterfunktion nach Klassen, Kursen und Lehrern</li>
        </ul>
        <h3>Lehrerliste</h3>
        <ul>
          <li>Auflistung aller Lehrer des MCG</li>
          <li>Suchfunktion</li>
          <li>E-Mail-Adresse jedes Lehrers</li>
          <li>Kontaktdaten des Sekretariats</li>
        </ul>
        <h3>Interaktiver Raumplan</h3>
        <ul>
          <li>Grafische Darstellung beider Stockwerke des MCG</li>
          <li>Übersichtliches Layout</li>
          <li>Mehr Informationen über jeden Raum</li>
          <li><i>Suchfunktion zum einfachen Finden von Räumen (Coming Soon)</i></li>
        </ul>
        <h3>Notenübersicht</h3>
        <ul>
          <li>Hinzufügen, Bearbeiten & Löschen von Noten</li>
          <li>Automatische Berechnung des Gesamtdurchschnitts</li>
          <li>Nach Fächern sortierte Liste mit Fächerdurchschnitten</li>
        </ul>
        <h3>Einstellungen</h3>
        <ul>
          <li>Dark-Mode</li>
        </ul>
      </section>
      <section>
        <h2>Rechtliche Informationen</h2>
        <p>
          Die MCG-App wurde nicht von der Schulleitung des Marie-Curie-Gymnasiums
          Dallgow-Döberitz in Auftrag gegeben und wird nicht von ihr betreut.
          Die Schulleitung ist in keiner Weise für jegliche sich aus der
          Veröffentlichung sowie der Verwendung ergebende Folgen verantwortlich.
        </p>
        <p>
          Die Nutzung der App erfolgt auf eigene Gefahr und Verantwortung.
          Es besteht keinerlei Garantie auf Richtigkeit, Vollständigkeit oder
          Verfügbarkeit der angezeigten Informationen in allen derzeitigen
          und künfigen Elementen der App. Dies trifft unter Anderem auf den
          Stundenplan, den Vertretungsplan, den Raumplan, die Lehrerliste und
          jegliche Funktionen der Notenübersicht zu.
        </p>
        <p>
          Die MCG-App ist unter der&nbsp;
          <Link
            href="https://www.gnu.org/licenses/gpl-3.0.en.html#license-text"
            target="_blank"
            rel="noopener noreferrer"
          >GNU General Public License v3.0</Link>
          &nbsp;lizenziert.
        </p>
        <p>
          Projektleitung: Sven Luca Hafemann<br />
          Mitwirkende:&nbsp;
          <Link
            href="https://github.com/MCG-Dallgow/MCG-App/graphs/contributors"
            target="_blank"
            rel="noopener noreferrer"
          >siehe GitHub</Link>
        </p>
      </section>
    </div>
  );
}