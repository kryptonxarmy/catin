
import React from "react";
import "../App.css";

const konselors = [
  {
    name: "Noviana Putri Anggraeni",
    expertise: "Konselor Pernikahan",
    whatsapp: "6285785018268?text=Permisi%2C%20saya%20hendak%20melaksanakan%20bimbingan%20pranikah%2C%20mohon%20bantuannya.",
    avatar: "/photo/novi.jpeg",
  },
  {
    name: "Yanuari Srianturi, M. Pd., Kons.",
    expertise: "Konselor Pernikahan",
    whatsapp: "6289633156656?text=Permisi%2C%20saya%20hendak%20melaksanakan%20bimbingan%20pranikah%2C%20mohon%20bantuannya.",
    avatar: "/photo/yanu.jpeg",
  },
  {
    name: "Ah. Fahri Munir, M. Pd.",
    expertise: "Konselor Pernikahan",
    whatsapp: "62895331112309?text=Permisi%2C%20saya%20hendak%20melaksanakan%20bimbingan%20pranikah%2C%20mohon%20bantuannya.",
    avatar: "/photo/fahri.jpeg",
  },
];

const Konsultasi = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Konsultasi</h1>
        <p className="text-center text-lg text-gray-700 mb-10">Silakan pilih konselor di bawah ini untuk konsultasi langsung melalui WhatsApp sesuai kebutuhan Anda.</p>
        <div className="flex flex-row flex-wrap gap-8 justify-center items-stretch">
          {konselors.map((k, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center w-80 transition-transform hover:scale-105 border border-gray-100"
            >
              <img
                src={k.avatar}
                alt={k.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-blue-200 mb-6 shadow"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-1 text-center">{k.name}</h2>
              <p className="text-green-600 font-medium mb-4 text-center">{k.expertise}</p>
              <a
                href={`https://wa.me/${k.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-block bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg shadow transition-colors duration-200"
              >
                Konsultasi via WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Konsultasi;
