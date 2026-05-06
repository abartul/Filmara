//svaki view radi sa storage-om, html, css
import { IMG_BASE } from "../config.js";

class mainView {
  popularMoviesContainer = document.querySelector("#popular-movies");
  logo = document.querySelector(".logo-container");
  renderMovie(movies) {
    const popularMoviesContainer = document.querySelector("#popular-movies");

    const {
      title,
      id,
      backdrop_path: img,
      overview: desc,
      vote_average: rate,
      poster_path: backUpIMG,
    } = movies;

    const markup = `
    <div class="movie" movie-id=${id}>
      <img src="${IMG_BASE}${img === null ? backUpIMG : img}" alt="${title}" />
      <div class="movie-info">
        <h4 class="movie-info__title">${title}</h4>
        <p class="movie-info__desc">
          ${desc.slice(0, 200)}...
        </p>
        <span class="movie-info__rating">Rating: ${Math.round(rate) === 0 ? "Still not rate" : Math.round(rate)}</span>
      </div>
    </div>    
    
    
    `;
    popularMoviesContainer.innerHTML += markup;
  }

  cleanDOM(el) {
    el.innerHTML = "";
  }

  errorMessage(err) {
    const errorValue = document.querySelector(".error-txt p");
    errorValue.textContent = err;
    errorValue.style.display = "flex";
  }

  logoEventHandler(handler) {
    this.logo.addEventListener("click", function (e) {
      handler();
    });
  }
}

export default new mainView();
