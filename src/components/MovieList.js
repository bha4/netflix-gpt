import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ list, title }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-none">
        <div className="flex gap-6">
          {list.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
