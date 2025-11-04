import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Jadwal from "./components/Jadwal/Jadwal";
import Testimoni from "./components/Testimoni";
import Wisata from "./components/Wisata/Wisata";
import Kontak from "./components/Kontak/Kontak";

import tabeljadwal from "./tabeljadwal/page";export default function Home() {
import tabeljadwal from "./tabeljadwal/page";
export default function Home() {
  return (
   <main>
        
        {/* <Navbar /> */}
        <Hero />
        <section id="wisata">
          
  <Wisata />
</section>
        <Jadwal/>
        <Testimoni/>
        <section id="kontak">
  <Kontak />
</section>
      
      </main>

  );
}
