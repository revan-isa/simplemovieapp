import React from "react";
import { useState } from "react";
import MovieList from "./MovieList";

// f2ec205

const API_URL = "http://www.omdbapi.com/?apikey=f2ec205";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchMovies(searchTerm);
    }
  };

  return (
    <div className="container">
      <h1 className="text-muted fw-bold text-center ">Movie App 2</h1>
      <div className="row align-items-center justify-content-center">
        <input
          className="form-control my-5 w-50 shadow"
          type="text"
          placeholder="Search for movies and press Enter key"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyPress}
        />
      </div>
      <div className="row row-cols-4 justify-content-center">
        {movies?.length > 0 ? (
          movies.map((movie) => {
            return <MovieList movie1={movie} key={movie.imdbID} />;
          })
        ) : (
          <div
            className="text-center"
            style={{
              backgroundColor: "red",
              color: "#fff",
              fontSize: "1.5rem",
              padding: "5px",
              marginTop: "1rem",
            }}
          >
            Movie <u>Not Found</u> or You Haven't Searched Anything Yet!
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
