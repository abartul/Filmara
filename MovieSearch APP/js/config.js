import { API_TOKEN } from "./secretConfig.js";

export const API_URL = "https://api.themoviedb.org/3/movie/popular";
export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_TOKEN}`,
  },
};
export const IMG_BASE = "https://image.tmdb.org/t/p/w500";
export const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";
export const TRAILER_URL = "https://api.themoviedb.org/3/movie/";
export const YOUTUBE_BASE = "https://www.youtube.com/watch?v=";
