import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function SystemModule() {
  const location = useLocation();
  const moduleName = location.pathname.replace("/", "").replace("-", " ");

  return (
    <div className="min-h-screen bg-pisic-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>
      
      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* PISIC Logo */}
        <div className="text-center mb-16 sm:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pisic-text">
            <span className="font-philosopher">PIS</span>
            <span className="font-rubik-puddles">IC</span>
          </h1>
        </div>

        {/* Glass morphism card */}
        <div className="relative mx-auto max-w-2xl">
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset]">
            
            {/* Module name */}
            <h2 className="font-tektur text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-8 capitalize">
              {moduleName || "Sistema"}
            </h2>

            {/* Placeholder content */}
            <div className="text-center mb-8 sm:mb-12">
              <p className="font-tektur text-white text-lg sm:text-xl md:text-2xl mb-6 leading-relaxed">
                Este módulo está em desenvolvimento.
              </p>
              <p className="font-tektur text-white/80 text-base sm:text-lg md:text-xl leading-relaxed">
                Continue conversando comigo para implementar as funcionalidades deste sistema.
              </p>
            </div>

            {/* Back to dashboard button */}
            <div className="flex justify-center">
              <Link 
                to="/dashboard"
                className="flex items-center gap-3 bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-xl sm:text-2xl md:text-3xl px-6 sm:px-8 md:px-12 py-3 sm:py-4 rounded-full transition-colors duration-200 font-normal"
              >
                <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                Voltar ao Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
