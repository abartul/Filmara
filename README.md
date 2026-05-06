# 🎬 Filmara

A movie discovery web app built with vanilla JavaScript using MVC architecture, powered by the TMDB API.

---

## 🚀 Features

- Browse **popular movies** on load
- **Search** movies by title
- Hover over a movie card to see **description and rating**
- Click on a movie to watch the **official YouTube trailer** in a popup
- Responsive design — works on **mobile and desktop**

---

## 🛠️ Built With

- **HTML5**
- **CSS3** (CSS Variables, Grid, Animations)
- **Vanilla JavaScript** (ES6+, MVC Architecture)
- **TMDB API** — movie data and trailers
- **YouTube Embed** — trailer playback

---

## 📁 Project Structure

```
filmara/
│
├── index.html
├── style.css
│
└── js/
    ├── controller.js      # Controls flow between Model and View
    ├── model.js           # Data fetching and state management
    ├── config.js          # API URLs and configuration
    │
    └── view/
        ├── view.js        # Main view (render movies, error handling)
        ├── searchView.js  # Search input and button handler
        └── trailerView.js # Trailer popup rendering and controls
```

---

## ⚙️ Architecture — MVC

```
Model      → Fetches data from TMDB API, manages state
View       → Renders HTML, handles DOM events
Controller → Connects Model and View, controls app flow
```

---

## 🔧 Setup & Usage

1. Clone the repository
```bash
git clone https://github.com/your-username/filmara.git
cd filmara
```

2. Get a free API key at [themoviedb.org](https://www.themoviedb.org/)

3. Add your Bearer token in `config.js`
```javascript
export const options = {
  method: "GET",
  headers: {
    Authorization: "Bearer YOUR_TOKEN_HERE"
  }
};
```

4. Open `index.html` in your browser or use a local server (e.g. Live Server in VS Code)


---

## 🙏 Credits

- Movie data provided by [TMDB](https://www.themoviedb.org/)
- Trailer playback via [YouTube](https://www.youtube.com/)

---

## 📄 License

MIT License — feel free to use and modify.
