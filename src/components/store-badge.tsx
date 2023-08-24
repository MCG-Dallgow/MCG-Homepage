import Image from "next/image";
import type { StaticImageData } from "next/image";
import googlePlayBadge from "/public/images/store-badges/google-play-badge.webp";
import appStoreBadge from "/public/images/store-badges/app-store-badge.webp";
import fdroidBadge from "/public/images/store-badges/fdroid-badge.webp";
import githubBadge from "/public/images/store-badges/github-badge.webp";

export default function StoreBadge({
  store,
  href,
}: {
  store: string;
  href: string;
}) {
  let badge: StaticImageData = googlePlayBadge;
  let alt = "Get it on Google Play";

  switch (store) {
    case "google-play":
      badge = googlePlayBadge;
      alt = "Get it on Google Play";
      break;
    case "app-store":
      badge = appStoreBadge;
      alt = "Download on the App Store";
      break;
    case "fdroid":
      badge = fdroidBadge;
      alt = "Get it on F-Droid";
      break;
    case "github":
      badge = githubBadge;
      alt = "Get it on GitHub";
      break;
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Image src={badge} alt={alt} height={168 / 2}></Image>
    </a>
  );
}
