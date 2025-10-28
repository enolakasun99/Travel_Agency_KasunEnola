import React, { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import Banner from "../components/Banner";
import TourCard from "../components/TourCard";
import { tours } from "../data/tours";
import "./Tours.css";
import image4 from "../assets/image4.jpg";

const allCategories = ["Sve", ...new Set(tours.map((t) => t.category))];
const sortOptions = [
  { value: "default", label: "Poredak (Default)" },
  { value: "price_asc", label: "Cijena: Najniža" },
  { value: "price_desc", label: "Cijena: Najviša" },
  { value: "title_asc", label: "Naziv: A-Z" },
];

export default function Tours() {
  const [searchParams] = useSearchParams();

  const initialCategory = searchParams.get("category") || "Sve";
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [sortBy, setSortBy] = useState("default");

  const filteredAndSortedTours = useMemo(() => {
    let currentTours = [...tours];

    if (selectedCategory !== "Sve") {
      currentTours = currentTours.filter(
        (tour) => tour.category === selectedCategory
      );
    }

    if (searchTerm) {
      const lowerCaseSearch = searchTerm.toLowerCase();
      currentTours = currentTours.filter(
        (tour) =>
          tour.title.toLowerCase().includes(lowerCaseSearch) ||
          tour.destination.toLowerCase().includes(lowerCaseSearch)
      );
    }

    if (sortBy !== "default") {
      currentTours.sort((a, b) => {
        switch (sortBy) {
          case "price_asc":
            return a.price - b.price;
          case "price_desc":
            return b.price - a.price;
          case "title_asc":
            return a.title.localeCompare(b.title);
          default:
            return 0;
        }
      });
    }

    return currentTours;
  }, [searchTerm, selectedCategory, sortBy]);

  useEffect(() => {
    const urlCategory = searchParams.get("category");
    if (urlCategory) {
      setSelectedCategory(urlCategory);
    }
  }, [searchParams]);

  return (
    <div className="tours-page">
      <Banner title="Izleti" image={image4} />

      <div className="page-content">
        <h2>Izleti</h2>

        {/* Pretraga, Filtriranje, Sortiranje */}
        <div className="tours-controls">
          <input
            type="text"
            placeholder="Pretraži po nazivu ili destinaciji..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />

          <div className="filters-and-sort">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              {allCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Sortiranje */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* LISTA IZLETA */}
        <div className="grid tour-listing">
          {filteredAndSortedTours.length > 0 ? (
            filteredAndSortedTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))
          ) : (
            <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>
              Nema pronađenih izleta za odabrane kriterije.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
