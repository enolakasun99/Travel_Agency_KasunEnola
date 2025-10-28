import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "../components/Banner";
import image4 from "../assets/image4.jpg";
import "./Categories.css";

const categories = [
  {
    name: "Hiking",
    description: "Istražite planinske staze i netaknutu prirodu.",
  },
  {
    name: "Sailing",
    description: "Otkrijte skrivene uvale i plovite Jadranom.",
  },
  {
    name: "Ferrata",
    description: "Doživite adrenalinske uspone i vertikalne rute.",
  },
  {
    name: "Exotic",
    description: "Daleke destinacije i jedinstvena kulturna iskustva.",
  },
  {
    name: "City Tours",
    description: "Istražite povijesne gradove uz lokalne vodiče.",
  },
];

export default function Categories() {
  const navigate = useNavigate();

  const handleCategoryClick = (categoryName) => {
    navigate(`/tours?category=${categoryName}`);
  };

  return (
    <div className="categories-page">
      <Banner title="Kategorije" image={image4} />

      <div className="container page-content">
        <h2>Kategorije izleta</h2>
        <div className="grid category-grid">
          {categories.map((category) => (
            <div
              key={category.name}
              className="category-card card"
              onClick={() => handleCategoryClick(category.name)}
            >
              <div className="card-body category-content-wrapper">
                <div className="category-header-placeholder">
                  <h3 className="category-title-large">{category.name}</h3>
                </div>

                <div className="category-details">
                  <h3 className="category-title-small">{category.name}</h3>
                  <p className="muted">{category.description}</p>
                  <button
                    className="btn btn-small"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category.name);
                    }}
                  >
                    Otvori
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
