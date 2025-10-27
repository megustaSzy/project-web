"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        {/* <img src="/images/logo.png" alt="LamiGo" className="w-10" /> */}
        <span className="font-bold text-xl text-blue-700">LamiGo</span>
      </div>

      {/* Menu */}
      <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
        <li><Link href="#">Beranda</Link></li>
        <li><Link href="#">Jadwal</Link></li>
        <li><Link href="#">Wisata</Link></li>
        <li><Link href="#">Testimoni</Link></li>
        <li><Link href="#">Tiket</Link></li>
        <li><Link href="#">Kontak</Link></li>
      </ul>

      {/* Tombol Ayo Liburan */}
      <button className="bg-blue-800 text-white px-5 py-2 rounded-md hover:bg-blue-900 transition">
        Ayo Liburan
      </button>
    </nav>
  );
}
