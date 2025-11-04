"use client";

import { FaMinus, FaPlus } from "react-icons/fa";

interface Props {
  jumlah: number;
  setJumlah: (value: number | ((prev: number) => number)) => void;
}

export default function TicketCounter({ jumlah, setJumlah }: Props) {
  return (
    <div>
      <label className="block mb-2 font-medium text-gray-900">Jumlah Tiket</label>

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
  );
}
