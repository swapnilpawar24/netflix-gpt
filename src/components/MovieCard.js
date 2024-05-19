import React from "react";
import { CDN_posterURL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  return (
    <div className="h-20">
      <img src={CDN_posterURL + posterPath} alt="Movie poster" />
    </div>
  );
};

export default MovieCard;
