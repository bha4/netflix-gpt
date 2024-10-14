import React from "react";
import { CDN_IMG_URL } from "../utils/constants";

const MovieCard = ({ posterPath }) => {
  if(!posterPath) return null;
  return (
    <div className="w-48 flex-shrink-0 transition-transform transform hover:scale-105">
      <img
        src={`${CDN_IMG_URL}${posterPath}`}
        alt="Movie Poster"
        className="w-full h-auto rounded-lg shadow-lg border-2 border-transparent  transition-colors duration-300"      />
    </div>
  );
};

export default MovieCard;
