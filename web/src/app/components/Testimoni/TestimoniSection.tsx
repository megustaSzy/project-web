import { ArrowRight } from "lucide-react";

export default function TestimoniSection() {
  const data = [
    {
      name: "Amel",
      text: "LamiGo sangat membantu karena tidak perlu lagi membawa kendaraan pribadi dan khawatir terhadap kendaraan.",
    },
    {
      name: "Arga",
      text: "LamiGo memberikan pengalaman liburan yang menyenangkan dan mudah. Pelayanan sangat memuaskan!",
    },
    {
      name: "Citra",
      text: "Pelayanan cepat dan nyaman! Sangat direkomendasikan untuk liburan keluarga.",
    },
    
  ];

  return (
    <section id = "Testimoni"   
      className="w-full py-24 px-6 md:px-12 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/bgts.jpg')" }}
    >
      <div className="bg-white/80 backdrop-blur-sm w-full py-16 rounded-3xl shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-black/80">
            Testimoni Wisatawan
          </h2>

          {/* Grid Responsif */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8">
            {data.map((item) => (
              <div
                key={item.name}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              >
                <p className="text-gray-700 text-lg italic mb-4 leading-relaxed">
                  “{item.text}”
                </p>
                <p className="text-blue-800 font-semibold text-lg">— {item.name}</p>
              </div>
            ))}
          </div>

          {/* Tombol "Lainnya" */}
          <div className="mt-12">
            <button className="flex items-center gap-2 mx-auto bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-3 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 font-semibold">
              Lainnya
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
