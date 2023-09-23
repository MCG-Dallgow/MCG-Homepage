import Link from 'next/link';

export default function Page({ params }: { params: { id: number } }) {
  const { id } = params
  return (
    <div>
      <h1>Ausgabe {id}</h1>
      <p>
        <Link
          href={"/documents/schuelerzeitung/ausgabe-" + id + ".pdf"}
          target="_blank"
          rel="noopener noreferrer"
        >
          PDF herunterladen
        </Link>
      </p>
      <embed
        type='application/pdf'
        src={"/documents/schuelerzeitung/ausgabe-" + id + ".pdf"}
        width='100%'
        height='800rem'
      />
    </div>
  );
}