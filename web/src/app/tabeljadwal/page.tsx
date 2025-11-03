"use client";

import { useState } from "react";

interface Jadwal {
  kode: string;
  keberangkatan: string;
  kepulangan: string;
}

export default function TabelJadwal() {
  const [terminal, setTerminal] = useState<string>("Terminal Rajabasa");

  const jadwalData: Record<string, Jadwal[]> = {
    "Terminal Rajabasa": [
      { kode: "001", keberangkatan: "10.00", kepulangan: "15.00" },
      { kode: "002", keberangkatan: "11.00", kepulangan: "16.00" },
      { kode: "003", keberangkatan: "12.00", kepulangan: "17.00" },
    ],
    "Stasiun Tanjung Karang": [
      { kode: "004", keberangkatan: "09.00", kepulangan: "14.00" },
      { kode: "005", keberangkatan: "10.30", kepulangan: "15.30" },
      { kode: "006", keberangkatan: "12.30", kepulangan: "17.30" },
    ],
  };

  const data: Jadwal[] = jadwalData[terminal];

  return (
    <section className="px-10 py-16 bg-white min-h-screen">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Jadwal {terminal}
        </h1>

        {/* Dropdown */}
        <div className="mb-10 flex justify-left">
          <select
            value={terminal}
            onChange={(e) => setTerminal(e.target.value)}
            className="px-4 py-2 rounded-lg bg-indigo-100 text-gray-800 focus:outline-none"
          >
            <option>Terminal Rajabasa</option>
            <option>Stasiun Tanjung Karang</option>
          </select>
        </div>

        {/* Tabel */}
        <div className="grid grid-cols-3 gap-6 text-center">
          <div className="bg-blue-900 text-white rounded-2xl py-3 font-semibold">
            KODE JADWAL
          </div>
          <div className="bg-blue-900 text-white rounded-2xl py-3 font-semibold">
            KEBERANGKATAN
          </div>
          <div className="bg-blue-900 text-white rounded-2xl py-3 font-semibold">
            KEPULANGAN
          </div>

          {data.map((item, i) => (
            <div key={i} className="contents">
              <div className="bg-blue-100 rounded-xl py-2 font-semibold text-gray-800">
                {item.kode}
              </div>
              <div className="bg-blue-100 rounded-xl py-2 font-semibold text-gray-800">
                {item.keberangkatan}
              </div>
              <div className="bg-blue-100 rounded-xl py-2 font-semibold text-gray-800">
                {item.kepulangan}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
