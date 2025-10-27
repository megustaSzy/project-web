"use client";

import Link from "next/link";
import NavItem from "./NavItem";
import NavButton from "./NavButton";

interface NavItemType {
  label: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItemType[] = [
    { label: "Beranda", href: "#" },
    { label: "Jadwal", href: "#" },
    { label: "Wisata", href: "#" },
    { label: "Testimoni", href: "#" },
    { label: "Tiket", href: "#" },
    { label: "Kontak", href: "#" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700 tracking-wide">
          LamiGo
        </Link>

        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>

        <NavButton />
      </div>
    </nav>
  );
}
