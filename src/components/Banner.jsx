import React from "react";
import "./Banner.css";

export default function Banner({ title, image }) {
  const style = image ? { backgroundImage: `url(${image})` } : {};

  return (
    <div className="banner" style={style}>
      <div className="banner-overlay">
        <h1 className="banner-title">{title}</h1>
      </div>
    </div>
  );
}
