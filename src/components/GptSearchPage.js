import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import { backgroundIMG } from "../utils/constants";

const GptSearchPage = () => {
  return (
    <div>
      <div className="absolute -z-20   ">
        <img
          src={backgroundIMG}
          className="object-contain bg-gradient-to-t from-gray-950 "
          alt="bg-image"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearchPage;
