import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ category, movies }) => {
  return (
    <div className="p-6 bg-black">
      <h1 className="font-medium text-white pb-5"> {category} </h1>
      <div className=" flex overflow-hidden gap-x-5">
        {movies?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
