"use client";

import JadwalSubtitle from "./JadwalSubtitle";
import JadwalTitle from "./JadwalTitle";
import JadwalDescription from "./JadwalDescription";
import JadwalButtons from "./JadwalButtons";

export default function Jadwal() {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten */}
      <div className="relative z-10 max-w-2xl text-left ml-[-90]">
        <JadwalSubtitle text="Pelayanan Transportasi Integrasi Wisata." />
        <JadwalTitle title="Pilih Destinasi Wisatamu" />
        <JadwalDescription text="Gunakan Layanan Kami Untuk Pengalaman Wisatamu Yang Lebih Baik." />
        <JadwalButtons
          primaryText="Ayo Liburan"
          secondaryText="View all Services"
        />
      </div>
    </section>
  );
}
