"use client";
import { Phone, Mail, MapPin } from "lucide-react";

export default function KontakPage() {
  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* Bagian Utama */}
      <section id = "Kontak" className="px-8 md:px-20 py-16 flex flex-col md:flex-row justify-between gap-12">
        {/* Kolom Kiri (Kontak) */}
        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Kontak</h2>

          <div className="space-y-6">
            {/* Telpon */}
            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4">
              <div className="bg-blue-700 text-white p-3 rounded-full">
                <Phone size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Telpon</h4>
                <p className="text-gray-600">(+62) 123-456-789</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4">
              <div className="bg-blue-700 text-white p-3 rounded-full">
                <Mail size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Email</h4>
                <p className="text-gray-600">Lamigo@Gmail.ac.id</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 bg-white shadow-md rounded-xl p-4">
              <div className="bg-blue-700 text-white p-3 rounded-full">
                <MapPin size={22} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800">Alamat</h4>
                <p className="text-gray-600">
                  Kota Bandar Lampung , Lampung Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan (Testimoni) */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Testimoni</h2>
          <p className="text-gray-600 mb-6">
            Bagikan komentar anda terhadap layanan kami
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nama"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
            />
            <textarea
              rows="4"
              placeholder="Komentar"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-600"
            ></textarea>

            <button
              type="submit"
              className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Sent Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-8 md:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          {/* Logo dan Deskripsi */}
          <div className="max-w-sm">
            <img src="/images/logo.png" alt="Logo" className="w-32 mb-4" />
            <p className="text-gray-400 text-sm">
              Stay updated with our latest cleaning tips, service updates, and
              helpful articles on maintaining a spotless home.
            </p>
            <p className="text-gray-500 text-xs mt-4">
              Copyright 2025 LamiGo
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>About Us</li>
              <li>Services</li>
              <li>Our Team</li>
            </ul>
          </div>

          {/* Know More */}
          <div>
            <h4 className="font-semibold mb-3">Know More</h4>
            <ul className="space-y-1 text-gray-400 text-sm">
              <li>Support</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
