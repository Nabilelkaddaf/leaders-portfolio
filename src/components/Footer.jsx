export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

        <div>
          <h2 className="text-2xl font-black">
            LEADERS
          </h2>

          <p className="text-zinc-500 mt-2">
            Creative Agency © 2026
          </p>
        </div>

        <div className="flex gap-6 text-zinc-400">
          <a 
            href="https://instagram.com/nabil_elkaddaf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#d7ff3f] transition"
          >
            Instagram
          </a>

          <a 
            href="https://www.behance.net/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#d7ff3f] transition"
          >
            Behance
          </a>

          <a 
            href="https://www.linkedin.com/in/yourusername" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#d7ff3f] transition"
          >
            LinkedIn
          </a>
           <a 
            href="https://www.github.com/Nabilelkaddaf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#d7ff3f] transition"
          >
           github
          </a>
        </div>

      </div>
    </footer>
  );
}