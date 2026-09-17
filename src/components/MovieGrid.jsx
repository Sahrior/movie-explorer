import MovieCard from "./MovieCard";

function MovieGrid({ movies, onSelect }) {
  if (movies.length === 0) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-zinc-400">
          No shows found.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}

export default MovieGrid;

