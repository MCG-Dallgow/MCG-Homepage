import StoreBadge from "~/components/store-badge";

export default function Page() {
  return (
    <div>
      <h1>Stunden- und Vertretungsplan</h1>
      <p>
        Am MCG lässt sich dein persönlicher Stundenplan inklusive
        außerplanmäßigen Änderungen digital einsehen. Dafür wird die Plattform
        WebUntis genutzt, für die du bei Schulbeginn Zugangsdaten erhältst. Du
        kannst deinen Stundenplan im Web oder als App einsehen.
      </p>
      <section>
        <h2>WebUntis</h2>
        <p>
          Die Website von WebUntis, auf der du dir deinen Stundenplan online
          anschauen kannst.
        </p>
        <a href="https://herakles.webuntis.com/WebUntis/?school=Marie-Curie-Gym">
          &rarr; Website besuchen
        </a>
      </section>
      <section>
        <h2>Untis Mobile</h2>
        <p>
          Die <b>offizielle</b> App von Untis für iOS und Android.
        </p>
        <div className="flex gap-4">
          <StoreBadge
            store="google-play"
            href="https://play.google.com/store/apps/details?id=com.grupet.web.app"
          />
          <StoreBadge
            store="app-store"
            href="https://apps.apple.com/de/app/untis-mobile/id926186904"
          />
        </div>
      </section>
      <section>
        <h2>BetterUntis</h2>
        <p>
          Eine <b>inoffizielle</b> quelloffene App für Android, die deinen
          WebUntis-Stundenplan anzeigt und einige zusätzliche Möglichkeiten zum
          Gestalten und Anpassen beinhaltet.
        </p>
        <div className="flex gap-4">
          <StoreBadge
            store="github"
            href="https://github.com/SapuSeven/BetterUntis/releases/latest"
          />
          <StoreBadge
            store="fdroid"
            href="https://f-droid.org/packages/com.sapuseven.untis"
          />
          <StoreBadge
            store="google-play"
            href="https://play.google.com/store/apps/details?id=com.sapuseven.untis"
          />
        </div>
      </section>
    </div>
  );
}
