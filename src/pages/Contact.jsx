import React from "react";

const Contact = () => {
  const contactInfo = [
    {
      title: "Email",
      value: "hello@temancatin.com",
      icon: "📧",
      bgColor: "bg-pink-100",
    },
    {
      title: "Telepon",
      value: "+62 812-3456-7890",
      icon: "📞",
      bgColor: "bg-blue-100",
    },
    {
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      icon: "💬",
      bgColor: "bg-green-100",
    },
    {
      title: "Alamat",
      value: "Jakarta, Indonesia",
      icon: "📍",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">Hubungi Kami</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">Ada pertanyaan atau ingin berkonsultasi? Tim kami siap membantu Anda</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Kirim Pesan</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Nama Lengkap</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all" placeholder="Masukkan nama lengkap" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all" placeholder="Masukkan email" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">No. Telepon</label>
                <input type="tel" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all" placeholder="Masukkan nomor telepon" />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Subjek</label>
                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all">
                  <option>Pilih layanan</option>
                  <option>Teman Finansial</option>
                  <option>Teman Nikah</option>
                  <option>Teman Belajar</option>
                  <option>Teman Parenting</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Pesan</label>
                <textarea
                  rows="4"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-pink-200 focus:border-pink-400 transition-all resize-none"
                  placeholder="Tulis pesan Anda..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white py-4 rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                Kirim Pesan 💌
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Informasi Kontak</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className={`${info.bgColor} rounded-2xl p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    <div className="text-3xl mb-3">{info.icon}</div>
                    <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
                    <p className="text-gray-600 text-sm">{info.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Jam Operasional</h3>
              <div className="space-y-2 text-lg">
                <p>
                  <span className="font-semibold">Senin - Jumat:</span> 09:00 - 18:00
                </p>
                <p>
                  <span className="font-semibold">Sabtu:</span> 09:00 - 15:00
                </p>
                <p>
                  <span className="font-semibold">Minggu:</span> Tutup
                </p>
              </div>
              <div className="mt-6">
                <p className="text-lg opacity-90">Konsultasi darurat 24/7 via WhatsApp</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-8">Pertanyaan Umum</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-pink-50 rounded-2xl p-6 border border-pink-200">
              <h4 className="font-bold text-gray-800 mb-3">Berapa biaya konsultasi?</h4>
              <p className="text-gray-600 text-sm">Konsultasi pertama gratis! Untuk sesi selanjutnya mulai dari 150rb per sesi.</p>
            </div>
            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-200">
              <h4 className="font-bold text-gray-800 mb-3">Apakah bisa konsultasi online?</h4>
              <p className="text-gray-600 text-sm">Ya, kami menyediakan konsultasi online via video call atau telepon.</p>
            </div>
            <div className="bg-purple-50 rounded-2xl p-6 border border-purple-200">
              <h4 className="font-bold text-gray-800 mb-3">Berapa lama durasi konsultasi?</h4>
              <p className="text-gray-600 text-sm">Setiap sesi konsultasi berlangsung 60-90 menit tergantung kebutuhan.</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 border border-rose-200">
              <h4 className="font-bold text-gray-800 mb-3">Apakah data pribadi aman?</h4>
              <p className="text-gray-600 text-sm">Kerahasiaan data klien adalah prioritas utama kami. Semua informasi dijamin aman.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact
