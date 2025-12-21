import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Artikel from "./pages/Artikel.jsx";
import ArtikelDetail from "./pages/ArtikelDetail.jsx";
import Video from "./pages/Video.jsx";
import VideoDetail from "./pages/VideoDetail.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import UjiKesiapan from "./pages/UjiKesiapan.jsx";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artikel" element={<Artikel />} />
          <Route path="/artikel/:slug" element={<ArtikelDetail />} />
          <Route path="/video" element={<Video />} />
          <Route path="/video/:slug" element={<VideoDetail />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/uji-kesiapan" element={<UjiKesiapan />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
