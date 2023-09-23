import Link from "next/link";
import { env } from "~/env.mjs";

interface Staff {
  id: string,
  firstname: string,
  lastname: string,
  email: string,
  gender: string,
  subjects: {
    id: string,
    name: string,
  }[],
}

async function getStaff(): Promise<Staff[]> {
  const response = await fetch(env.API_BASE_URL + "/staff");

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = (await response.json()).data;
  return data;
}

function StaffItem({ staff }: { staff: Staff }) {
  let title = staff.firstname;
  if (staff.gender == "M") title = "Herr";
  if (staff.gender == "F") title = "Frau";

  let subjects = "";
  if (staff.subjects) {
    subjects = staff.subjects.map((subject) => subject.name).join(", ");
  }

  return (
    <div className="py-4">
      <div className="rounded-3xl bg-white px-10 py-4 shadow-xl">
        <h2 className="pt-0 pb-2">{title} {staff.lastname}</h2>
        <Link href={"mailto:" + staff.email}>{staff.email}</Link>
        {
          subjects != ""
            ? (<p className="pt-2 pb-0 text-gray-600">{subjects}</p>)
            : null
        }
      </div>
    </div>
  );
}

export default async function Page() {
  const data = await getStaff();

  return (
    <div>
      {data.map((person) => <StaffItem staff={person} />)}
    </div>
  );
}
