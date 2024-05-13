import React from "react";
import BgVideo from "./BgVideo";
import VideoTitle from "./VideoTitle";
import { useSelector } from "react-redux";

const MainMovieContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingmovies);

  if (!movies) return; //if no movies available at that instant return early

  const mainMovie = movies[0];
  console.log(mainMovie);
  const { original_title, overview, id } = mainMovie;
  return (
    <div>
      <VideoTitle title={original_title} overview={overview} />
      <BgVideo id={id} />
    </div>
  );
};

export default MainMovieContainer;
