"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Jadwal() {
  const router = useRouter(); // ✅ tambahkan ini biar router.push bisa digunakan

  return (
    <section
      id="Jadwal"
      className="h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-24 bg-white"
    >
      {/* Kiri - Teks */}
      <div className="max-w-lg text-left md:w-1/2">
        <h2 className="text-5xl font-bold text-gray-900 mb-4 leading-tight">
          Lokasi Penjemputan <span className="text-blue-700">LamiGo</span>
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Ayo berwisata lebih efisien menggunakan LamiGo
        </p>

        {/* 🔗 Tombol ke halaman tabel jadwal */}
        <div>
          <button
            onClick={() => router.push("/tabeljadwal")} // ✅ arahkan ke /tabeljadwal (huruf kecil)
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all duration-300"
          >
            Lihat Jadwal
          </button>
        </div>
      </div>

      {/* Kanan - Gambar */}
      <div className="relative mt-12 md:mt-0 flex justify-center items-center md:w-1/2">
        <img
          src="/images/terminal.jpg"
          alt="Lokasi Penjemputan"
          className="w-60 h-60 md:w-72 md:h-72 rounded-2xl shadow-xl object-cover transform translate-x-[-5px] translate-y-[40px] z-10"
        />
        <img
          src="/images/stasiun.jpg"
          alt="Lokasi Tambahan"
          className="w-60 h-60 md:w-72 md:h-72 rounded-2xl shadow-xl object-cover transform translate-x-[5px] translate-y-[-40px] z-20"
        />
      </div>
    </section>
  );
}
