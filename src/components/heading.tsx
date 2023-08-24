import Link from "next/link";

export default function Heading({
  children,
  href,
}: {
  children: string;
  href?: string;
}) {
  return (
    <div>
      <h2 className="pb-0">{children}</h2>
      {href != undefined && (
        <p>
          <Link href={href}>&rarr; zur Seite</Link>
        </p>
      )}
    </div>
  );
}
