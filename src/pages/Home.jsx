import {
  Compass,
  Layers3,
  Search,
  Sparkles,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";

function Home() {
  return (
    <div>

      <Hero />

      <section className="border-y border-white/10 bg-zinc-900/30">
<div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">

  <div className="max-w-2xl">
  <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-zinc-500">
              Built for explorers
            </p>

  <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
  Everything you need to
        <span className="text-zinc-500"> find your next watch.</span>
            </h2>
          </div>

<div className="mt-12 grid gap-5 md:grid-cols-3">

            <FeatureCard
 icon={<Search size={22} />}  title="Search effortlessly" description="Find shows quickly with a clean and simple discovery experience."
 />

            <FeatureCard
    icon={<Layers3 size={22} />} title="Explore collections"description="Browse through a beautiful collection of stories and characters."
            />

            <FeatureCard
              icon={<Compass size={22} />}
   title="Discover more" description="Dive into detailed information and find something unexpected."
            />

          </div>
        </div>
      </section>

      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-24 text-center lg:px-8">

          <div className="mx-auto max-w-2xl">

   <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-zinc-950">
  <Zap size={22} />
            </div>

 <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
     Ready to explore?
   </h2>

            <p className="mt-5 text-zinc-500">
   Your next great story might be just one click away.
            </p>

            <Link
 to="/movies"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 font-semibold text-zinc-950 transition-all duration-300 hover:scale-105 hover:bg-zinc-200">
              Start Exploring
              <Sparkles size={17} />
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-500 hover:-translate-y-2 hover:border-white/20 hover:bg-white/[0.06]">

      <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl bg-white text-zinc-950 transition-transform duration-500 group-hover:rotate-6">
        {icon}
      </div>

      <h3 className="text-lg font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        {description}
      </p>

    </div>
  );
}

export default Home;