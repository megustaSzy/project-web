import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Jadwal from "./components/Jadwal/Jadwal";
import Testimoni from "./components/Testimoni";
import Wisata from "./components/Wisata/Wisata";
import Kontak from "./components/Kontak/Kontak";
export default function Home() {
  return (
   <main>
        
        <Navbar />
        <Hero />
        <Wisata/>
        <Jadwal/>
        <Testimoni/>
        <Kontak/>
      </main>

  );
}
