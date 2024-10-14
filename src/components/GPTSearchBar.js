import React, { useRef } from "react";
import lang from "../utils/language";
import { useDispatch, useSelector } from "react-redux";
import { model } from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import {addGptMovieResults} from "../utils/GPTSlice"

const GptSearchBar = () => {
  const text = useRef();
  const Language = useSelector((store) => store.lang.lang) ;
  const dispatch = useDispatch()
  const fetchMovie = async (Movies) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        Movies +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
     return json.results;
  };
  const gptSearchHandler = async () => {
    const prompt =
      "Act as a movie Recommendation system and suggest some movies for the querry" +
      text.current.value +
      "only give me the name of top 5 movies, comma seperated like the example result given ahead. Eample result: Bhasha, Billa, Mangatha, Jailer, Gilli ";
    const result = await model.generateContent([prompt]);
    const Movies =result.response.text().split(",");    
    const data = Movies.map(movie=>fetchMovie(movie));
    const tmdbResult = await Promise.all(data);
    dispatch(addGptMovieResults({movieNames: Movies,movieResults : tmdbResult}));
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen absolute">
      <form
        className="flex items-center space-x-4 w-3/4 max-w-xl -mt-[20%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={text}
          type="text"
          placeholder={
            lang[Language]?.gptSearchPlaceholder || "What's in your mind!!"
          }
          className="flex-grow py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button
          onClick={gptSearchHandler}
          className="py-3 px-6 bg-red-700 text-white rounded-lg hover:bg-white hover:text-red-700 font-bold"
        >
          {lang[Language]?.search || "Search"}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
