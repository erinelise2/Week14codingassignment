import "./App.css";
import data from "./MovieList";
import Movie from "./Movie";

export default function App() {
  return (
    <div>
      <h1 className="webpage-header text-center pb-4">Movie Ratings: LucasFilms</h1>
      <main>
        {data.map((movie) => (
          <Movie key={movie.id} {...movie} />
        ))}
      </main>
    </div>
  );
}