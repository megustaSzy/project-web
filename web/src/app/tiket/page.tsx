"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function TiketPage() {
  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [jadwal, setJadwal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Pesanan dikirim!\nNama: ${nama}\nTelepon: ${telepon}\nJadwal: ${jadwal}\nJumlah: ${jumlah}`);
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-white">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Tiket</h1>
        <p className="text-gray-600 mb-6">
          Isi data diri anda untuk order tiket <span className="font-semibold">LamiGo</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input Nama */}
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />

          {/* Input Nomor Telepon */}
          <input
            type="tel"
            placeholder="Nomor Telepon"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />

{/* Pilih Penjemputan */}
          <select
            value={jadwal}
            onChange={(e) => setJadwal(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          >
            <option value="">Pilih Jadwal Anda</option>
            <option value="Pagi">Terminal Rajabasa</option>
            <option value="Siang">Stasiun Tanjung Karang</option>
          </select>

          {/* Pilih Jadwal */}
          <select
            value={jadwal}
            onChange={(e) => setJadwal(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          >
            <option value="">Pilih Jadwal Anda</option>
            <option value="Pagi"> A1</option>
            <option value="Siang">B1</option>
            <option value="Malam">C1</option>
             <option value="Siang">D1</option>
            <option value="Malam">E1</option>
          </select>

          {/* Jumlah Tiket */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">Jumlah Tiket</label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setJumlah((prev) => Math.max(1, prev - 1))}
                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800"
              >
                <FaMinus />
              </button>
              <span className="text-lg font-semibold">{jumlah}</span>
              <button
                type="button"
                onClick={() => setJumlah((prev) => prev + 1)}
                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-md transition"
          >
            Sent Massage
          </button>
        </form>
      </div>
    </section>
  );
}
