"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

function PathLink(path: string) {
  let name = path.split("/").at(-1)?.toLowerCase() ?? "";

  switch (name) {
    case "":
      name = "Start";
      break;
    case "mcg-app":
      name = "MCG-App";
      break;
    case "schliessfaecher":
      name = "Schließfächer";
      break;
    default:
      name = name
        .replaceAll("-", " ")
        .replaceAll("ae", "ä")
        .replaceAll("oe", "ö")
        .replaceAll("ue", "ü")

      const words = name.split(" ");
      for (let i = 0; i < words.length; i++) {
        words[i] = words[i]!.charAt(0).toUpperCase() + words[i]!.slice(1);
      }
      name = words.join(" ");
      break;
  }
  return <Link href={path == "" ? "/" : path} key={path}>{name}</Link>;
}

export default function Path() {
  const pathname = usePathname().replace(/\/$/, "");

  let pathLinks = [];
  for (let i = 0; i < pathname.split("/").length; i++) {
    const segment = pathname.split("/").slice(0, i + 1).join("/");
    if (segment != "") {
      pathLinks.push(<span className="text-link" key={"pathArrow" + i}> &rarr; </span>);
    }
    pathLinks.push(PathLink(segment));
  }

  return <p>{pathLinks}</p>;
}