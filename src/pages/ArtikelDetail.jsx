import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Clock, User, Calendar, ArrowLeft, Share2, BookOpen, Eye, Heart, Tag } from "lucide-react";
import { getArticleBySlug, getRelatedArticles, getCategoryColor } from "../data/artikelData.js";
import panduanCatinPdf from "../data/pdf/MODUL Bimbingan Perkawinan untuk CATIN (Kemenag).pdf";
import fondasiKeluargaPdf from "../data/pdf/Fondasi Keluarga Sakinah (Kemenag).pdf";

const ArtikelDetail = () => {
  const { slug } = useParams();

  // Ambil artikel berdasarkan slug
  const artikel = getArticleBySlug(slug);

  if (!artikel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-8xl mb-6">📖</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Artikel Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, artikel yang Anda cari tidak tersedia.</p>
          <Link
            to="/artikel"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg"
          >
            <ArrowLeft size={20} className="mr-2" />
            Kembali ke Artikel
          </Link>
        </div>
      </div>
    );
  }

  // Artikel rekomendasi berdasarkan kategori
  const rekomendasiArtikel = getRelatedArticles(slug, artikel.category, 3);
  const isPanduanCatin = artikel.category === "Panduan Catin";
  const pdfOptions = [
    {
      id: "modul-bimwin",
      title: "MODUL Bimbingan Perkawinan untuk CATIN (Kemenag)",
      src: panduanCatinPdf,
    },
    {
      id: "fondasi-sakinah",
      title: "Fondasi Keluarga Sakinah (Kemenag)",
      src: fondasiKeluargaPdf,
    },
  ];
  const [selectedPdfId, setSelectedPdfId] = useState(pdfOptions[0].id);
  const selectedPdf = pdfOptions.find((item) => item.id === selectedPdfId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 rounded-full bg-white"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Back Button */}
          <Link to="/artikel" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Artikel
          </Link>

          {/* Category Badge */}
          <div className="mb-6">
            <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(artikel.category)} shadow-lg border backdrop-blur-sm`}>{artikel.category}</span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">{artikel.title}</h1>

          <p className="text-xl text-white/90 leading-relaxed mb-8 max-w-3xl">{artikel.excerpt}</p>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-white/80">
            {/* {!isPanduanCatin && (
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white mr-3 overflow-hidden">
                  {artikel.author?.avatar ? <img src={artikel.author.avatar} alt={artikel.author.name} className="w-full h-full object-cover" /> : <User size={20} />}
                </div>
                <div>
                  <div className="flex items-center">
                    <span className="font-semibold">{artikel.author?.name || artikel.author}</span>
                  </div>
                  {artikel.author?.specialty && <div className="text-sm text-white/60">{artikel.author.specialty}</div>}
                </div>
              </div>
            )} */}
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              {artikel.date}
            </div>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              {artikel.readTime}
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                <Eye size={16} className="mr-2" />
                {artikel.views?.toLocaleString() || "0"} views
              </div>
              <div className="flex items-center bg-white/20 backdrop-blur-sm px-3 py-2 rounded-full">
                <Heart size={16} className="mr-2" />
                {artikel.likes || "0"} likes
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Article Content */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
                {/* Article Image */}
                <div className="relative h-96 bg-gradient-to-br from-gray-200 to-gray-300 rounded-2xl overflow-hidden mb-8">
                  <img
                    src={artikel.image}
                    alt={artikel.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center text-8xl bg-gradient-to-br from-blue-100 to-pink-100">📚</div>
                </div>

                {/* Share Button */}
                <div className="flex justify-end mb-8">
                  <button className="flex items-center text-gray-600 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-full">
                    <Share2 size={16} className="mr-2" />
                    Bagikan Artikel
                  </button>
                </div>

                {/* Article Content */}
                {!isPanduanCatin && (
                  <div
                    className="prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: artikel.content }}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      lineHeight: "1.8",
                    }}
                  />
                )}

                {isPanduanCatin && (
                  <div className="mt-2">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">Dokumen Panduan</h4>
                    <div className="grid gap-4 sm:grid-cols-2">
                      {pdfOptions.map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedPdfId(item.id)}
                          className={`text-left p-4 rounded-2xl border transition-all ${
                            selectedPdfId === item.id
                              ? "border-blue-500 bg-blue-50 shadow"
                              : "border-gray-200 bg-white hover:bg-gray-50"
                          }`}
                        >
                          <div className="font-semibold text-gray-800 mb-1">{item.title}</div>
                          <div className="text-sm text-gray-500">Klik untuk melihat PDF</div>
                        </button>
                      ))}
                    </div>

                    {selectedPdf && (
                      <div className="mt-6">
                        <div className="w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50">
                          <iframe
                            title={`PDF ${selectedPdf.title}`}
                            src={selectedPdf.src}
                            className="w-full h-[720px]"
                          />
                        </div>
                        <div className="mt-3 text-sm text-gray-500">
                          Jika PDF tidak tampil, <a href={selectedPdf.src} target="_blank" rel="noreferrer" className="text-blue-600 hover:text-blue-700">buka di tab baru</a>.
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center mb-4">
                    <Tag size={20} className="mr-2 text-gray-500" />
                    <h4 className="text-lg font-semibold text-gray-700">Tags</h4>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {artikel.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-pink-50 text-gray-700 rounded-full text-sm hover:from-blue-100 hover:to-pink-100 transition-all cursor-pointer transform hover:scale-105 border border-gray-200"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {!isPanduanCatin && (
                <>
                </>
                // <div className="bg-white rounded-3xl shadow-xl p-8 mt-8">
                //   <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                //     <User size={24} className="mr-2" />
                //     Tentang Penulis
                //   </h3>
                //   <div className="flex items-start space-x-6">
                //     <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-pink-200 rounded-2xl flex items-center justify-center text-3xl shadow-lg overflow-hidden flex-shrink-0">
                //       {artikel.author?.avatar ? <img src={artikel.author.avatar} alt={artikel.author.name} className="w-full h-full object-cover" /> : <User size={24} />}
                //     </div>
                //     <div className="flex-1">
                //       <h4 className="text-xl font-bold text-gray-800 mb-2">{artikel.author?.name || artikel.author}</h4>
                //       {artikel.author?.specialty && <p className="text-blue-600 font-medium mb-2">{artikel.author.specialty}</p>}
                //       <p className="text-gray-600 leading-relaxed">{artikel.author?.bio || "Penulis berpengalaman di bidangnya dengan dedikasi tinggi untuk berbagi ilmu dan pengalaman kepada pembaca."}</p>
                //     </div>
                //   </div>
                // </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 space-y-8">
                {/* Article Stats */}
                <div className="bg-white rounded-3xl shadow-xl p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-4">Statistik Artikel</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Eye size={16} className="mr-2 text-blue-600" />
                        <span className="text-gray-600">Views</span>
                      </div>
                      <span className="font-semibold text-gray-800">{artikel.views?.toLocaleString() || "0"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Heart size={16} className="mr-2 text-pink-600" />
                        <span className="text-gray-600">Likes</span>
                      </div>
                      <span className="font-semibold text-gray-800">{artikel.likes || "0"}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-green-600" />
                        <span className="text-gray-600">Waktu Baca</span>
                      </div>
                      <span className="font-semibold text-gray-800">{artikel.readTime}</span>
                    </div>
                  </div>
                </div>

                {/* Related Articles */}
                {rekomendasiArtikel.length > 0 && (
                  <div className="bg-white rounded-3xl shadow-xl p-6">
                    <h3 className="text-lg font-bold text-gray-800 mb-6 flex items-center">
                      <BookOpen size={20} className="mr-2" />
                      Artikel Terkait
                    </h3>

                    <div className="space-y-4">
                      {rekomendasiArtikel.map((item) => (
                        <Link key={item.id} to={`/artikel/${item.slug}`} className="block p-4 rounded-2xl hover:bg-gray-50 transition-colors group">
                          <div className="flex items-start space-x-3">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-pink-100 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">📄</div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-semibold text-gray-800 text-sm group-hover:text-gray-900 line-clamp-2 mb-2 leading-tight">{item.title}</h4>
                              <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className={`px-2 py-1 rounded-full ${getCategoryColor(item.category)}`}>{item.category}</span>
                                <span>{item.readTime}</span>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-pink-50 rounded-3xl p-6 border border-blue-100">
                  <h4 className="font-bold text-gray-800 mb-3 text-center">📧 Newsletter</h4>
                  <p className="text-sm text-gray-600 mb-4 text-center">Dapatkan artikel terbaru langsung di email Anda</p>
                  <div className="space-y-3">
                    <input type="email" placeholder="Email Anda..." className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300 text-sm" />
                    <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl text-sm font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
                      Berlangganan Gratis
                    </button>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-3">100% gratis, bisa berhenti kapan saja</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ArtikelDetail;
