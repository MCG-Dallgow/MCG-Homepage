"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({
  href,
  title,
  children,
}: {
  href: string;
  title: string;
  children?: React.ReactNode;
}) {
  const currentRoute = usePathname();

  return (
    <div className="group py-2">
      <Link
        href={href}
        className={
          "mx-3 px-3 py-4 text-center text-xl font-semibold transition-all hover:text-active " +
          (currentRoute === href ? "text-active" : "text-white")
        }
      >
        {title}
      </Link>
      <div className="invisible absolute z-10 mt-3 bg-dropdown opacity-0 shadow-md transition-opacity hover:bg-dropdownhover group-hover:visible group-hover:opacity-100">
        {children}
      </div>
    </div>
  );
}
