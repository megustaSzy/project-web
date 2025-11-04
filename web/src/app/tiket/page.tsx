"use client";

import TicketForm from "./TicketForm";

export default function TiketPage() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/bg.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative w-full max-w-md bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-gray-900 mb-2">Tiket</h1>
          <p className="text-gray-800 mb-2">
            Isi data diri anda untuk order tiket{" "}
            <span className="font-semibold text-blue-800">LamiGo</span>
          </p>
        </div>

        <TicketForm />
      </div>
    </section>
  );
}
