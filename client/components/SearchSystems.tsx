import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { systemModules } from "@/lib/modules";

export default function SearchSystems() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const normalize = (s: string) =>
    s
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();

  const results = useMemo(() => {
    if (!query) return [] as typeof systemModules;
    const q = normalize(query);
    return systemModules.filter((m) => normalize(m.name).includes(q));
  }, [query]);

  const go = (id: string) => navigate(`/${id}`);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (results.length) go(results[0].id);
      else navigate("/system-not-found");
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative bg-transparent rounded-full px-6 py-4 lg:px-8 lg:py-5 border border-white/30 backdrop-blur-sm shadow-[0_0_0_1px_rgba(255,255,255,0.08)_inset] focus-within:border-white/50">
        <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 w-6 h-6 lg:w-8 lg:h-8 text-pisic-text" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="buscar sistema..."
          className="w-full bg-transparent pl-12 lg:pl-16 text-pisic-text font-tektur text-xl lg:text-2xl xl:text-3xl placeholder-pisic-text outline-none"
        />

        {query && (
          <div className="absolute left-0 right-0 mt-3 bg-slate-800/70 backdrop-blur-md border border-white/20 rounded-3xl shadow-xl overflow-hidden">
            {results.length ? (
              <ul>
                {results.map((m) => (
                  <li key={m.id}>
                    <button
                      onClick={() => go(m.id)}
                      className="w-full text-left px-6 py-4 font-tektur text-white text-xl hover:bg-white/10 transition-colors"
                    >
                      {m.name}
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <button
                onClick={() => navigate("/system-not-found")}
                className="w-full text-left px-6 py-4 font-tektur text-white text-xl hover:bg-white/10 transition-colors"
              >
                sistema não encontrado ou incorreto
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
