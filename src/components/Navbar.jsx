export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/40 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-black tracking-wider">
          LEADERS
        </h1>

        <div className="hidden md:flex gap-8 text-zinc-300">
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Projects</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}