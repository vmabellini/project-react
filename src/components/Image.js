import React from "react";

function Image({ className, src }) {
  return (
    <div className={`${className} image-container`}>
      <img src={src} className="image-grid" />
    </div>
  );
}

export default Image;
