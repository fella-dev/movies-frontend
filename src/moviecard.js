import { Link } from "react-router-dom";

function MovieCard({ title, image, date, description, id }) {
  return (
    <>
      <Link to={`/movies/${id}`}>
        <div className="movie-card" key={id}>
          <img src={image} />
          <h1>{title}</h1>
          <p>{date}</p>
        </div>
      </Link>
    </>
  );
}

export default MovieCard;
