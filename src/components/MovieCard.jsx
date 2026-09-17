import { CalendarDays, Star } from "lucide-react";

function MovieCard({ movie, onSelect }) {
  const year = movie.premiered? new Date(movie.premiered).getFullYear(): "N/A";

  const rating = movie.rating?.average? movie.rating.average: "N/A";

  const genre = movie.genres?.length? movie.genres[0]: "Unknown";

  return (
<article className="group overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:border-green-400/30 hover:shadow-2xl hover:shadow-green-950/30">

      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-800">

        {movie.image?.medium ? (
          <img
            src={movie.image.medium}
            alt={movie.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
) : (
<div className="flex h-full items-center justify-center bg-zinc-800">
<span className="text-sm text-zinc-500">
No Image
</span>
</div>
)}
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
<div className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {genre}
        </div>

        {movie.rating?.average && (
          <div className="absolute right-3 top-3 flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            <Star
              size={13}
              className="fill-yellow-400 text-yellow-400"
            />
            {rating}
          </div>
        )}
      </div>

      <div className="p-4">

        <h2 className="truncate text-lg font-semibold text-white">
          {movie.name}
        </h2>

        <div className="mt-2 flex items-center gap-2 text-sm text-zinc-500">
          <CalendarDays size={14} />
          <span>{year}</span>
        </div>

        <button
          onClick={() => onSelect(movie)}
          className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-medium text-white transition hover:border-green-400/30 hover:bg-green-400/10 hover:text-green-300"
        >
          See Details
        </button>

      </div>
    </article>
  );
}

export default MovieCard;

