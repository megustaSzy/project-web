import Image from "next/image";
import { Facebook, Instagram, Linkedin, Section } from "lucide-react";

interface TestimoniCardProps {
  name: string;
  image: string;
  text: string;
}

export default function TestimoniCard({ name, image, text }: TestimoniCardProps) {
  return (
    <Section> id = "Testimoni"
    <div id = "Testimoni" className="bg-white rounded-xl shadow-md overflow-hidden w-full md:w-[300px] border border-gray-200">
      <div className="w-full h-64 relative">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
          sizes="300px"
        />
      </div>

      <div className="p-4 text-gray-800">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div className="flex items-center gap-1 text-yellow-500 text-sm mb-2">
          {"★".repeat(5)}
        </div>
        <p className="text-sm mb-3">{text}</p>

        <div className="flex items-center gap-4 text-gray-500 text-sm">
          <Facebook className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
          <Instagram className="w-4 h-4 hover:text-pink-600 cursor-pointer" />
          <Linkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </div>
    </Section>  
  );
}
