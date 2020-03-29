import React, { useState, useContext } from "react";
import { AppContext } from "../components/AppContext";

function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);

  const { toggleFavorite } = useContext(AppContext);

  const heartIcon = hovered && (
    <i
      className="ri-heart-line favorite"
      onClick={() => toggleFavorite(img.id)}
    ></i>
  );
  const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>;

  return (
    <div
      className={`${className} image-container`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {heartIcon}
      {cartIcon}
      <img src={img.url} className="image-grid" />
    </div>
  );
}

export default Image;
