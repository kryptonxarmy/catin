import React, { useState } from "react";
import { Check, X, Heart, Brain, Users, DollarSign, Sparkles, RotateCcw, MessageCircle, Award, TrendingUp, Star } from "lucide-react";

const konselors = [
  {
    name: "Dr. Sari Finansial",
    expertise: "Keuangan & Investasi",
    whatsapp: "6281234567890",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b606?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Ustadz Budi Nikah",
    expertise: "Persiapan & Konseling Nikah",
    whatsapp: "6289876543210",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    name: "Dr. Lisa Parenting",
    expertise: "Parenting & Psikologi Anak",
    whatsapp: "6281122334455",
    avatar: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop&crop=face",
  },
];

const aspects = [
  {
    title: "Kesiapan Emosional",
    description: "Kemampuan individu mengelola emosi, stres, dan konflik dalam hubungan.",
    icon: Heart,
    color: "from-pink-400 to-rose-500",
    bgColor: "bg-pink-50",
    textColor: "text-pink-700",
    items: [
      "Saya mampu mengendalikan diri ketika sedang marah kepada pasangan.",
      "Saya dapat menenangkan diri ketika terjadi perbedaan pendapat dengan pasangan.",
      "Saya sering bereaksi berlebihan ketika pasangan berbuat salah. (reverse)",
      "Saya mampu memaafkan pasangan setelah terjadi pertengkaran.",
    ],
  },
  {
    title: "Kesiapan Kognitif",
    description: "Pemahaman dan kesadaran terhadap makna, tanggung jawab, dan realitas pernikahan.",
    icon: Brain,
    color: "from-purple-400 to-indigo-500",
    bgColor: "bg-purple-50",
    textColor: "text-purple-700",
    items: [
      "Saya memahami bahwa menikah bukan hanya soal cinta, tetapi juga tanggung jawab.",
      "Saya menyadari bahwa dalam pernikahan pasti ada masalah yang harus dihadapi bersama.",
      "Saya mengetahui hak dan kewajiban saya sebagai calon suami/istri.",
      "Saya memiliki gambaran realistis tentang kehidupan setelah menikah.",
    ],
  },
  {
    title: "Kesiapan Sosial dan Komunikasi",
    description: "Kemampuan menjalin komunikasi dan menyesuaikan diri dengan pasangan serta lingkungan sosialnya.",
    icon: Users,
    color: "from-blue-400 to-cyan-500",
    bgColor: "bg-blue-50",
    textColor: "text-blue-700",
    items: [
      "Saya terbuka dalam menyampaikan pendapat kepada pasangan.",
      "Saya siap menerima perbedaan pendapat dari pasangan.",
      "Saya mampu beradaptasi dengan keluarga pasangan.",
      "Saya mampu menyelesaikan konflik tanpa menyinggung perasaan pasangan.",
    ],
  },
  {
    title: "Kesiapan Finansial dan Tanggung Jawab",
    description: "Kemampuan mengatur keuangan dan menjalankan tanggung jawab ekonomi rumah tangga.",
    icon: DollarSign,
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-50",
    textColor: "text-green-700",
    items: [
      "Saya sudah memiliki pekerjaan atau sumber penghasilan tetap.",
      "Saya mampu mengatur keuangan pribadi dengan baik.",
      "Saya memiliki kebiasaan menabung untuk masa depan.",
      "Saya siap berbagi tanggung jawab finansial dengan pasangan.",
    ],
  },
  {
    title: "Kesiapan Spiritual dan Komitmen",
    description: "Landasan moral, nilai spiritual, dan kesadaran komitmen dalam pernikahan.",
    icon: Sparkles,
    color: "from-yellow-400 to-orange-500",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    items: [
      "Saya menganggap pernikahan sebagai bagian dari ibadah kepada Tuhan.",
      "Saya siap menjaga kesetiaan terhadap pasangan dalam kondisi apapun.",
      "Saya melibatkan Tuhan dalam setiap keputusan penting mengenai hubungan saya.",
      "Saya siap mempertahankan pernikahan meskipun menghadapi ujian hidup.",
    ],
  },
];

// const reverseItems = [2]; // Index global dari item reverse (mulai dari 0)

const getGlobalIndex = (aspectIdx, itemIdx) => aspectIdx * 4 + itemIdx;

const UjiKesiapan = () => {
  const [answers, setAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [showKonselor, setShowKonselor] = useState(false);

  // Petunjuk Pengisian
  const instructions = ["Bacalah setiap pernyataan dengan cermat.", "Pilihan ‘Ya’ jika pernyataan tersebut sesuai dengan diri Anda, dan pilih ‘Tidak’ jika tidak sesuai dengan diri Anda.", "Beri tanda (✓) pada kolom yang sesuai."];

  const handleAnswerChange = (globalIdx, answer) => {
    setAnswers((prev) => ({ ...prev, [globalIdx]: answer }));
  };

  const handleSubmit = () => {
    let totalScore = 0;
    for (let i = 0; i < 20; i++) {
      const ans = answers[i];
      // Reverse scoring untuk item ke-3 (index 2)
      if (i === 2) {
        totalScore += ans === false ? 5 : 0;
      } else {
        totalScore += ans === true ? 5 : 0;
      }
    }
    setScore(totalScore);
    setShowResult(true);
  };

  const getScoreMessage = (score) => {
    if (score >= 80) {
      return {
        title: "Luar Biasa! Anda Sangat Siap! �",
        message: "Persiapan mental dan emosional Anda sudah sangat matang untuk memulai kehidupan pernikahan yang harmonis dan bahagia.",
        color: "text-emerald-700",
        bgColor: "bg-gradient-to-br from-emerald-50 to-green-100",
        borderColor: "border-emerald-200",
        icon: Award,
        recommendations: ["Teruskan komunikasi yang baik dengan pasangan", "Pertahankan komitmen spiritual yang kuat", "Bangun rencana masa depan bersama"],
      };
    } else if (score >= 60) {
      return {
        title: "Baik! Anda Cukup Siap 👍",
        message: "Anda sudah memiliki fondasi yang baik, namun masih ada beberapa area yang bisa diperkuat untuk persiapan yang lebih optimal.",
        color: "text-amber-700",
        bgColor: "bg-gradient-to-br from-amber-50 to-yellow-100",
        borderColor: "border-amber-200",
        icon: TrendingUp,
        recommendations: ["Tingkatkan komunikasi dengan pasangan", "Perdalam pemahaman tentang tanggung jawab pernikahan", "Pertimbangkan konseling pra nikah"],
      };
    } else {
      return {
        title: "Mari Persiapkan Lebih Matang 💪",
        message: "Masih ada beberapa aspek penting yang perlu dipersiapkan dengan lebih baik. Jangan khawatir, ini adalah langkah awal yang baik!",
        color: "text-rose-700",
        bgColor: "bg-gradient-to-br from-rose-50 to-pink-100",
        borderColor: "border-rose-200",
        icon: Star,
        recommendations: ["Ikuti konseling pra nikah dengan profesional", "Perbaiki keterampilan komunikasi dan manajemen emosi", "Diskusikan lebih mendalam dengan pasangan tentang masa depan"],
      };
    }
  };

  if (showResult) {
    const result = getScoreMessage(score);
    const ResultIcon = result.icon;

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-purple-200 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative z-10 px-6 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Hasil Tes Kesiapan</h1>
              <p className="text-xl text-gray-600">Pernikahan Anda</p>
            </div>

            {/* Score Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-8">
              {/* Score Header */}
              <div className={`${result.bgColor} p-8 text-center border-b ${result.borderColor} border-2`}>
                <div className="flex justify-center mb-6">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <ResultIcon size={40} className={result.color} />
                  </div>
                </div>
                <div className="text-7xl font-bold text-gray-800 mb-4">
                  {score}
                  <span className="text-3xl text-gray-600">/100</span>
                </div>
                <h2 className={`text-3xl font-bold ${result.color} mb-4`}>{result.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">{result.message}</p>
              </div>

              {/* Recommendations */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <MessageCircle className="mr-3 text-blue-500" size={28} />
                  Rekomendasi untuk Anda
                </h3>
                <div className="grid gap-4">
                  {result.recommendations.map((rec, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{index + 1}</div>
                      <p className="text-gray-700 leading-relaxed">{rec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={() => {
                  setShowResult(false);
                  setAnswers({});
                  setScore(0);
                }}
                className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <RotateCcw size={20} />
                <span>Ulangi Tes</span>
              </button>
              <button 
                onClick={() => setShowKonselor(true)}
                className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-3"
              >
                <MessageCircle size={20} />
                <span>Konsultasi dengan Ahli</span>
              </button>
            </div>
          </div>
        </div>

        {/* Modal Konselor */}
        {showKonselor && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full relative animate-fadeIn">
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold" 
                onClick={() => setShowKonselor(false)}
              >
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-pink-50">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-purple-200 rounded-full opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">Uji Kesiapan Pernikahan</h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">Evaluasi kesiapan Anda dalam berbagai aspek penting untuk memulai kehidupan pernikahan yang harmonis dan bahagia</p>

            {/* Instructions Card */}
            <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 border-2 border-blue-100">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Check className="text-blue-600" size={24} />
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Petunjuk Pengisian</h2>
              <div className="space-y-4 text-left">
                {instructions.map((item, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">{idx + 1}</div>
                    <p className="text-gray-700 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Test Questions */}
          <div className="space-y-8">
            {aspects.map((aspect, aspectIdx) => {
              const IconComponent = aspect.icon;
              return (
                <div key={aspectIdx} className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-gray-100 hover:border-gray-200 transition-all duration-300">
                  {/* Aspect Header */}
                  <div className={`${aspect.bgColor} p-6 border-b border-gray-200`}>
                    <div className="flex items-center space-x-4">
                      <div className={`w-16 h-16 bg-gradient-to-br ${aspect.color} rounded-xl flex items-center justify-center shadow-lg`}>
                        <IconComponent className="text-white" size={24} />
                      </div>
                      <div className="flex-1">
                        <h2 className={`text-2xl font-bold ${aspect.textColor} mb-2`}>{aspect.title}</h2>
                        <p className="text-gray-600 leading-relaxed">{aspect.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Questions */}
                  <div className="p-6">
                    <div className="space-y-4">
                      {aspect.items.map((item, itemIdx) => {
                        const globalIdx = getGlobalIndex(aspectIdx, itemIdx);
                        const isReverse = item.includes("(reverse)");
                        return (
                          <div key={itemIdx} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                            <div className="flex items-start space-x-4">
                              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-sm font-bold text-gray-600 shadow-sm flex-shrink-0 mt-1">{globalIdx + 1}</div>
                              <div className="flex-1">
                                <p className="text-gray-800 leading-relaxed mb-4">
                                  {item.replace(" (reverse)", "")}
                                  {isReverse && <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded-full font-medium">reverse</span>}
                                </p>
                                <div className="flex space-x-4">
                                  <button
                                    onClick={() => handleAnswerChange(globalIdx, true)}
                                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-200 ${
                                      answers[globalIdx] === true ? "bg-green-500 border-green-500 text-white shadow-lg transform scale-105" : "bg-white border-gray-200 text-gray-600 hover:border-green-300 hover:bg-green-50"
                                    }`}
                                  >
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[globalIdx] === true ? "border-white bg-white" : "border-gray-300"}`}>
                                      {answers[globalIdx] === true && <Check size={16} className="text-green-500" />}
                                    </div>
                                    <span className="font-medium">Ya</span>
                                  </button>
                                  <button
                                    onClick={() => handleAnswerChange(globalIdx, false)}
                                    className={`flex items-center space-x-3 px-6 py-3 rounded-xl border-2 transition-all duration-200 ${
                                      answers[globalIdx] === false ? "bg-red-500 border-red-500 text-white shadow-lg transform scale-105" : "bg-white border-gray-200 text-gray-600 hover:border-red-300 hover:bg-red-50"
                                    }`}
                                  >
                                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${answers[globalIdx] === false ? "border-white bg-white" : "border-gray-300"}`}>
                                      {answers[globalIdx] === false && <X size={16} className="text-red-500" />}
                                    </div>
                                    <span className="font-medium">Tidak</span>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Progress Bar */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-6 border-2 border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <span className="text-gray-600 font-medium">Progress Pengisian</span>
              <span className="text-blue-600 font-bold">{Object.keys(answers).length} / 20 pertanyaan</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-500 ease-out" style={{ width: `${(Object.keys(answers).length / 20) * 100}%` }}></div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-12">
            <button
              onClick={handleSubmit}
              disabled={Object.keys(answers).length !== 20}
              className={`group px-12 py-4 rounded-xl text-xl font-semibold transition-all duration-300 ${
                Object.keys(answers).length === 20 ? "bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:from-pink-600 hover:to-rose-700 transform hover:scale-105 hover:shadow-xl" : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              {Object.keys(answers).length === 20 ? (
                <span className="flex items-center space-x-3">
                  <Award size={24} />
                  <span>Lihat Hasil Tes</span>
                </span>
              ) : (
                <span>Jawab Semua Pertanyaan</span>
              )}
            </button>
            {Object.keys(answers).length !== 20 && <p className="text-gray-500 text-sm mt-4">Mohon jawab semua pertanyaan untuk melanjutkan ke hasil</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UjiKesiapan;
