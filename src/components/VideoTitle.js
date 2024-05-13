import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-52 absolute w-screen aspect-video bg-gradient-to-r from-black">
      <h1 className="text-white text-4xl w-1/4 font-extrabold pl-12">
        {title}
      </h1>
      <p className=" text-white w-1/4 pl-12 py-5">{overview} </p>
      <div className="flex px-12 gap-x-3">
        <button className="bg-white text-black py-3 px-5 rounded-md font-bold bg-opacity-50">
          Play
        </button>
        <button className="bg-gray-400 text-white py-2 px-5 rounded-md font-bold bg-opacity-50">
          {" "}
          <span className="font-semibold text-lg">ⓘ</span> More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
