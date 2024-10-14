import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    movieNames: null,
    movieResults:null,
  },
  reducers: {
    toggeleGPT: (state, action) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const {toggeleGPT, addGptMovieResults} = GPTSlice.actions;

export default GPTSlice.reducer;