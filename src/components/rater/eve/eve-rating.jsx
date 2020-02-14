import React, { useState } from "react";

import Star from "./Star";
//import "./eve-rating.css";

const StarRating = ({ totalStars }) => {
  const [starsSelected, selectStar] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={i < starsSelected}
          onClick={() => selectStar(i + 1)}
        />
      ))}
      <p>
        {starsSelected} of {totalStars} stars
      </p>
    </div>
  );
};

export default StarRating;
