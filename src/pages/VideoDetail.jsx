import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Play, User, Calendar, Eye, Heart, Share2, ArrowLeft, BookOpen, Clock, Tag } from "lucide-react";
import { getVideoBySlug, getRelatedVideos, getCategoryColor } from "../data/videoData.js";

const VideoDetail = () => {
  const { slug } = useParams();
  const [isLiked, setIsLiked] = useState(false);

  // Ambil video berdasarkan slug
  const video = getVideoBySlug(slug);

  if (!video) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Video Tidak Ditemukan</h1>
          <p className="text-gray-600 mb-8">Maaf, video yang Anda cari tidak tersedia.</p>
          <Link to="/video" className="px-8 py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors">
            Kembali ke Video
          </Link>
        </div>
      </div>
    );
  }

  // Video rekomendasi berdasarkan kategori
  const relatedVideos = getRelatedVideos(slug, video.category, 3);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Back Button */}
      <div className="px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <Link to="/video" className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors group">
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Video
          </Link>
        </div>
      </div>

      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Video Content */}
            <div className="lg:col-span-2">
              {/* Video Player */}
              <div className="bg-white rounded-2xl shadow-2xl overflow-hidden mb-8">
                <div className="aspect-video bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>

                {/* Video Info */}
                <div className="p-8">
                  <div className="mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(video.category)}`}>{video.category}</span>
                  </div>

                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 leading-tight">{video.title}</h1>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center justify-between mb-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-6 mb-4 lg:mb-0">
                      <div className="flex items-center">
                        <User size={16} className="mr-2" />
                        {video.speaker}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {new Date(video.publishedDate).toLocaleDateString("id-ID", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2" />
                        {video.duration}
                      </div>
                      <div className="flex items-center">
                        <Eye size={16} className="mr-2" />
                        {video.views.toLocaleString()} views
                      </div>
                    </div>

                    <div className="flex items-center space-x-4">
                      <button onClick={() => setIsLiked(!isLiked)} className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${isLiked ? "bg-red-100 text-red-600" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
                        <Heart size={16} className={isLiked ? "fill-current" : ""} />
                        <span>Suka</span>
                      </button>
                      <button className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors">
                        <Share2 size={16} />
                        <span>Bagikan</span>
                      </button>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Deskripsi</h3>
                    <p className="text-gray-600 leading-relaxed">{video.description}</p>
                  </div>

                  {/* Tags */}
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Tag size={18} className="mr-2" />
                      Tags
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {video.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors cursor-pointer">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Speaker Bio */}
              <div className="bg-white rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Tentang Pembicara</h3>
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center text-3xl flex-shrink-0">👨‍🏫</div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{video.speaker}</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Ahli berpengalaman dalam bidang {video.category.toLowerCase()} dengan pengalaman lebih dari 10 tahun. Telah membantu ribuan pasangan dalam mempersiapkan kehidupan pernikahan yang harmonis dan bahagia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Related Videos */}
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
                <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
                  <BookOpen size={20} className="mr-2" />
                  Video Terkait
                </h3>

                <div className="space-y-6">
                  {relatedVideos.map((relatedVideo) => (
                    <Link key={relatedVideo.id} to={`/video/${relatedVideo.slug}`} className="block group hover:bg-gray-50 rounded-xl p-4 transition-colors">
                      <div className="flex space-x-4">
                        <div className="relative w-24 h-16 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={relatedVideo.thumbnail}
                            alt={relatedVideo.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            onError={(e) => {
                              e.target.src = `https://img.youtube.com/vi/${relatedVideo.youtubeId}/maxresdefault.jpg`;
                            }}
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                            <Play size={12} className="text-white" />
                          </div>
                          <div className="absolute bottom-1 right-1 bg-black bg-opacity-75 text-white text-xs px-1 rounded">{relatedVideo.duration}</div>
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-gray-800 text-sm line-clamp-2 group-hover:text-blue-600 transition-colors mb-2">{relatedVideo.title}</h4>
                          <div className="flex items-center justify-between text-xs text-gray-500">
                            <span>{relatedVideo.speaker}</span>
                            <div className="flex items-center">
                              <Eye size={10} className="mr-1" />
                              {relatedVideo.views.toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 mt-8">
                  <h4 className="font-bold text-gray-800 mb-3">Berlangganan Channel</h4>
                  <p className="text-sm text-gray-600 mb-4">Dapatkan notifikasi video terbaru langsung ke email Anda</p>
                  <div className="space-y-3">
                    <input type="email" placeholder="Email Anda" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-200 text-sm" />
                    <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-700 transition-all">Berlangganan 🔔</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
