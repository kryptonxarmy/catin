import React from "react";

const About = () => {
  const teamMembers = [
    {
      name: "Dr. Sarah Wijaya",
      role: "Psikolog Keluarga",
      image: "👩‍⚕️",
      description: "Spesialis konseling pra nikah dengan 10+ tahun pengalaman",
    },
    {
      name: "Ahmad Fauzi, M.E",
      role: "Financial Planner",
      image: "👨‍💼",
      description: "Ahli perencanaan keuangan keluarga dan investasi",
    },
    {
      name: "Siti Nurhaliza",
      role: "Wedding Consultant",
      image: "👰",
      description: "Konsultan pernikahan dengan pengalaman 8+ tahun",
    },
  ];

  const values = [
    {
      title: "Profesional",
      description: "Tim ahli bersertifikat dengan pengalaman bertahun-tahun",
      icon: "🎓",
      bgColor: "bg-pink-100",
    },
    {
      title: "Terpercaya",
      description: "Dipercaya oleh ribuan pasangan di seluruh Indonesia",
      icon: "🤝",
      bgColor: "bg-blue-100",
    },
    {
      title: "Holistik",
      description: "Pendekatan menyeluruh untuk persiapan pernikahan",
      icon: "🌟",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-6">Tentang TemanCatin</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            TemanCatin hadir untuk mendampingi perjalanan hidup Anda menuju pernikahan yang bahagia. Kami menyediakan berbagai layanan konsultasi dan bimbingan dari para ahli berpengalaman untuk membantu Anda mempersiapkan kehidupan rumah
            tangga yang harmonis.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="bg-gradient-to-br from-pink-100 to-pink-50 rounded-3xl p-8 border border-pink-200">
            <div className="text-5xl mb-6 text-center">🎯</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Misi Kami</h3>
            <p className="text-gray-600 leading-relaxed text-center">Memberikan bimbingan dan pendampingan terbaik untuk mempersiapkan pasangan menuju pernikahan yang bahagia, harmonis, dan berkelanjutan.</p>
          </div>

          <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl p-8 border border-blue-200">
            <div className="text-5xl mb-6 text-center">🌈</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Visi Kami</h3>
            <p className="text-gray-600 leading-relaxed text-center">Menjadi platform terdepan dalam bimbingan pra nikah di Indonesia, menciptakan keluarga-keluarga bahagia dan berkualitas.</p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-12">Nilai-Nilai Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className={`${value.bgColor} rounded-3xl p-8 text-center hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border border-gray-200`}>
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-pink-600 to-blue-600 bg-clip-text text-transparent mb-12">Tim Ahli Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 text-center border border-gray-100">
                <div className="text-6xl mb-6">{member.image}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                <p className="text-pink-500 font-medium mb-4">{member.role}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-pink-500 to-blue-500 rounded-3xl p-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-6">Siap Memulai Perjalanan Bersama Kami?</h2>
          <p className="text-xl mb-8 opacity-90">Mari wujudkan pernikahan impian Anda dengan bimbingan terbaik dari tim ahli kami</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">Konsultasi Sekarang 💕</button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
