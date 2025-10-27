import Link from "next/link";

interface NavItemProps {
  label: string;
  href: string;
}

export default function NavItem({ label, href }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className="hover:text-blue-700 transition-colors duration-200"
      >
        {label}
      </Link>
    </li>
  );
}
