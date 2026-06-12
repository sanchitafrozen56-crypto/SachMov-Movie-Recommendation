const API_KEY = "your_tmdb_api_key";
const moviesContainer = document.getElementById("movies");
const searchInput = document.getElementById("search");

async function getPopularMovies() {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
    );

    const data = await response.json();
    showMovies(data.results);
  } catch (error) {
    console.log("Error:", error);
    moviesContainer.innerHTML =
      "<h2>Movies load nahi ho pa rahi hain.</h2>";
  }
}

function showMovies(movies) {
  moviesContainer.innerHTML = "";

  movies.forEach((movie) => {
    const poster = movie.poster_path
      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
      : "https://via.placeholder.com/500x750?text=No+Image";

    const movieCard = document.createElement("div");
    
    movieCard.classList.add("card");
movieCard.innerHTML = `
  <img src="${poster}" alt="${movie.title}">
  <h3>${movie.title}</h3>
  <p>⭐ ${movie.vote_average}</p>

  <a
    target="_blank"
    href="https://www.youtube.com/results?search_query=${movie.title}+official+trailer"
    style="
      display:block;
      background:#E50914;
      color:white;
      text-align:center;
      padding:10px;
      margin:10px;
      text-decoration:none;
      border-radius:5px;
    ">
    🎥 Watch Trailer
  </a>
`;

    moviesContainer.appendChild(movieCard);
  });
}

async function searchMovies(query) {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
    );

    const data = await response.json();
    showMovies(data.results);
  } catch (error) {
    console.log(error);
  }
}

searchInput.addEventListener("keyup", () => {
  const query = searchInput.value.trim();

  if (query.length > 0) {
    searchMovies(query);
  } else {
    getPopularMovies();
  }
});

getPopularMovies();
window.onload = function () {
  window.onload = function () {

  let audio = new Audio("netflix.mp3");

  audio.play();

  let speech = new SpeechSynthesisUtterance(
    "Welcome to SachMov"
  );

  speechSynthesis.speak(speech);

};

  let speech = new SpeechSynthesisUtterance(
    "Welcome to SachMov. Enjoy your movie experience."
  );

  speech.volume = 1;
  speech.rate = 0.9;
  speech.pitch = 1;

  speechSynthesis.speak(speech);

};