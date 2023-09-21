import Heading from "~/components/heading";

export default function Page() {
  return (
    <div>
      <h1>Für Schüler</h1>
      <p>
        Hier sind Angebote aufgelistet, die deinen Alltag als Schüler
        erleichtern oder verbessern können.
      </p>
      <section>
        <Heading href="/fuer-schueler/stundenplan">
          Stunden- und Vertretungsplan
        </Heading>
        <p>
          Am MCG lässt sich dein persönlicher Stundenplan inklusive
          außerplanmäßigen Änderungen digital einsehen. Dafür wird die Plattform
          WebUntis genutzt, für die du bei Schulbeginn Zugangsdaten erhältst. Du
          kannst deinen Stundenplan im Web, als App oder auch direkt auf dieser
          Seite einsehen.
        </p>
      </section>
      <section>
        <Heading href="/fuer-schueler/arbeitsgemeinschaften">AGs</Heading>
        <p>
          Das MCG besitzt ein vielfältiges Angebot an Arbeitsgemeinschaften
          (AGs), die du nach dem Unterricht besuchen kannst. Von Sport bis hin
          zu Informatik gibt es dabei für alle Interessen eine passende Option.
          Auf dieser Seite findest du eine Übersicht aller verfügbaren AGs.
        </p>
      </section>
      <section>
        <Heading href="/fuer-schueler/wettbewerbe">Wettbewerbe</Heading>
        <p>
          Als Schüler des MCG kannst du an vielen Olympiaden und anderen
          Wettbewerben teilnehmen. Besonderen Wert wird dabei auf Wettbewerbe im
          MINT-Bereich gelegt, aber auch sprachliche und künstlerische Angebote
          sind vertreten. Auf dieser Seite findest du eine Übersicht an aktuell
          anstehenden Olympiaden und Wettbewerben.
        </p>
      </section>
      <section>
        <Heading href="/fuer-schueler/schuelerzeitung">Schülerzeitung</Heading>
        <p>
          Am MCG wird regelmäßig eine Schülerzeitung veröffentlicht. Diese wird
          von Schülern selbst in der Schülerzeitungs-AG entworfen und verfasst.
          Auch du kannst mitmachen! Auf dieser Seite findest du weitere
          Informationen über die Redaktion und kannst dir die bereits
          veröffentlichten Exemplare durchlesen.
        </p>
      </section>
      <section>
        <Heading href="/fuer-schueler/mcg-app">MCG-App</Heading>
        <p>
          Die MCG-App wird eigens von Schülern programmiert, um den Schulalltag
          am MCG zu erleichtern. Zu den Funktionen der App gehören unter anderem
          ein individueller Stunden- und Vertretungsplan, eine Übersicht aller
          Lehrer und einen auf das MCG zugeschnittenen Notenplaner. Auf dieser
          Seite findest du weitere Informationen über die App und erfährst, wie
          du sie dir herunterladen kannst.
        </p>
      </section>
    </div>
  );
}
