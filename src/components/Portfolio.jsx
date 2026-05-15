import { projects } from "../data/data";

export default function Portfolio() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">

      <div className="mb-16">
        <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
          Portfolio
        </p>

        <h2 className="text-4xl lg:text-6xl font-black">
          Featured Projects
        </h2>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">

        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-zinc-950 border border-white/10 rounded-3xl overflow-hidden hover:border-white/30 transition-all duration-300 group"
          >

            <div className="h-64 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center text-3xl font-black tracking-wider">
              {project.name}
            </div>

            <div className="p-8">

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500 mb-3">
                {project.category}
              </p>

              <h3 className="text-2xl font-bold mb-4">
                {project.name}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                Premium branding and digital campaign designed
                to elevate the customer experience.
              </p>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}