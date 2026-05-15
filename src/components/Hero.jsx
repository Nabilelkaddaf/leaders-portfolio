export default function Hero() {
  return (
    <section className="min-h-screen bg-black text-[#d7ff3f] flex items-center border-b border-[#d7ff3f]/20">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT SIDE */}
        <div className="flex items-center justify-center">

          <div className="text-center">

            {/* LOGO */}
            <div className="flex justify-center mb-6">
              <div className="relative w-40 h-40">

                <div className="absolute bottom-0 left-0 w-8 h-28 bg-[#d7ff3f] rotate-[25deg] rounded-sm"></div>

                <div className="absolute bottom-0 left-12 w-8 h-20 bg-[#d7ff3f] rotate-[25deg] rounded-sm"></div>

                <div className="absolute bottom-0 left-24 w-8 h-12 bg-[#d7ff3f] rotate-[25deg] rounded-sm"></div>

                <div className="absolute bottom-0 left-4 w-28 h-8 bg-[#d7ff3f] skew-x-[-25deg] rounded-sm"></div>

              </div>
            </div>

            <h1 className="text-6xl lg:text-7xl font-black tracking-tight">
              LEADERS
            </h1>

            <p className="text-2xl text-[#d7ff3f]/80 mt-2 font-light">
              advertising & web
            </p>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div>

          <h2 className="text-5xl lg:text-6xl font-black leading-tight">
            LEADERS
          </h2>

          <p className="mt-6 text-[#d7ff3f]/70 text-lg leading-relaxed max-w-xl">
            Creative Advertising & Web Agency.
            We build powerful brands, high-converting websites,
            and modern advertising campaigns designed to help
            businesses dominate their market.
          </p>

          <div className="mt-14 space-y-10">

            <div>
              <h3 className="text-6xl font-black">
                120+
              </h3>

              <p className="text-[#d7ff3f]/70 mt-2">
                Completed Projects
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black">
                85%
              </h3>

              <p className="text-[#d7ff3f]/70 mt-2">
                Client Retention Rate
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black">
                24/7
              </h3>

              <p className="text-[#d7ff3f]/70 mt-2">
                Creative Support
              </p>
            </div>

            <div>
              <h3 className="text-6xl font-black">
                2026
              </h3>

              <p className="text-[#d7ff3f]/70 mt-2">
                Modern Design Standards
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}