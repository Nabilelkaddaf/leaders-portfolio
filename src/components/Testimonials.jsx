export default function Testimonials() {
  const testimonials = [
    {
      name: "Michael Carter",
      role: "CEO • ZEUS",
      text: "LEADERS completely transformed our brand identity and online presence."
    },
    {
      name: "Sarah Wilson",
      role: "Founder • ZANKA",
      text: "The website and advertising campaign exceeded all our expectations."
    }
  ];

  return (
    <section className="bg-zinc-950 border-y border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-28">

        <div className="mb-16">
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl lg:text-6xl font-black">
            What Clients Say
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-black border border-white/10 rounded-3xl p-8"
            >
              <p className="text-zinc-300 text-lg leading-relaxed">
                "{item.text}"
              </p>

              <div className="mt-8">
                <h4 className="font-bold text-xl">
                  {item.name}
                </h4>

                <p className="text-zinc-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}