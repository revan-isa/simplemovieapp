import React from "react";

const MovieList = ({ movie1 }) => {
  return (
    <div>
      <p
        style={{
          width: "10rem",
          fontSize: "1.3em",
          fontWeight: "bold",
          wordWrap: "break-word",
        }}
      >
        {movie1.Title}
      </p>
      <img
        style={{ width: "200px" }}
        src={
          movie1.Poster !== "N/A"
            ? movie1.Poster
            : "https://via.placeholder.com/400"
        }
        alt=""
      />{" "}
      <br />
      <span>{movie1.Year}</span>
    </div>
  );
};

export default MovieList;
