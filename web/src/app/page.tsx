import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Jadwal from "./components/Jadwal/Jadwal";
import Wisata from "./components/Wisata/Wisata";

export default function Home() {
  return (
   <main>
        
        <Navbar />
        <Hero />
        <Jadwal/>
        <Wisata/>
      </main>

  );
}
