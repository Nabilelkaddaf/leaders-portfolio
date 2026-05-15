export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28">
      <div className="grid lg:grid-cols-2 gap-16 items-center">

        <div>
          <p className="uppercase tracking-[0.3em] text-zinc-500 text-sm mb-4">
            About Us
          </p>

          <h2 className="text-4xl lg:text-6xl font-black leading-tight">
            We create brands that people remember.
          </h2>
        </div>

        <div>
          <p className="text-zinc-400 text-lg leading-relaxed">
            LEADERS is a creative agency specialized in branding,
            web development, and digital advertising.
            We help ambitious companies grow through premium design,
            strategic marketing, and modern digital experiences.
          </p>
        </div>

      </div>
    </section>
  );
}