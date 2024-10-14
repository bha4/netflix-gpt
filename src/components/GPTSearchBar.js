import React from "react";
import lang from "../utils/language"
import { useSelector } from "react-redux";

const GptSearchBar = () => {
    const Language=useSelector(store=>store.lang.lang) || "en"
    
  return (
    <div className="flex items-center justify-center h-screen w-screen absolute">
      <form className="flex items-center space-x-4 w-3/4 max-w-xl -mt-[20%]">
        <input
          type="text"
          placeholder={lang[Language]?.gptSearchPlaceholder}
          className="flex-grow py-3 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        <button className="py-3 px-6 bg-red-700 text-white rounded-lg hover:bg-white hover:text-red-700 font-bold">
          {lang[Language]?.search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
