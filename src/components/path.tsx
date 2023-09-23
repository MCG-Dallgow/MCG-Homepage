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
  return <Link href={path == "" ? "/" : path}>{name}</Link>;
}

export default function Path() {
  const pathname = usePathname().replace(/\/$/, "");

  let pathLinks = [];
  if (pathname == "/") {
    pathLinks.push(PathLink(pathname));
  } else {
    for (let i = 0; i < pathname.split("/").length; i++) {
      pathLinks.push(<span className="text-link"> &rarr; </span>);
      pathLinks.push(PathLink(pathname.split("/").slice(0, i + 1).join("/")));
    }
  }

  return <p>{pathLinks}</p>;
}