"use client";

import HeroSubtitle from "./HeroSubtitle";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtons from "./HeroButtons";

export default function Hero() {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('/images/pantai.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Konten */}
      <div className="relative z-10 max-w-2xl text-left ml-[-90]">
        <HeroSubtitle text="Quality cleaning at a fair price." />
        <HeroTitle title="Specialized, efficient, and thorough cleaning services" />
        <HeroDescription text="We provide performing cleaning tasks using the least amount of time, energy, and money." />
        <HeroButtons
          primaryText="Ayo Liburan"
          secondaryText="View all Services"
        />
      </div>
    </section>
  );
}
