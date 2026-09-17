import {
  CalendarDays,
  Star,
  X,
} from "lucide-react";

function MovieModal({ movie, onClose }) {
  if (!movie) {
    return null;
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md"
    >

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-3xl overflow-hidden rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl"
      >

        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/40 text-white backdrop-blur transition hover:bg-white hover:text-zinc-950"
        >
          <X size={20} />
        </button>

        <div
          className={`relative h-72 bg-gradient-to-br ${movie.gradient} sm:h-96`}
        >

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-black/20 to-transparent" />

          <div className="absolute bottom-7 left-6 right-6 sm:left-8 sm:right-8">

            <p className="text-xs uppercase tracking-[0.25em] text-white/50">
              {movie.type}
            </p>

            <h2 className="mt-2 text-4xl font-black sm:text-5xl">
              {movie.title}
            </h2>

          </div>

        </div>

        <div className="p-6 sm:p-8">

          <div className="flex flex-wrap gap-3">

            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-300">
              <Star size={15} fill="currentColor" />
              {movie.rating}
            </div>

            <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-400">
              <CalendarDays size={15} />
              {movie.year}
            </div>

            <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-zinc-400">
              {movie.genre}
            </div>

          </div>

          <div className="mt-8">

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
              Overview
            </p>

            <p className="mt-3 text-base leading-7 text-zinc-400">
              {movie.description}
            </p>

          </div>

          <button
            onClick={onClose}
            className="mt-8 w-full rounded-xl bg-white py-3.5 font-semibold text-zinc-950 transition hover:bg-zinc-200"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
}

export default MovieModal;