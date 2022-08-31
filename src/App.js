import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./home";
import MovieDetails from "./moviedetails";
import { MoviesProvider } from "./moviescontext";
import MoviesList from "./movieslist";

function App() {
  return (
    <div>
      <MoviesProvider>
        <Routes>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="/list" element={<MoviesList></MoviesList>}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetails></MovieDetails>}
          ></Route>
        </Routes>
      </MoviesProvider>
    </div>
  );
}

export default App;
