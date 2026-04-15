import temanBelajarArticles from "./artikel/TemanBelajar.js";
import temanFinansialArticles from "./artikel/TemanFinansial.js";
import temanNikahArticles from "./artikel/TemanNikah.js";
import temanParentingArticles from "./artikel/TemanParenting.js";
import panduanCatinArticles from "./artikel/PanduanCatin.js";

// Data dummy artikel untuk website TemanCatin
// Gabungkan semua array artikel lalu deduplikasi berdasarkan `slug` (jaga entri pertama)
const combinedArticles = [
  ...temanBelajarArticles,
  ...temanFinansialArticles,
  ...temanNikahArticles,
  ...temanParentingArticles,
  ...panduanCatinArticles,
];

const artikelMap = new Map();
for (const a of combinedArticles) {
  if (!artikelMap.has(a.slug)) {
    artikelMap.set(a.slug, a);
  }
}

export const artikelData = Array.from(artikelMap.values()).sort((a, b) => a.id - b.id);

// Fungsi helper untuk mengambil artikel berdasarkan kategori
export const getArticlesByCategory = (category) => {
  if (category === "Semua") return artikelData;
  return artikelData.filter((article) => article.category === category);
};

// Fungsi helper untuk mengambil artikel featured
export const getFeaturedArticles = () => {
  return artikelData.filter((article) => article.featured);
};

// Fungsi helper untuk mengambil artikel berdasarkan slug
export const getArticleBySlug = (slug) => {
  return artikelData.find((article) => article.slug === slug);
};

// Fungsi helper untuk mengambil artikel terkait (berdasarkan kategori, kecuali artikel saat ini)
export const getRelatedArticles = (currentSlug, category, limit = 3) => {
  return artikelData.filter((article) => article.slug !== currentSlug && article.category === category).slice(0, limit);
};

// Fungsi helper untuk mendapatkan warna kategori
export const getCategoryColor = (category) => {
  const colors = {
    "Teman Finansial": "bg-green-100 text-green-700 border-green-200",
    "Teman Nikah": "bg-pink-100 text-pink-700 border-pink-200",
    "Teman Belajar": "bg-blue-100 text-blue-700 border-blue-200",
    "Teman Parenting": "bg-yellow-100 text-yellow-700 border-yellow-200",

    "Panduan Catin": "bg-indigo-100 text-indigo-700 border-indigo-200",
  };
  return colors[category] || "bg-gray-100 text-gray-700 border-gray-200";
};

// Daftar kategori yang tersedia
export const categories = ["Semua", "Teman Finansial", "Teman Nikah", "Teman Belajar", "Teman Parenting", "Panduan Catin"];

export default artikelData;
