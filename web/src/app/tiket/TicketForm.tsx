"use client";

import { useState } from "react";
import TicketCounter from "./TicketCounter";

export default function TicketForm() {
  const [jumlah, setJumlah] = useState(1);
  const [nama, setNama] = useState("");
  const [telepon, setTelepon] = useState("");
  const [penjemputan, setPenjemputan] = useState("");
  const [jadwal, setJadwal] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    alert(
      `Pesanan dikirim!
Nama: ${nama}
Telepon: ${telepon}
Penjemputan: ${penjemputan}
Jadwal: ${jadwal}
Jumlah Tiket: ${jumlah}`
    );
  };

  return (
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
        <option value="Stasiun Tanjung Karang">Stasiun Tanjung Karang</option>
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
        {["A1", "B1", "C1", "D1", "E1"].map((item) => (
          <option key={item} value={item}>{item}</option>
        ))}
      </select>

      <TicketCounter jumlah={jumlah} setJumlah={setJumlah} />

      <button
        type="submit"
        className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-3 rounded-md transition"
      >
        Kirim Pesanan
      </button>
    </form>
  );
}
