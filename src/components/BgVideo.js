import React from "react";

import useMovieTrailer from "../hooks/useMovieTrailer";
import { useSelector } from "react-redux";

const BgVideo = ({ id }) => {
  const trailerVideos = useSelector((store) => store.movies?.trailerVideos);
  useMovieTrailer(id);
  return (
    <div className="">
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideos?.key +
          "?autoplay=1&mute=1&loop=1"
        } //using trailer.key here will through an error that trailer is not defined. We can solve this issue in two diff ways -1> using state variable to store trailer key value(initially null ,then set it to trailer.key)   -2> using redux store
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default BgVideo;
