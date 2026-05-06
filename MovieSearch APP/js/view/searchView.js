//svaki view radi sa storage-om, html, css

class searchView {
  submitBTN = document.querySelector(".search-btn");
  eventHandler(handler) {
    this.submitBTN.addEventListener("click", function (e) {
      e.preventDefault();
      const inputValue = document.querySelector("input").value.toLowerCase();

      handler(inputValue);
    });
  }
}

export default new searchView();
