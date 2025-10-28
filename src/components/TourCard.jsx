import React from "react";
import { Link } from "react-router-dom";
import "./TourCard.css";

export default function TourCard({ tour }) {
  const {
    id,
    title,
    category,
    destination,
    duration,
    description,
    price,
    image,
  } = tour;

  return (
    <div className="tour-card card">
      <div className="tour-image-wrapper">
        <img src={image} alt={title} className="tour-image" />
      </div>
      <div className="card-body tour-card-body">
        <h3 className="tour-title">{title}</h3>
        <p className="tour-meta">
          <span className="pill">{destination}</span>
          <span className="pill">{duration}</span>
        </p>
        <p className="tour-description muted">{description}</p>

        <div className="tour-info-footer">
          <span className="price">{price} €</span>
          <Link to={`/tours/${id}`} className="btn btn-details">
            Detalji
          </Link>
        </div>
      </div>
    </div>
  );
}
