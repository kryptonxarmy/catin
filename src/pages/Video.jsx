import React, { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { Play, Clock, User, Calendar, Eye, Heart, Search, Filter } from "lucide-react";
import { categories, getFeaturedVideos, getVideosByCategory, getCategoryColor } from "../data/videoData.js";

const Video = () => {
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

  // Filter video berdasarkan kategori dan pencarian
  const filteredVideos = getVideosByCategory(selectedCategory).filter(
    (video) => video.title.toLowerCase().includes(searchQuery.toLowerCase()) || video.description.toLowerCase().includes(searchQuery.toLowerCase()) || video.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  // Ambil video featured
  const featuredVideos = getFeaturedVideos();
  const featuredVideo = featuredVideos[0]; // Video featured utama

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Hero Section with Featured Video */}
      <section className="relative py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Video & Tutorial</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">Belajar melalui video interaktif dan tutorial praktis dari para ahli untuk mempersiapkan pernikahan impian Anda.</p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari video, topik, atau speaker..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-300 text-lg bg-white shadow-lg"
              />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="flex items-center space-x-2 mr-4">
              <Filter size={20} className="text-gray-500" />
              <span className="text-gray-600 font-medium">Filter:</span>
            </div>
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg transform scale-105" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200 shadow-sm hover:shadow-md"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Video */}
          {featuredVideo && (
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16 border border-gray-100">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Video Player */}
                <div className="relative bg-black group">
                  <div className="aspect-video">
                    <iframe
                      src={`https://www.youtube.com/embed/${featuredVideo.youtubeId}`}
                      title={featuredVideo.title}
                      className="w-full h-full"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                      <Play size={12} className="mr-1" />
                      FEATURED
                    </span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(featuredVideo.category)}`}>{featuredVideo.category}</span>
                  </div>

                  <h2 className="text-3xl font-bold text-gray-800 mb-4 leading-tight">{featuredVideo.title}</h2>

                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredVideo.description}</p>

                  <div className="flex items-center space-x-6 mb-6 text-sm text-gray-500">
                    <div className="flex items-center">
                      <User size={16} className="mr-2" />
                      {featuredVideo.speaker}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {featuredVideo.duration}
                    </div>
                    <div className="flex items-center">
                      <Eye size={16} className="mr-2" />
                      {featuredVideo.views.toLocaleString()}
                    </div>
                  </div>

                  <Link
                    to={`/video/${featuredVideo.slug}`}
                    className="inline-flex items-center bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 group"
                  >
                    Tonton Sekarang
                    <Play size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">{selectedCategory === "Semua" ? "Semua Video" : selectedCategory}</h2>
            <div className="text-gray-600">{filteredVideos.length} video ditemukan</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video) => (
              <div key={video.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group border border-gray-100 overflow-hidden">
                {/* Video Thumbnail */}
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://img.youtube.com/vi/${video.youtubeId}/maxresdefault.jpg`;
                      }}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center">
                        <Play size={24} className="text-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">{video.duration}</div>

                  {/* Category Badge */}
                  <div className="absolute top-2 left-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(video.category)}`}>{video.category}</span>
                  </div>
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">{video.title}</h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{video.description}</p>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center">
                      <User size={12} className="mr-1" />
                      {video.speaker}
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center">
                        <Eye size={12} className="mr-1" />
                        {video.views.toLocaleString()}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={12} className="mr-1" />
                        {new Date(video.publishedDate).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "short",
                        })}
                      </div>
                    </div>
                  </div>

                  <Link to={`/video/${video.slug}`} className="block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Tonton Video
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredVideos.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🎥</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Video Tidak Ditemukan</h3>
              <p className="text-gray-600 mb-8">Coba ubah kata kunci pencarian atau pilih kategori lain</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("Semua");
                }}
                className="bg-blue-500 text-white px-6 py-3 rounded-xl hover:bg-blue-600 transition-colors"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Jangan Lewatkan Video Terbaru!</h2>
          <p className="text-xl mb-8 opacity-90">Berlangganan untuk mendapatkan notifikasi video tutorial terbaru dari para ahli</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Email Anda" className="flex-1 px-6 py-3 rounded-xl text-gray-700 focus:outline-none focus:ring-4 focus:ring-white/30" />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors">Berlangganan 🔔</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Video;
