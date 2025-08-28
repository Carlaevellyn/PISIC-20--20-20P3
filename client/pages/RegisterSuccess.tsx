import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function RegisterSuccess() {
  return (
    <div className="min-h-screen bg-pisic-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background with subtle texture */}
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
          {/* Glass card with backdrop blur */}
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset]">
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-green-400" />
              </div>
            </div>

            {/* Success message */}
            <h2 className="font-tektur text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center mb-6 sm:mb-8 leading-relaxed">
              Sua conta no PISIC foi criada com sucesso!
            </h2>

            {/* Welcome message */}
            <p className="font-tektur text-white text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-8 sm:mb-12">
              seja bem vindo!
            </p>

            {/* Login button */}
            <div className="flex justify-center">
              <Link
                to="/login"
                className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full transition-colors duration-200 font-normal min-w-[200px] sm:min-w-[250px] md:min-w-[308px] text-center"
              >
                Fazer Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
