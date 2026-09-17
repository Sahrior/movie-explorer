import MovieCard from "./MovieCard";

function MovieGrid({ movies, onDetails }) {
  if (movies.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-white/10 py-24 text-center">
        <p className="text-lg font-semibold text-zinc-300">
          No shows found
        </p>

        <p className="mt-2 text-sm text-zinc-600">
          Try searching for another title.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onDetails={onDetails}
        />
      ))}
    </div>
  );
}

export default MovieGrid;