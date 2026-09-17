import { SlidersHorizontal, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";

import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";
import SearchBar from "../components/SearchBar";

const movies = [
  {
    id: 1,
    title: "Midnight",
    year: 2024,
    rating: 8.9,
    genre: "Drama",
    type: "Featured",
    gradient: "from-indigo-500 via-purple-700 to-zinc-950",
    description:
      "A mysterious story unfolds after midnight when a quiet city begins revealing secrets that were never meant to be discovered.",
  },
  {
    id: 2,
    title: "Afterlight",
    year: 2023,
    rating: 8.7,
    genre: "Sci-Fi",
    type: "Trending",
    gradient: "from-rose-500 via-orange-600 to-zinc-950",
    description:
      "After an unexplained event changes the world, a group of survivors searches for answers while the last light slowly disappears.",
  },
  {
    id: 3,
    title: "Horizon",
    year: 2025,
    rating: 9.1,
    genre: "Adventure",
    type: "Popular",
    gradient: "from-cyan-400 via-blue-700 to-zinc-950",
    description:
      "A young explorer crosses an unknown frontier and discovers a place that challenges everything humanity thought it knew.",
  },
  {
    id: 4,
    title: "Echo",
    year: 2022,
    rating: 8.3,
    genre: "Mystery",
    type: "Editor's Pick",
    gradient: "from-emerald-400 via-teal-700 to-zinc-950",
    description:
      "A strange voice appears on an old recording, leading a detective into a mystery that connects the present to a forgotten past.",
  },
  {
    id: 5,
    title: "The Last Signal",
    year: 2021,
    rating: 8.6,
    genre: "Thriller",
    type: "Popular",
    gradient: "from-red-500 via-red-900 to-zinc-950",
    description:
      "A final transmission arrives from a location believed to be abandoned, forcing a team to uncover what happened there.",
  },
  {
    id: 6,
    title: "Parallel",
    year: 2024,
    rating: 8.5,
    genre: "Sci-Fi",
    type: "New",
    gradient: "from-violet-400 via-fuchsia-700 to-zinc-950",
    description:
      "Two versions of the same world begin colliding, leaving one scientist with only a few hours to stop an impossible chain reaction.",
  },
  {
    id: 7,
    title: "Wildbound",
    year: 2023,
    rating: 8.1,
    genre: "Adventure",
    type: "Featured",
    gradient: "from-lime-400 via-green-700 to-zinc-950",
    description:
      "Lost deep in an untouched wilderness, a group of friends must rely on one another to make their way home.",
  },
  {
    id: 8,
    title: "Nocturne",
    year: 2025,
    rating: 9.0,
    genre: "Mystery",
    type: "Trending",
    gradient: "from-slate-400 via-slate-800 to-black",
    description:
      "Every night, the same impossible event occurs. One journalist becomes determined to discover why.",
  },
];

function Movies() {
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="min-h-screen bg-zinc-950 px-5 pb-20 pt-32 lg:px-8">

      <div className="mx-auto max-w-7xl">

        <div className="mb-12">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-400">
            <Sparkles size={14} />
            Explore collection
          </div>

          <h1 className="text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Find your next
            <span className="text-zinc-600"> obsession.</span>
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg">
            Search through our collection and discover stories worth
            adding to your watchlist.
          </p>

        </div>

        <div className="mb-10 flex flex-col gap-4 sm:flex-row">

          <div className="flex-1">
            <SearchBar
              value={search}
              onChange={setSearch}
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 text-sm font-medium text-zinc-400 transition hover:bg-white/[0.08] hover:text-white">
            <SlidersHorizontal size={18} />
            Filters
          </button>

        </div>

        <div className="mb-6 flex items-center justify-between">

          <p className="text-sm text-zinc-500">
            Showing{" "}
            <span className="font-semibold text-zinc-300">
              {filteredMovies.length}
            </span>{" "}
            shows
          </p>

          {search && (
            <button
              onClick={() => setSearch("")}
              className="text-sm text-zinc-500 transition hover:text-white"
            >
              Clear search
            </button>
          )}

        </div>

        <MovieGrid
          movies={filteredMovies}
          onDetails={setSelectedMovie}
        />

      </div>

      <MovieModal
        movie={selectedMovie}
        onClose={() => setSelectedMovie(null)}
      />

    </div>
  );
}

export default Movies;