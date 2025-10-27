"use client";

import Link from "next/link";

export default function Navbar() {
  const navItems = [
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
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold text-blue-700 tracking-wide"
        >
          LamiGo
        </Link>

        {/* Menu Navigasi */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="hover:text-blue-700 transition-colors duration-200"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Tombol CTA */}
        <button
          type="button"
          className="bg-blue-800 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-900 transition-colors duration-200"
        >
          Ayo Liburan
        </button>
      </div>
    </nav>
  );
}
