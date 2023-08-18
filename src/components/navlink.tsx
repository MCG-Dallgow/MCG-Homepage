import Link from "next/link";

interface NavLinkProps {
  href: string;
  title: string;
  children?: JSX.Element[];
}

export default function NavLink({ href, title, children }: NavLinkProps) {
  return (
    <div>
      <Link href={href}>{title}</Link>
      <div>{children}</div>
    </div>
  );
}
