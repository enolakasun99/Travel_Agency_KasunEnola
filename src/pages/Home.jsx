import React from "react";
import { Link } from "react-router-dom";
import TourCard from "../components/TourCard";
import Banner from '../components/Banner';
import { tours } from "../data/tours";
import image1 from "../assets/image1.jpg";
import "./Home.css";

export default function Home() {
  const featuredTours = tours.slice(0, 3);

  return (
    <div className="home-page">
      <Banner
        title="Naslovnica"
        image={image1} 
      />

      <div className="container home-content-wrapper">
        <section className="welcome-section" style={{ marginBottom: "40px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "bold" }}>
            Dobrodošli u Travel Agency
          </h2>
          <p style={{ marginBottom: "15px" }}>
            Najbolja ponuda izleta i avantura!
          </p>
          <div className="hero-actions">
            <Link to="/tours" className="btn hero-cta">
              Pogledaj izlete
            </Link>
            <Link to="/contact" className="btn btn-secondary">
              Kontaktiraj nas
            </Link>
          </div>
        </section>

        <section className="featured-tours-section">
          <h2>Izdvojeni izleti</h2>
          <div className="grid">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
        </section>

        <hr style={{ margin: "40px 0" }} />

        <section className="why-travel-section">
          <h2>Zašto putovati s nama?</h2>
          <div className="grid">
            <div className="reason-card">
              <h3>🗺️ Sigurnost i Pouzdanost</h3>
              <p className="muted">
                Organiziramo sigurna i nezaboravna putovanja od 2005. godine.
              </p>
            </div>
            <div className="reason-card">
              <h3>💰 Pristupačne Cijene</h3>
              <p className="muted">
                Najbolji omjer cijene i kvalitete za sve naše destinacije.
              </p>
            </div>
            <div className="reason-card">
              <h3>⛰️ Autentična Iskustva</h3>
              <p className="muted">
                Male grupe i lokalni vodiči osiguravaju pravo, autentično
                iskustvo.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
