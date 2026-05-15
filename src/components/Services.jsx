import { services } from "../data/data";

export default function Services() {
  return (
    <section className="bg-zinc-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Services
          </p>

          <h2 className="text-4xl lg:text-6xl font-black">
            What We Do
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-3xl p-8 hover:border-white/30 hover:-translate-y-2 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}