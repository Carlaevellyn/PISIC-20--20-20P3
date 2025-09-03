import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SystemNotFound() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-pisic-bg flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>

      <div className="relative z-10 w-full max-w-2xl">
        <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-10 sm:p-14 md:p-16 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset] text-center">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="absolute top-4 left-4 p-2 rounded-full bg-slate-800/50 hover:bg-slate-800/70 text-white"
            aria-label="Voltar"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>

          <h1 className="font-tektur text-pisic-text text-3xl sm:text-4xl md:text-5xl mb-6">
            sistema não encontrado ou incorreto
          </h1>
          <p className="font-tektur text-white text-lg sm:text-xl mb-8">
            Verifique o nome e tente novamente.
          </p>
          <button
            onClick={() => navigate("/dashboard")}
            className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl px-10 py-3 rounded-full transition-colors"
          >
            voltar ao início
          </button>
        </div>
      </div>
    </div>
  );
}
