import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Search, Calendar, Clock, User, Heart, Eye, ArrowRight, Star } from "lucide-react";
import { getArticlesByCategory, getFeaturedArticles, categories, getCategoryColor } from "../data/artikelData.js";

const Artikel = () => {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();

  // Set kategori berdasarkan URL parameter
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && categories.includes(categoryFromUrl)) {
      setSelectedCategory(categoryFromUrl);
    }
  }, [searchParams]);

  // Ambil artikel featured
  const featuredArticlesList = getFeaturedArticles();
  const featuredArticle = featuredArticlesList[0]; // Artikel featured utama

  // Filter artikel berdasarkan kategori dan pencarian, lalu keluarkan featured agar tidak tampil dua kali
  const filteredArticles = getArticlesByCategory(selectedCategory)
    .filter((article) =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .filter((a) => a.slug !== featuredArticle?.slug);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section with Search */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white"></div>
          <div className="absolute top-40 right-20 w-24 h-24 rounded-full bg-white"></div>
          <div className="absolute bottom-20 left-1/3 w-16 h-16 rounded-full bg-white"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">Artikel & Tips Pernikahan</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-12">Temukan wawasan mendalam dan tips praktis dari para ahli untuk membangun hubungan yang harmonis dan pernikahan yang bahagia</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="relative">
              <Search size={24} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari artikel berdasarkan judul, konten, atau tag..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-2xl border-0 bg-white/95 backdrop-blur-sm shadow-2xl focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-700 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-600 font-semibold mb-4">
                <Star size={20} className="mr-2" />
                Artikel Pilihan
              </div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Artikel Terpopuler</h2>
              <p className="text-xl text-gray-600">Artikel yang paling banyak dibaca dan direkomendasikan</p>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-96 lg:h-full bg-gradient-to-br from-blue-100 to-pink-100 overflow-hidden">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center text-6xl bg-gradient-to-br from-blue-100 to-pink-100">📚</div>

                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(featuredArticle.category)} shadow-lg border backdrop-blur-sm`}>✨ {featuredArticle.category}</span>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-6 left-6 flex space-x-4">
                    <div className="flex items-center bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm">
                      <Eye size={14} className="mr-1" />
                      {featuredArticle.views?.toLocaleString() || "0"}
                    </div>
                    <div className="flex items-center bg-black/20 backdrop-blur-sm px-3 py-2 rounded-full text-white text-sm">
                      <Heart size={14} className="mr-1" />
                      {featuredArticle.likes || "0"}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-12 flex flex-col justify-center">
                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    {/* <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-200 to-pink-200 flex items-center justify-center mr-2 overflow-hidden">
                        {featuredArticle.author?.avatar ? <img src={featuredArticle.author.avatar} alt={featuredArticle.author.name} className="w-full h-full object-cover" /> : <User size={14} />}
                      </div>
                      {featuredArticle.author?.name || featuredArticle.author}
                    </div> */}
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {featuredArticle.readTime}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold text-gray-800 mb-6 leading-tight">{featuredArticle.title}</h3>

                  <p className="text-gray-600 leading-relaxed mb-8 text-lg">{featuredArticle.excerpt}</p>

                  <Link
                    to={`/artikel/${featuredArticle.slug}`}
                    className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg group"
                  >
                    Baca Artikel Lengkap
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Jelajahi Berdasarkan Kategori</h2>
            <p className="text-gray-600">Temukan artikel sesuai dengan topik yang Anda minati</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl" : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 shadow-lg"
                }`}
              >
                {category}
                {selectedCategory === category && <span className="ml-2 inline-block w-2 h-2 bg-white rounded-full animate-pulse"></span>}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Semua Artikel</h2>
            <p className="text-gray-600">{searchQuery || selectedCategory !== "Semua" ? `Menampilkan ${filteredArticles.length} artikel` : `Total ${filteredArticles.length} artikel tersedia`}</p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((artikel) => (
              <article key={artikel.slug} className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-500 cursor-pointer group border border-gray-100 overflow-hidden">
                {/* Article Image */}
                <div className="relative h-56 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                  <img
                    src={artikel.image}
                    alt={artikel.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.nextSibling.style.display = "flex";
                    }}
                  />
                  <div className="absolute inset-0 hidden items-center justify-center text-6xl bg-gradient-to-br from-blue-100 to-pink-100">📚</div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(artikel.category)} border backdrop-blur-sm`}>{artikel.category}</span>
                  </div>

                  {/* Stats */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <div className="flex items-center bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                      <Eye size={12} className="mr-1" />
                      {artikel.views || "0"}
                    </div>
                    <div className="flex items-center bg-black/20 backdrop-blur-sm px-2 py-1 rounded-full text-white text-xs">
                      <Heart size={12} className="mr-1" />
                      {artikel.likes || "0"}
                    </div>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6">
                  {/* Meta Information */}
                  <div className="flex items-center justify-between mb-3 text-xs text-gray-500">
                    <div className="flex items-center space-x-3">
                      {/* <div className="flex items-center">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-200 to-pink-200 flex items-center justify-center mr-1 overflow-hidden">
                          {artikel.author?.avatar ? <img src={artikel.author.avatar} alt={artikel.author.name} className="w-full h-full object-cover" /> : <User size={10} />}
                        </div>
                        {artikel.author?.name || artikel.author}
                      </div> */}
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {artikel.date}
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock size={12} className="mr-1" />
                      {artikel.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gray-900 line-clamp-2 leading-tight">{artikel.title}</h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 leading-relaxed text-sm mb-4 line-clamp-3">{artikel.excerpt}</p>

                  {/* Read More Link */}
                  <Link to={`/artikel/${artikel.slug}`} className="inline-flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors group/link">
                    Baca Selengkapnya
                    <ArrowRight size={16} className="ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* No Results Message */}
          {filteredArticles.length === 0 && (
            <div className="text-center py-16">
              <div className="text-8xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Tidak Ada Artikel Ditemukan</h3>
              <p className="text-gray-600 mb-8">{searchQuery ? `Tidak ada artikel yang sesuai dengan pencarian "${searchQuery}"` : `Belum ada artikel dalam kategori "${selectedCategory}"`}</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
                className="px-6 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
              >
                Lihat Semua Artikel
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Artikel;
