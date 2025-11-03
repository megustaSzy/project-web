"use client";

import Link from "next/link";
import Image from "next/image";
import NavItem from "./NavItem";
import NavButton from "./NavButton";

interface NavItemType {
  label: string;
  href: string;
}

export default function Navbar() {
  const navItems: NavItemType[] = [
    { label: "Beranda", href: "#Hero" },
    { label: "Wisata", href: "#Wisata" },
    { label: "Jadwal", href: "#Jadwal" },
    { label: "Testimoni", href: "#Testimoni" },
    { label: "Tiket", href: "#Tiket" },
    { label: "Kontak", href: "#Kontak" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.png"
            alt="LamiGo Logo"
            width={150}
            height={150}
            priority
            className="rounded-md"
          />
        </Link>

        {/* Menu Navigasi */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <NavItem key={item.label} {...item} />
          ))}
        </ul>

        {/* Tombol CTA */}
        <NavButton />
      </div>
    </nav>
  );
}
