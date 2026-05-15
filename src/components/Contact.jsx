export default function Contact() {
  return (
    <section className="bg-black px-6 py-28">

      <div className="max-w-7xl mx-auto border border-[#d7ff3f]/20 rounded-[40px] p-10 lg:p-16 bg-zinc-950">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT SIDE */}
          <div>

            <p className="uppercase tracking-[0.3em] text-[#d7ff3f]/60 text-sm mb-4">
              Contact
            </p>

            <h2 className="text-4xl lg:text-6xl font-black leading-tight text-[#d7ff3f]">
              Ready to build your next big project?
            </h2>

            <p className="mt-6 text-[#d7ff3f]/70 text-lg leading-relaxed">
              Let’s create powerful branding, modern websites,
              and premium advertising experiences together.
            </p>

          </div>

          {/* FORM */}
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-[#d7ff3f]/20 text-[#d7ff3f] placeholder:text-[#d7ff3f]/40 rounded-2xl px-6 py-4 outline-none focus:border-[#d7ff3f] transition-all duration-300"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-[#d7ff3f]/20 text-[#d7ff3f] placeholder:text-[#d7ff3f]/40 rounded-2xl px-6 py-4 outline-none focus:border-[#d7ff3f] transition-all duration-300"
            />

            <textarea
              rows="5"
              placeholder="Tell us about your project"
              className="w-full bg-black border border-[#d7ff3f]/20 text-[#d7ff3f] placeholder:text-[#d7ff3f]/40 rounded-2xl px-6 py-4 outline-none resize-none focus:border-[#d7ff3f] transition-all duration-300"
            />

            <button className="bg-[#d7ff3f] text-black px-8 py-4 rounded-2xl font-black hover:scale-105 hover:shadow-[0_0_30px_rgba(215,255,63,0.4)] transition-all duration-300">
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}