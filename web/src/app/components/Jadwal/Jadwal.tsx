"use client";

export default function Jadwal() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 bg-white">
      {/* Kiri - Teks */}
      <div className="max-w-lg text-left">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Lokasi Penjemputan <span className="text-blue-700">LamiGo</span>
        </h2>
        <p className="text-gray-600 mb-6">
          Ayo berwisata lebih efisien menggunakan LamiGo
        </p>
        <button className="bg-blue-700 hover:bg-blue-800 text-white font-medium px-6 py-3 rounded-md shadow-md transition">
          Lihat Jadwal
        </button>
      </div>

      {/* Kanan - Gambar */}
      <div className="relative mt-10 md:mt-0 flex gap-6">
        {/* Gambar depan */}
        <img
          src="/images/terminal.jpg"
          alt="Lokasi Penjemputan"
          className="w-52 h-52 rounded-xl shadow-lg object-cover z-20"
        />
        {/* Gambar belakang */}
        <img
          src="/images/stasiun.jpg"
          alt="Lokasi Tambahan"
          className="w-52 h-52 rounded-xl shadow-lg object-cover translate-x-[-30%] translate-y-[30%] z-10"
        />
      </div>
    </section>
  );
}
