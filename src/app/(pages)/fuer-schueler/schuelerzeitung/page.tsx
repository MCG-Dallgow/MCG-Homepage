import Image from "next/image";
import Link from "next/link";

import redaktionImage from "/public/images/schuelerzeitung/schuelerzeitung-redaktion.webp";

export default function Page() {
  return (
    <div>
      <h1>Schülerzeitung</h1>
      <section>
        <Image
          src={redaktionImage}
          alt="Die Redaktion"
          height="300"
          className="float-right pl-6 pt-8"
        />
        <div>
          <h2>Die Redaktion</h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
            omnis, veritatis ad impedit obcaecati repudiandae aliquam nulla hic
            aliquid laborum eos odit quibusdam facilis quam temporibus ipsam
            numquam optio incidunt? Dolor et architecto ab laborum nesciunt? A
            quisquam maiores voluptatem consectetur accusantium sit quo magnam
            dignissimos cumque ducimus nam non aliquam culpa pariatur nobis,
            perferendis modi nostrum molestias esse unde optio quas inventore.
            Accusantium ducimus explicabo quidem totam saepe eius in quas, fuga
            odit corporis corrupti quos animi debitis aut odio ut omnis aliquid
            labore distinctio perspiciatis eaque cumque adipisci.
          </p>
        </div>
      </section>
      <section>
        <h2>Ausgaben</h2>
        <div className="flex gap-8">
          <IssueCard issue={2} />
          <IssueCard issue={1} />
        </div>
      </section>
    </div>
  );
}

function IssueCard({ issue }: { issue: number }) {
  return (
    <Link href={"/fuer-schueler/schuelerzeitung/" + issue}>
      <div className="max-w-sm rounded-2xl bg-gray-200">
        <Image
          className="rounded-t-2xl"
          src={"/images/schuelerzeitung/ausgabe-" + issue + "-thumb.webp"}
          alt={"Ausgabe" + issue}
          width="1000"
          height="1000"
        />
        <div className="p-5">
          <h5 className="text-2xl font-bold tracking-tight text-gray-900">
            Ausgabe {issue}
          </h5>
        </div>
      </div>
    </Link>
  );
}
