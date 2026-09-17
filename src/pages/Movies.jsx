import { useEffect, useState } from "react";

import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MovieModal from "../components/MovieModal";

import { getShows, searchShows } from "../services/tvmazeApi";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedMovie, setSelectedMovie] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadShows() {
      try {
      const data = await getShows();
      setMovies(data);
      } catch (error) {
      setError("Failed to load shows.");
      } finally {
      setLoading(false);
   }
    }

    loadShows();
  }, []);

  async function handleSearch(value) {
  setSearch(value);

 if (!value.trim()) {
  try {
  setLoading(true);
   setError("");

  const data = await getShows();
  setMovies(data);
     } catch (error) {
    setError("Failed to load shows.");
 } finally {
      setLoading(false);
    }

      return;
    }

try {
   setLoading(true);
setError("");

      const data = await searchShows(value.trim());
      setMovies(data);
    } catch (error) {
      setError("Failed to search shows.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-zinc-950 px-5 py-12 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">

  <div className="mb-10">
  <p className="mb-3 text-sm font-medium uppercase tracking-[0.25em] text-green-400">Explore</p>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Discover Your Next Show
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400">
            Browse thousands of TV shows and discover something worth watching.
          </p>
        </div>

        <div className="mb-10">
          <SearchBar
            value={search}
    onChange={handleSearch}
          />
        </div>

        {loading && (
          <div className="py-20 text-center">
            <p className="text-zinc-400">Loading shows...</p>
            
          </div>
        )}

        {error && (
          <div className="py-20 text-center">
            <p className="text-red-400">
              {error}</p>
          </div>
        )}

        {!loading && !error && (
          <MovieGrid
            movies={movies}onSelect={setSelectedMovie}
          />
        )}

        {selectedMovie && (
          <MovieModal
            movie={selectedMovie}
onClose={() => setSelectedMovie(null)}/>
        )}

      </div>
    </div>
  );
}

export default Movies;

