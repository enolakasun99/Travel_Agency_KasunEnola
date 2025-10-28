import React from "react";
import { Routes, Route } from "react-router-dom";
// Komponente
import Header from "./components/Header";
import Footer from "./components/Footer";

// Stranice
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Categories from "./pages/Categories";
import Tours from "./pages/Tours";
import TourDetails from "./pages/TourDetails";
import FAQ from "./pages/FAQ";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:id" element={<TourDetails />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<h1>404 | Stranica nije pronađena</h1>} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
