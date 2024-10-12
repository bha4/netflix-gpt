import React from "react";

const VideoTitle = ({ title, overview, rating }) => {
  return (
    <div className="pt-[23%] p-20 absolute bg-gradient-to-r from-black text-white w-screen aspect-video">
      <h1 className="text-5xl font-sans pb-6">{title}</h1>
      <h4 className="w-1/2 text-xl pb-3">{overview}</h4>
      <h4 className="pb-3">{Math.round(rating)}⭐</h4>

      <div>
        <button className=" px-5 py-1 mt-3 rounded-lg bg-red-700 font-bold hover:bg-white hover:text-red-700">
          ▶ PLAY
        </button>
        <button className=" px-5 py-1 mt-3 ml-10 rounded-lg bg-red-700 font-bold hover:bg-white hover:text-red-700">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
