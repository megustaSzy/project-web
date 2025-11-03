import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Jadwal from "./components/Jadwal/Jadwal";
import Testimoni from "./components/Testimoni";
export default function Home() {
  return (
   <main>
        
        <Navbar />
        <Hero />
        <Jadwal/>
        <Testimoni/>
      </main>

  );
}
