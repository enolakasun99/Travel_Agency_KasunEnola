import React from "react";
import "./Accordion.css";

export default function Accordion({
  id,
  question,
  answer,
  activeId,
  onToggle,
}) {
  const isExpanded = id === activeId;

  const handleClick = () => {
    onToggle(isExpanded ? null : id);
  };

  return (
    <div className={`accordion-item ${isExpanded ? "is-open" : ""}`}>
      <button
        className="accordion-header"
        onClick={handleClick}
        aria-expanded={isExpanded}
      >
        <span className="accordion-question">{question}</span>
        <span className="accordion-icon">{isExpanded ? "−" : "+"}</span>
      </button>

      {isExpanded && (
        <div className="accordion-content">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}
