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
    <div className="group">
      <Link
        href={href}
        className={
          "flex px-2 py-2 text-center text-xl font-semibold transition-all hover:text-active " +
          (currentRoute === href ? "text-active" : "text-white")
        }
      >
        {title}
      </Link>
      <div className="invisible absolute z-10 opacity-0 shadow-md transition-opacity group-hover:visible group-hover:opacity-100">
        <div className="bg-dropdown transition-all hover:[&>*]:bg-dropdownhover">
          {children}
        </div>
      </div>
    </div>
  );
}
