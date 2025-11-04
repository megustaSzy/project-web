"use client";

import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function TiketPage() {
  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [penjemputan, setPenjemputan] = useState("");
  const [jadwal, setJadwal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Pesanan dikirim!\nNama: ${nama}\nTelepon: ${telepon}\nPenjemputan: ${penjemputan}\nJadwal: ${jadwal}\nJumlah Tiket: ${jumlah}`
    );
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Konten form */}
      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Tiket</h1>
          <p className="text-gray-800 mb-2">
            Isi data diri anda untuk order tiket{" "}
            <span className="font-semibold text-blue-800">LamiGo</span>
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 text-gray-900">
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            className="w-full border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />

          <input
            type="tel"
            placeholder="Nomor Telepon"
            value={telepon}
            onChange={(e) => setTelepon(e.target.value)}
            className="w-full border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800"
            required
          />

          <select
            value={penjemputan}
            onChange={(e) => setPenjemputan(e.target.value)}
            className="w-full border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white"
            required
          >
            <option value="">Pilih Lokasi Penjemputan</option>
            <option value="Terminal Rajabasa">Terminal Rajabasa</option>
            <option value="Stasiun Tanjung Karang">
              Stasiun Tanjung Karang
            </option>
          </select>

          <p className="text-sm text-gray-700 italic -mb-0">
            *Lihat daftar jadwal di menu{" "}
            <span className="font-semibold text-blue-800">Jadwal</span>.
          </p>

          <select
            value={jadwal}
            onChange={(e) => setJadwal(e.target.value)}
            className="w-full border border-gray-600 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-800 bg-white"
            required
          >
            <option value="">Pilih Jadwal Anda</option>
            <option value="A1">A1</option>
            <option value="B1">B1</option>
            <option value="C1">C1</option>
            <option value="D1">D1</option>
            <option value="E1">E1</option>
          </select>

          <div>
            <label className="block mb-2 font-medium text-gray-900">
              Jumlah Tiket
            </label>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setJumlah((prev) => Math.max(1, prev - 1))}
                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
              >
                <FaMinus />
              </button>

              <span className="text-lg font-semibold">{jumlah}</span>

              <button
                type="button"
                onClick={() => setJumlah((prev) => prev + 1)}
                className="p-2 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition"
              >
                <FaPlus />
              </button>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-md transition"
          >
            Kirim Pesanan
          </button>
        </form>
      </div>
    </section>
  );
}
