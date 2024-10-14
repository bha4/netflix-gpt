import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./movieSlice";
import GPTReducer from "./GPTSlice";
import langReducer from "./configSlice"
const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: GPTReducer,
    lang: langReducer
  },
});
export default appStore;
