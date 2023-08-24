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
        Folgende Arbeitsgemeinschaften stehen im 2. Halbjahr 2022/23 zur
        Auswahl:
      </p>
      <AgSection
        name="Schulklima"
        person="Frau Gutschmidt"
        title="Lehrerin"
        time="Dienstag 5. Block (15:15 - 16:30 Uhr)"
        place=""
      />
      <AgSection
        name="Informatik"
        person="Herr Plaumann"
        title="Lehrer"
        time="Donnerstag 5. Block (15:15 - 17:00 Uhr)"
        place="Raum 0.62"
      />
      <AgSection
        name="IT Support & Fun"
        person="Herr Sydow"
        title="Lehrer"
        time="Dienstag 4. Block (13:40 - 15:10 Uhr)"
        place=""
      />
      <AgSection
        name="Schulband"
        person="Frau Roska"
        title="Lehrerin"
        time="Mittwoch 5. Block (15:15 - 16:30 Uhr)"
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
        name="Töpfern"
        person="Frau Tumbrägel"
        title="Lehrerin"
        time="Dienstag 5. Block (15:15 - 17:00 Uhr)"
        place=""
      />
      <AgSection
        name="Schülerzeitung"
        person="Herr Urschel-Sochaczewski"
        title="Lehrer"
        time="Donnerstag 5. Block (15:15 - 17:00 Uhr)"
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
        name="Jugend forscht"
        person="Frau Schaulies"
        title="Lehrerin"
        time=""
        place=""
      />
      <AgSection
        name="Fitness"
        person="Herr Heinzel"
        title="Lehrer"
        time=""
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
        name="Psychologie"
        person="Herr Dötter"
        title="Lehrer"
        time="Montag 5. Block (15:30 - 17:00 Uhr)"
        place=""
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
      <table className="text-left [&>*>td]:pl-4">
        <tr>
          <th>{title}</th>
          <td>{person}</td>
        </tr>
        <tr>
          <th>Wann?</th>
          <td>{time}</td>
        </tr>
        <tr>
          <th>Wo?</th>
          <td>{place}</td>
        </tr>
      </table>
    </section>
  );
}
