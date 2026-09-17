import { Search, X } from "lucide-react";

function SearchBar({ value, onChange }) {
  return (
    <div className="relative">

      <Search
        size={20}
        className="absolute left-5 top-1/2 -translate-y-1/2 text-zinc-500"
      />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for a show..."
        className="w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 pl-14 pr-12 text-white outline-none backdrop-blur transition-all duration-300 placeholder:text-zinc-600 focus:border-white/25 focus:bg-white/[0.06]"
      />

      {value && (
        <button
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 rounded-lg p-1.5 text-zinc-500 transition hover:bg-white/10 hover:text-white"
        >
          <X size={17} />
        </button>
      )}

    </div>
  );
}

export default SearchBar;