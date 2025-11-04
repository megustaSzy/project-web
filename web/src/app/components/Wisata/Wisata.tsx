"use client";

import { useRouter } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Wisata() {
  const router = useRouter(); // ✅ Hook untuk navigasi antar halaman

  const handlePesan = () => {
    router.push("/tiket"); // arahkan ke halaman /tiket
  };

  return (
    <section
      id="Wisata"
      className="h-screen flex flex-col justify-center px-8 md:px-24 bg-white"
    >
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-10 text-center">
        <h2 className="text-5xl font-bold text-gray-900 leading-tight">
          Pilih Tujuan Wisatamu Sekarang
        </h2>
      </div>

      {/* Konten Wisata */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-8">
        {/* Kartu 1 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/3">
          <img
            src="/images/mutun.jpg"
            alt="Pantai Mutun"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Pantai Mutun
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Pantai Mutun terletak di Kabupaten Pesawaran, Lampung, dan dikenal
              sebagai destinasi favorit wisata keluarga.
            </p>
            <button
              onClick={handlePesan}
              className="flex items-center gap-2 text-blue-700 font-medium border border-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              Pesan Sekarang <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Kartu 2 */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-full md:w-1/3">
          <img
            src="/images/clara.jpg"
            alt="Pantai Clara"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h4 className="text-xl font-semibold text-gray-900 mb-2">
              Pantai Clara 2
            </h4>
            <p className="text-gray-600 mb-4 text-sm">
              Pantai Clara berada tidak jauh dari Pantai Mutun dan menawarkan
              suasana yang lebih tenang dengan keindahan pasir putih serta
              panorama laut biru.
            </p>
            <button
              onClick={handlePesan}
              className="flex items-center gap-2 text-blue-700 font-medium border border-blue-700 px-4 py-2 rounded-lg hover:bg-blue-700 hover:text-white transition"
            >
              Pesan Sekarang <ArrowUpRight size={16} />
            </button>
          </div>
        </div>

        {/* Kartu Coming Soon */}
        <div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl w-full md:w-1/3 flex flex-col items-center justify-center p-10 transition-all duration-300 hover:shadow-blue-200 hover:-translate-y-1">
  <p className="text-2xl font-bold text-gray-800 mb-5 tracking-wide">
    Coming Soon
  </p>

  <div className="bg-gradient-to-r from-blue-700 to-blue-900 rounded-full p-4 shadow-lg hover:scale-105 transition-transform duration-300">
    <ArrowUpRight size={28} className="text-white" />
  </div>

  <p className="text-sm text-gray-600 mt-4 text-center">
    Fitur ini sedang dalam tahap pengembangan.  
    <br /> Nantikan segera!
  </p>
</div>

      </div>
    </section>
  );
}
