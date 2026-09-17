import { CalendarDays, Star } from "lucide-react";

function MovieCard({ movie, onDetails }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]">

      <div className="relative aspect-[2/3] overflow-hidden">

        <div
          className={`absolute inset-0 bg-gradient-to-br ${movie.gradient}`}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />

        <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur">
          {movie.genre}
        </div>

        <div className="absolute bottom-5 left-5 right-5">

          <p className="text-xs uppercase tracking-widest text-white/50">
            {movie.type}
          </p>

          <h3 className="mt-1 text-2xl font-bold text-white">
            {movie.title}
          </h3>

        </div>

      </div>

      <div className="p-5">

        <div className="flex items-center justify-between text-sm">

          <div className="flex items-center gap-1.5 text-zinc-300">
            <Star
              size={16}
              fill="currentColor"
            />
            {movie.rating}
          </div>

          <div className="flex items-center gap-1.5 text-zinc-500">
            <CalendarDays size={15} />
            {movie.year}
          </div>

        </div>

        <button
          onClick={() => onDetails(movie)}
          className="mt-5 w-full rounded-xl border border-white/10 bg-white/5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-white hover:text-zinc-950"
        >
          See Details
        </button>

      </div>

    </article>
  );
}

export default MovieCard;