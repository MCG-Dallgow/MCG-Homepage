import Heading from "~/components/heading";

export default function Page() {
  return (
    <div>
      <h1>Für Eltern</h1>
      <p>
        Hier sind Angebote aufgelistet, die relevant für Eltern von MCG-Schülern
        sind.
      </p>
      <section>
        <Heading href="/fuer-eltern/schliessfaecher">
          Schließfächer
        </Heading>
        <p>
          Am MCG können Schließfächer für Schüler gemietet werden, in denen sie
          ihre Unterrichtsmaterialien und persönlichen Gegenstände verstauen
          können. Auf dieser Seite finden Sie alle notwendigen Informationen
          darüber.
        </p>
      </section>
    </div>
  );
}
