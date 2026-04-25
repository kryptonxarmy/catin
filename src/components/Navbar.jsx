import React, { useState } from "react";
import { Link } from "react-router-dom";
import { colorClasses } from "../colors.js";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className={`flex justify-center items-center px-4 md:px-8 ${colorClasses.bg.primary.white} shadow-lg sticky top-0 z-50 border-b-2 ${colorClasses.border.blue[200]}`}>
      <div className="flex items-center justify-center gap-12 max-w-6xl w-full relative">
        {/* Left Menu Items */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-[#eea09e] font-medium transition-colors duration-300 hover:scale-105 transform">
            Beranda
          </Link>
          <Link to="/artikel" className="text-gray-700 hover:text-[#eea09e] font-medium transition-colors duration-300 hover:scale-105 transform">
            Artikel
          </Link>
        </div>

        {/* Center Logo */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/logo_catin-removebg-preview.png" alt="TemanCatin Logo" className="h-24 w-auto" />
          </Link>
        </div>

        {/* Right Menu Items */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/video" className="text-gray-700 hover:text-[#a2cbe1] font-medium transition-colors duration-300 hover:scale-105 transform">
            Video
          </Link>
          <Link to="/tentang" className="text-gray-700 hover:text-[#eea09e] font-medium transition-colors duration-300 hover:scale-105 transform">
            Tentang
          </Link>
          <Link to="/uji-kesiapan" className="text-gray-700 hover:text-[#7bd389] font-medium transition-colors duration-300 hover:scale-105 transform">
            Tes Kesiapan
          </Link>
          <Link to="/konsultasi" className="text-gray-700 hover:text-[#25D366] font-medium transition-colors duration-300 hover:scale-105 transform">
            Konsultasi
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute right-4">
          <button className="text-gray-700 hover:text-[#eea09e] focus:outline-none" onClick={() => setMobileOpen(!mobileOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-b-2xl py-6 z-40 flex flex-col gap-4 md:hidden animate-fadeIn">
            <Link to="/" className="px-6 py-2 text-gray-700 font-medium hover:bg-blue-50" onClick={() => setMobileOpen(false)}>
              Beranda
            </Link>
            <Link to="/artikel" className="px-6 py-2 text-gray-700 font-medium hover:bg-blue-50" onClick={() => setMobileOpen(false)}>
              Artikel
            </Link>
            <Link to="/video" className="px-6 py-2 text-gray-700 font-medium hover:bg-blue-50" onClick={() => setMobileOpen(false)}>
              Video
            </Link>
            <Link to="/tentang" className="px-6 py-2 text-gray-700 font-medium hover:bg-blue-50" onClick={() => setMobileOpen(false)}>
              Tentang
            </Link>
            <Link to="/uji-kesiapan" className="px-6 py-2 text-gray-700 font-medium hover:bg-blue-50" onClick={() => setMobileOpen(false)}>
              Tes Kesiapan
            </Link>
            <Link to="/konsultasi" className="px-6 py-2 text-gray-700 font-medium hover:bg-blue-50" onClick={() => setMobileOpen(false)}>
              Konsultasi
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
