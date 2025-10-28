import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { tours } from "../data/tours";
import Banner from "../components/Banner";
import "./TourDetails.css";

const tourBenefits = [
  "Licencirani vodič i stručno vodstvo",
  "Smještaj i hrana (ovisno o paketu)",
  "Organizirana prijava (uključena u cijenu)",
  "Osiguranje od nezgode",
];

export default function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const tourId = parseInt(id);
  const tour = tours.find((t) => t.id === tourId);

  if (!tour) {
    return (
      <div className="page-content not-found-page">
        <Banner title="Greška" image={null} />
        <h1>Izlet nije pronađen 😔</h1>
        <p>Traženi izlet s ID-om #{id} ne postoji.</p>
        <button onClick={() => navigate("/tours")} className="btn">
          ← Natrag na Izlete
        </button>
      </div>
    );
  }

  const handleReservation = () => {
    alert(
      "Rezervacija poslana! Hvala Vam na interesu, kontaktirat ćemo Vas uskoro."
    );
  };

  return (
    <div className="tour-details-page">
      <div className="page-content">
        <button onClick={() => navigate(-1)} className="btn btn-back">
          ← Natrag
        </button>

        <h1 className="tour-title-large">{tour.title}</h1>

        <div className="tour-image-main-wrapper">
          <img
            src={tour.imageLarge}
            alt={tour.title}
            className="tour-image-main"
          />
        </div>

        <div className="tour-meta-pills">
          <span className="pill category-pill">{tour.category}</span>
          <span className="pill destination-pill">{tour.destination}</span>
          <span className="pill duration-pill">{tour.duration}</span>
        </div>

        <p className="price-display">
          Cijena: <span className="price">{tour.price} €</span>
        </p>

        <p className="tour-long-description">{tour.longDescription}</p>

        <section className="tour-benefits">
          <h2>Što je uključeno</h2>
          <ul className="benefits-list">
            {tourBenefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </section>

        <section className="tour-dates">
          <h2>Termini</h2>
          <table>
            <thead>
              <tr>
                <th>Datum</th>
                <th>Cijena</th>
              </tr>
            </thead>
            <tbody>
              {tour.dates.map((dateRange, index) => (
                <tr key={index}>
                  <td>{dateRange}</td>
                  <td>{tour.price} €</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
        <div className="sticky-cta-wrapper">
          <button onClick={handleReservation} className="btn btn-cta-reserve">
            Rezerviraj
          </button>
        </div>
      </div>
    </div>
  );
}
