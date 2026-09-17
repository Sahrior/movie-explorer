import { CalendarDays, Star, X } from "lucide-react";

function MovieModal({ movie, onClose }) {
  const year = movie.premiered? new Date(movie.premiered).getFullYear(): "N/A";

  const rating = movie.rating?.average? movie.rating.average: "N/A";

  const genres = movie.genres?.length? movie.genres.join(" • "): "Unknown";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden overflow-y-auto rounded-3xl border border-white/10 bg-zinc-950 shadow-2xl"
        onClick={(event) => event.stopPropagation()}
      >

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-zinc-300 backdrop-blur-sm transition hover:bg-white/10 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="relative h-64 overflow-hidden sm:h-80">

          {movie.image?.original ? (
            <img
              src={movie.image.original}
              alt={movie.name}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full bg-zinc-800" />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent" />

          <div className="absolute bottom-6 left-6 right-6">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-green-400">
              {movie.type || "Show"}
            </p>

            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              {movie.name}
            </h2>
          </div>
        </div>

        <div className="p-6 sm:p-8">

          <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-zinc-400">

            <div className="flex items-center gap-2">
              <Star
                size={16}
                className="fill-yellow-400 text-yellow-400"
              />
              <span className="text-white">
                {rating}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <CalendarDays size={16} />
              <span>{year}</span>
            </div>

            <span>
              {genres}
            </span>

          </div>

          <div
            className="prose prose-invert max-w-none text-zinc-400"
            dangerouslySetInnerHTML={{
              __html: movie.summary || "<p>No description available.</p>",
            }}
          />

          {movie.network?.name && (
            <div className="mt-6">
              <p className="text-xs uppercase tracking-widest text-zinc-600">
                Network
              </p>

              <p className="mt-1 text-sm text-zinc-300">
                {movie.network.name}
              </p>
            </div>
          )}

          {movie.status && (
            <div className="mt-4">
              <p className="text-xs uppercase tracking-widest text-zinc-600">
                Status
              </p>

              <p className="mt-1 text-sm capitalize text-zinc-300">
                {movie.status}
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default MovieModal;

