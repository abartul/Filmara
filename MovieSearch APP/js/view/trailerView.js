//svaki view radi sa storage-om, html, css

class trailerView {
  videoContainer = document.querySelector(".pop-up__video");
  closeBTN = document.querySelector(".pop-up__close");
  popUP = document.querySelector(".pop-up");
  eventHandler(handler) {
    const clickedMovie = document
      .querySelector("#popular-movies")
      .addEventListener("click", function (e) {
        const movie = e.target.closest(".movie");
        if (!movie) return;
        const movieID = movie.getAttribute("movie-id");
        handler(movieID);
      });
  }

  renderTrailer(trailerKey) {
    const markup = `
    <div class="trailer-overlay">
      <div class="trailer-popup">
        
        <iframe 
    src="https://www.youtube.com/embed/${trailerKey}?autoplay=1&fs=1"
    frameborder="0"
    allowfullscreen
    allow="autoplay; fullscreen">
  </iframe>
      </div>
    </div>
  `;
    this.popUP.style.display = "flex";
    this.videoContainer.insertAdjacentHTML("afterbegin", markup);
    this.popUP.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  closePopUP() {
    this.closeBTN.addEventListener("click", (e) => {
      this.videoContainer.innerHTML = "";
      this.popUP.classList.remove("active");
      document.body.style.overflow = "";
      this.popUP.style.display = "none";
    });
  }
}

export default new trailerView();
