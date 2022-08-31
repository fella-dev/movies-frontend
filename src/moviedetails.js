import { useParams } from "react-router-dom";
import { MoviesContext } from "./moviescontext";
import { useContext, useEffect, useState } from "react";
import { API_URL } from "./config";

function MovieDetails() {
  const { movieId } = useParams();
  const [loading, setloading] = useState(true);
  const { movies, setMovies } = useContext(MoviesContext);
  const [movie, setMovie] = useState({});
  useEffect(() => {
    async function details() {
      const res = await fetch(API_URL + `movies/${movieId}`);
      const bk = await res.json();
      setMovie(bk);
      setloading(false);
    }
    details();
  }, [movieId]);
  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <img src={movie.image} />
      <h1>{movie.title}</h1>

      <p>{movie.description}</p>
    </>
  );
}

export default MovieDetails;
