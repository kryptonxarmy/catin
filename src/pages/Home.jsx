import React, { useState } from "react";
import { Heart, DollarSign, Brain, Baby, MessageCircle, FileText, ArrowRight, Star, Users, CheckCircle, Quote, Sparkles, TrendingUp, Play, Clock, Eye, User } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedVideos, getCategoryColor } from "../data/videoData.js";

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

const Home = () => {
  const [showKonselor, setShowKonselor] = useState(false);

  const testimonials = [
    {
      name: "Sarah & Ahmad",
      text: "TemanCatin membantu kami mempersiapkan pernikahan dengan sangat baik. Tes kesiapan nikahnya sangat membantu!",
      rating: 5,
      location: "Jakarta",
    },
    {
      name: "Dinda & Rio",
      text: "Platform yang luar biasa! Artikel-artikelnya sangat bermanfaat untuk persiapan rumah tangga kami.",
      rating: 5,
      location: "Bandung",
    },
    {
      name: "Maya & Budi",
      text: "Konsultasi finansial di TemanCatin membantu kami merencanakan keuangan keluarga dengan matang.",
      rating: 5,
      location: "Surabaya",
    },
  ];

  const stats = [
    { number: "10,000+", label: "Pasangan Terdaftar", icon: Users },
    { number: "98%", label: "Tingkat Kepuasan", icon: Star },
    { number: "5,000+", label: "Konsultasi Selesai", icon: CheckCircle },
    { number: "50+", label: "Ahli Berpengalaman", icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen pt-8 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 "></div>
          <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-40 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 px-6 mb-6 lg:px-16 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Sparkles className="text-yellow-500 mr-2" size={24} />
                <span className="text-lg font-semibold text-gray-600">Platform #1 Persiapan Pernikahan</span>
              </div>

              <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold mb-8 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Yuk siapkan</span>
                <br />
                <span className="text-gray-800">pernikahanmu dengan matang</span>
              </h1>

              <p className="text-xl lg:text-2xl text-gray-600 mb-12 leading-relaxed">TemanCatin sebagai sarana untuk mempersiapkan dan belajar tentang basic life skill sebelum menikah, dengan desainnya yang fresh membuat pengalaman belajarmu semakin asik.</p>

              <div className="flex flex-col sm:flex-row gap-6">
                <Link
                  to="/uji-kesiapan"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Mulai Tes Kesiapan
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
                <button
                  type="button"
                  onClick={() => setShowKonselor(true)}
                  className="bg-gradient-to-r from-pink-600 to-red-500 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center group"
                >
                  Mulai Konsultasi Sekarang
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </button>
              </div>
            </div>

            {/* Image/Visual Content */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
                <img src="/hero-bg.jpg" alt="Happy Couple" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>

                {/* Floating Stats */}
                <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Star className="text-yellow-500" size={20} />
                    <span className="font-bold text-gray-800">4.9/5</span>
                  </div>
                  <p className="text-sm text-gray-600">Rating Pengguna</p>
                </div>

                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                  <div className="flex items-center space-x-2">
                    <Users className="text-blue-500" size={20} />
                    <span className="font-bold text-gray-800">10,000+</span>
                  </div>
                  <p className="text-sm text-gray-600">Pasangan Bergabung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Modal Konselor */}
        {showKonselor && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
              <button className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold" onClick={() => setShowKonselor(false)}>
                &times;
              </button>
              <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Pilih Konselor</h2>
              <div className="space-y-6">
                {konselors.map((k, idx) => (
                  <a
                    key={idx}
                    href={`https://wa.me/${k.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:bg-blue-50 transition-colors cursor-pointer shadow group"
                  >
                    <img src={k.avatar} alt={k.name} className="w-16 h-16 rounded-full object-cover border-2 border-blue-200" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-800 group-hover:text-blue-600">{k.name}</h3>
                      <p className="text-sm text-gray-600">{k.expertise}</p>
                    </div>
                    <span className="bg-green-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow">WhatsApp</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Categories Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Kategori Panduan</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Temukan berbagai panduan yang dirancang khusus untuk membantu perjalanan pernikahan Anda</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Teman Finansial */}
            <div className="bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 relative overflow-hidden">
              <div className="flex justify-center mb-6 group-hover:animate-bounce">
                <DollarSign size={40} className="text-green-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900">Teman Finansial</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Perencanaan keuangan untuk masa depan bersama</p>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <Link to="/artikel?category=Teman Finansial" className="bg-white text-green-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Artikel
                  </Link>
                  <Link to="/video?category=Teman Finansial" className="bg-green-700 text-white px-4 py-2 rounded-xl font-semibold hover:bg-green-800 transition-colors">
                    Video
                  </Link>
                </div>
              </div>
            </div>

            {/* Teman Nikah */}
            <div className="bg-gradient-to-br from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 relative overflow-hidden">
              <div className="flex justify-center mb-6 group-hover:animate-bounce">
                <Heart size={40} className="text-pink-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900">Teman Nikah</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Panduan persiapan pernikahan yang komprehensif</p>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <Link to="/artikel?category=Teman Nikah" className="bg-white text-pink-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Artikel
                  </Link>
                  <Link to="/video?category=Teman Nikah" className="bg-pink-700 text-white px-4 py-2 rounded-xl font-semibold hover:bg-pink-800 transition-colors">
                    Video
                  </Link>
                </div>
              </div>
            </div>

            {/* Teman Belajar */}
            <div className="bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 relative overflow-hidden">
              <div className="flex justify-center mb-6 group-hover:animate-bounce">
                <Brain size={40} className="text-blue-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900">Teman Belajar</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Kesehatan mental dan persiapan psikologis</p>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <Link to="/artikel?category=Teman Belajar" className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Artikel
                  </Link>
                  <Link to="/video?category=Teman Belajar" className="bg-blue-700 text-white px-4 py-2 rounded-xl font-semibold hover:bg-blue-800 transition-colors">
                    Video
                  </Link>
                </div>
              </div>
            </div>

            {/* Teman Parenting */}
            <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 hover:from-yellow-200 hover:to-yellow-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 relative overflow-hidden">
              <div className="flex justify-center mb-6 group-hover:animate-bounce">
                <Baby size={40} className="text-yellow-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900">Teman Parenting</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Panduan menjadi orang tua yang siap</p>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <Link to="/artikel?category=Teman Parenting" className="bg-white text-yellow-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Artikel
                  </Link>
                  <Link to="/video?category=Teman Parenting" className="bg-yellow-700 text-white px-4 py-2 rounded-xl font-semibold hover:bg-yellow-800 transition-colors">
                    Video
                  </Link>
                </div>
              </div>
            </div>

            {/* Panduan Catin */}
            <div className="bg-gradient-to-br from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300 p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 cursor-pointer group border border-gray-200 relative overflow-hidden">
              <div className="flex justify-center mb-6 group-hover:animate-bounce">
                <FileText size={40} className="text-indigo-700" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3 text-center group-hover:text-gray-900">Panduan Catin</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">Panduan lengkap calon pengantin</p>

              {/* Hover Buttons */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                <div className="flex gap-4">
                  <Link to="/artikel?category=Panduan Catin" className="bg-white text-indigo-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition-colors">
                    Artikel
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-6 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent size={32} className="mx-auto text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                  <p className="text-gray-600">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">Video & Tutorial</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Belajar melalui video interaktif dan tutorial praktis dari para ahli</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {getFeaturedVideos()
              .slice(0, 3)
              .map((video) => (
                <div key={video.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-100 overflow-hidden">
                  {/* Video Thumbnail */}
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                          <Play size={24} className="text-white ml-1" />
                        </div>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm flex items-center">
                      <Clock size={12} className="mr-1" />
                      {video.duration}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-2 left-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>{video.category}</span>
                    </div>
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors">{video.title}</h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center">
                        <Users size={12} className="mr-1" />
                        {video.speaker}
                      </div>
                      <div className="flex items-center">
                        <Eye size={12} className="mr-1" />
                        {video.views.toLocaleString()}
                      </div>
                    </div>

                    <Link to={`/video/${video.slug}`} className="block bg-gradient-to-r from-red-500 to-pink-600 text-white text-center py-3 rounded-xl font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300">
                      Tonton Video
                    </Link>
                  </div>
                </div>
              ))}
          </div>

          {/* CTA to Videos Page */}
          <div className="text-center">
            <Link
              to="/video"
              className="inline-flex items-center bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 group"
            >
              Lihat Semua Video
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Kata Mereka</span>
            </h2>
            <p className="text-xl text-gray-600">Pengalaman nyata dari pasangan yang telah bergabung dengan TemanCatin</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <Quote size={24} className="text-blue-600 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-500 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 mb-6 italic leading-relaxed">"{testimonial.text}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center text-xl mr-4">👥</div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Siap Memulai Perjalanan Pernikahan?</h2>
          <p className="text-xl mb-12 opacity-90">Bergabunglah dengan ribuan pasangan yang telah mempersiapkan pernikahan impian mereka bersama TemanCatin</p>

          {/* <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <input type="email" placeholder="Masukkan email Anda" className="w-full sm:w-auto flex-1 max-w-md px-6 py-4 rounded-2xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-white/30" />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap">Mulai Sekarang</button>
          </div> */}
{/* 
          <p className="text-sm opacity-75 mt-4">Gratis untuk memulai • Tidak ada spam • Batalkan kapan saja</p> */}
        </div>
      </section>

      {/* Footer */}
    </div>
  );
};

export default Home;
