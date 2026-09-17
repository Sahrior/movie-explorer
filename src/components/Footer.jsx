import { Film, Heart } from "lucide-react";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between lg:px-8">

        <div>
          <div className="mb-2 flex items-center gap-2">
            <Film size={18} />
            <span className="font-semibold">
              MovieExplorer
            </span>
          </div>

          <p className="text-sm text-zinc-500">
            Discover stories worth watching.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href="https://github.com/Sahrior"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            GitHub
          </a>

          <p className="flex items-center gap-1 text-xs text-zinc-600">
            © 2026 MovieExplorer
            <span>•</span>
            Made with
            <Heart size={12} />
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;