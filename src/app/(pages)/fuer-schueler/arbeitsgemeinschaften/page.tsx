export default function Page() {
  return (
    <div>
      <h1>AGs</h1>
      <p>
        Unsere Schule steht nicht nur als Ort des Lernens zur Verfügung, sondern
        möchte dir zusätzlich mit unserem Angebot an Arbeitsgemeinschaften (AGs)
        die Gelegenheit bieten, mit Gleichgesinnten personlichen Interessen
        nachzugeben, deine Talente zu fördern und einfach Spaß zu haben.
        <br />
        <i>(In der Regel finden AGs nach dem 4. Block statt.)</i>
      </p>
      <p>
        Folgende Arbeitsgemeinschaften stehen im 1. Halbjahr 2023/24 zur
        Auswahl:
      </p>
      <AgSection
        name="Schulklima"
        person="Frau Gutschmidt"
        title="Lehrerin"
        time="Montag 5. Block (15:15 - 16:30 Uhr)"
        place="1.02"
      />
      <AgSection
        name="Informatik"
        person="Herr Sydow"
        title="Lehrer"
        time="Dienstag 4. Block (13:40 - 15:10 Uhr)"
        place=""
      />
      <AgSection
        name="Breakdance"
        person="Herr Krispin"
        title="Lehrer"
        time=""
        place=""
      />
      <AgSection
        name="Tanzen"
        person="Leoni Dokic"
        title="Verantwortliche"
        time="Mittwock 5. Block (15:15 - 17:00 Uhr)"
        place="Aula"
      />
      <AgSection
        name="Schülerzeitung"
        person="Herr Urschel-Sochaczewski"
        title="Lehrer"
        time="Dienstag 5. Block (15:15 - 17:00 Uhr)"
        place="Mediathek (Raum 0.26)"
      />
      <AgSection
        name="Science Club"
        person="Herr Haberjoh"
        title="Lehrer"
        time="Dienstag 5. Block (15:15 - 16:30 Uhr)"
        place=""
      />
      <AgSection
        name="Volleyball"
        person="Herr Möbius"
        title="Lehrer"
        time="Mittwoch 5. Block (15:15 - 16:45 Uhr)"
        place="Sporthalle"
      />
      <AgSection
        name="Basketball"
        person="Herr Heinzel"
        title="Lehrer"
        time=""
        place=""
      />
      <AgSection
        name="Bogensport"
        person="Herr Sydow"
        title="Lehrer"
        time="Freitag 5. Block (15:30 - 17:00 Uhr)"
        place="Markomannenstr. 20, 14624 Dallgow-Döberitz"
      />
    </div>
  );
}

function AgSection({
  name,
  person,
  title,
  time,
  place,
}: {
  name: string;
  person: string;
  title: string;
  time: string;
  place: string;
}) {
  return (
    <section>
      <h2>{name}</h2>
      <table className="text-left">
        <tbody>
          <tr>
            <th className="min-w-[4rem]">{title}</th>
            <td className="pl-4">{person}</td>
          </tr>
          <tr>
            <th className="min-w-[4rem]">Wann?</th>
            <td className="pl-4">{time}</td>
          </tr>
          <tr>
            <th className="min-w-[4rem]">Wo?</th>
            <td className="pl-4">{place}</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
