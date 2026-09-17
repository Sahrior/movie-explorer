import { ArrowRight, Play, Sparkles, Star } from "lucide-react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-zinc-950 pt-24">

      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] max-w-7xl items-center px-5 py-20 lg:px-8">

        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          <div className="max-w-2xl">

            <div className="mb-6 inline-flex animate-pulse items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
              <Sparkles size={15} />
              Your next favorite story awaits
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              Discover
              <br />

              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-600 bg-clip-text text-transparent">
                something
              </span>

              <br />

              worth watching.
            </h1>

            <p className="mt-7 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
              Explore a world of unforgettable stories, iconic characters,
              and shows waiting to become your next obsession.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">

              <Link
                to="/movies"
                className="group flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
              >
                Explore Movies
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                to="/movies"
                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:bg-white/10"
              >
                <Play size={17} />
                Browse Collection
              </Link>

            </div>

            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-7">

              <div>
                <p className="text-2xl font-bold">10K+</p>
                <p className="text-xs text-zinc-500">Stories</p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="flex items-center gap-1 text-2xl font-bold">
                  4.8
                  <Star size={18} fill="currentColor" />
                </p>
                <p className="text-xs text-zinc-500">Average rating</p>
              </div>

              <div className="h-8 w-px bg-white/10" />

              <div>
                <p className="text-2xl font-bold">∞</p>
                <p className="text-xs text-zinc-500">Possibilities</p>
              </div>

            </div>
          </div>

          <div className="relative mx-auto hidden h-[520px] w-full max-w-md lg:block">

            <div className="absolute left-10 top-10 h-80 w-52 -rotate-12 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500 via-purple-700 to-zinc-950 shadow-2xl transition-transform duration-700 hover:-rotate-6">
              <div className="flex h-full flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  FEATURED
                </p>
                <h3 className="mt-2 text-2xl font-bold">
                  Midnight
                </h3>
              </div>
            </div>

            <div className="absolute right-6 top-24 h-96 w-60 rotate-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-rose-500 via-orange-600 to-zinc-950 shadow-2xl transition-transform duration-700 hover:rotate-3">
              <div className="flex h-full flex-col justify-end bg-gradient-to-t from-black via-black/20 to-transparent p-6">
                <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                  TRENDING
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  Afterlight
                </h3>
                <div className="mt-3 flex items-center gap-1 text-sm">
                  <Star size={14} fill="currentColor" />
                  8.9
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-16 h-48 w-40 rotate-6 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-400 via-blue-700 to-zinc-950 shadow-2xl transition-transform duration-700 hover:rotate-12">
              <div className="flex h-full flex-col justify-end bg-gradient-to-t from-black to-transparent p-5">
                <h3 className="text-xl font-bold">
                  Horizon
                </h3>
              </div>
            </div>

            <div className="absolute bottom-16 right-0 flex animate-bounce items-center gap-2 rounded-full border border-white/10 bg-zinc-900/90 px-4 py-2 text-sm text-zinc-300 shadow-xl backdrop-blur">
              <Sparkles size={15} />
              Discover more
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;