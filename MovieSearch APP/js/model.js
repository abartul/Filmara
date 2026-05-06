//fetch, prikuplja podatke
import {
  API_URL,
  options,
  IMG_BASE,
  SEARCH_URL,
  TRAILER_URL,
  YOUTUBE_BASE,
} from "./config.js";

export const state = {
  popularMovies: {},
  searchedMovies: {},
  officialTrailerID: "",
};
///Getting popular movies
export const loadPopularMovies = async function () {
  try {
    const res = await fetch(API_URL, options);
    if (!res.ok) throw new Error("There is no movies to be found!");
    const data = await res.json();
    state.popularMovies = data.results;
  } catch (err) {
    throw err;
  }
};

//render popular movies

export const renderMovies = function (movies, handler) {
  movies.forEach((movie) => handler(movie));
};

//search movies

export const searchMovies = async function (query) {
  try {
    const res = await fetch(`${SEARCH_URL}${query}`, options);
    if (!res.ok) throw new Error("No movie was found!!");
    const data = await res.json();
    state.searchedMovies = data.results;
    console.log(data);
  } catch (err) {
    throw err;
  }
};

//fetch official trailer ID

export const getTrailers = async function (trailerID) {
  try {
    const res = await fetch(`${TRAILER_URL}${trailerID}/videos`, options);
    if (!res.ok) throw new Error("This movie doesn't have a trailer!!");
    const data = await res.json();

    const trailer = data.results.find(
      (video) => video.type === "Trailer" && video.site === "YouTube",
    );
    state.officialTrailerID = trailer.key;
  } catch (err) {
    throw err;
  }
};
