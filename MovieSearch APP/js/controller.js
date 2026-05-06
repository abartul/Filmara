//kontroliras view i model, ovdje odlucujes sta i kako
import trailerView from "./view/trailerView.js";
import searchView from "./view/searchView.js";
import * as model from "./model.js";
import mainView from "./view/view.js";

async function controlMovies() {
  try {
    mainView.cleanDOM(mainView.popularMoviesContainer);
    // 1.) fetch popular movies
    await model.loadPopularMovies();
    // 2.) render popular movies
    model.renderMovies(model.state.popularMovies, mainView.renderMovie);
    // 3.)
  } catch (err) {
    mainView.errorMessage(err);
  }
}

async function controlSearchedMovies(query) {
  try {
    mainView.cleanDOM(mainView.popularMoviesContainer);
    await model.searchMovies(query);

    model.renderMovies(model.state.searchedMovies, mainView.renderMovie);
  } catch (err) {
    mainView.errorMessage(err);
  }
}

async function controlTrailers(movieID) {
  try {
    // 1.) get trailer
    await model.getTrailers(movieID);
    // 2.)
    trailerView.renderTrailer(model.state.officialTrailerID);
  } catch (err) {
    mainView.errorMessage(err);
  }
}

const init = function () {
  searchView.eventHandler(controlSearchedMovies);
  mainView.logoEventHandler(controlMovies);
  trailerView.eventHandler(controlTrailers);
  trailerView.closePopUP();
};

controlMovies();
init();
