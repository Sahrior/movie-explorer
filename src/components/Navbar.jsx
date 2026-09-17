import { Link, NavLink } from "react-router-dom";
import { Film, Menu, Search } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `transition ${
      isActive
        ? "text-white"
        : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        <Link
          to="/"
          className="group flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-zinc-950 transition-transform duration-300 group-hover:rotate-6">
            <Film size={20} />
          </div>

          <span className="text-lg font-bold tracking-tight">
            Movie<span className="text-zinc-400">Explorer</span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/movies" className={navClass}>
            Movies
          </NavLink>
        </div>

        <div className="hidden md:block">
          <Link
            to="/movies"
            className="flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-zinc-200"
          >
            <Search size={16} />
            Explore
          </Link>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-zinc-300 transition hover:bg-white/10 md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      {menuOpen && (
        <div className="border-t border-white/10 bg-zinc-950 px-5 py-5 md:hidden">
          <div className="flex flex-col gap-5">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className={navClass}
            >
              Movies
            </NavLink>

            <Link
              to="/movies"
              onClick={() => setMenuOpen(false)}
              className="flex items-center justify-center gap-2 rounded-full bg-white px-5 py-3 font-semibold text-zinc-950"
            >
              <Search size={17} />
              Explore Movies
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;