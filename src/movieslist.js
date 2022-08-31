import { useContext, useEffect, useState } from "react";
import { API_URL } from "./config";
import { Link } from "react-router-dom";

import MovieCard from "./moviecard";
import { MoviesContext } from "./moviescontext";

function MoviesList() {
  const { movies, setMovies } = useContext(MoviesContext);
  const [filterBy, setFilterby] = useState(null);
  useEffect(() => {
    async function getMovies() {
      const res = await fetch(API_URL + "movies");
      const body = await res.json();
      setMovies(body);
      console.log(body);
    }

    getMovies();
  }, []);
  let moviesDisplay;
  if (filterBy !== null) {
    moviesDisplay = movies.filter((td) => td.releaseYear == filterBy);
  } else moviesDisplay = movies;

  return (
    <>
      <h1>Movies</h1>
      <div className="filter">
        <div>
          {" "}
          <input
            type="radio"
            name="filter"
            id="all"
            value={null}
            onChange={() => setFilterby(null)}
          />{" "}
          <label for="all">All</label>
        </div>
        <div>
          <input
            type="radio"
            name="filter"
            id="2013"
            value={2013}
            onChange={() => setFilterby(2013)}
          />{" "}
          <label for="2013">2013</label>
        </div>
        <div>
          {" "}
          <input
            type="radio"
            name="filter"
            id="2020"
            value={2020}
            onChange={() => setFilterby(2020)}
          />
          <label for="2020">2020</label>
        </div>
        <div>
          {" "}
          <input
            type="radio"
            name="filter"
            id="2023"
            value={2023}
            onChange={() => setFilterby(2023)}
          />
          <label for="2023">2023</label>
        </div>
      </div>
      {filterBy == null ? (
        <div className="movies-grid">
          {movies.map((movie) => (
            <>
              <MovieCard
                id={movie._id}
                title={movie.title}
                image={movie.image}
                date={movie.releaseYear}
                description={movie.description}
              ></MovieCard>
            </>
          ))}
        </div>
      ) : (
        <div>
          {moviesDisplay.map((td) => (
            <Link to={`/movies/${td._id}`}>
              <div className="movie-card">
                <img src={td.image} />
                <h1>{td.title}</h1>
                <p>{td.date}</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default MoviesList;
