"use client";

import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  // ✅ Fungsi scroll ke section
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Hero"
      className="relative h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten */}
      <div className="relative z-10 max-w-2xl text-left ml-[-90px] font-bold">
        <HeroSubtitle text="Pelayanan Transportasi Integrasi Wisata." />
        <HeroTitle title="Pilih Destinasi Wisatamu" />
        <HeroDescription text="Gunakan Layanan Kami Untuk Pengalaman Wisatamu Yang Lebih Baik." />

        <HeroButtons
          primaryText="Ayo Liburan"
          secondaryText="View all Services"
          onPrimaryClick={() => scrollToSection("wisata")}  // ✅ scroll ke Wisata
          onSecondaryClick={() => scrollToSection("kontak")} // ✅ scroll ke Kontak
        />
      </div>
    </section>
  );
}
