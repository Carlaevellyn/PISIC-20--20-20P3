import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function PasswordResetConfirmation() {
  return (
    <div className="min-h-screen bg-pisic-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* PISIC Logo */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-pisic-text">
            <span className="font-philosopher">PIS</span>
            <span className="font-rubik-puddles">IC</span>
          </h1>
        </div>

        {/* Glass morphism card */}
        <div className="relative mx-auto max-w-4xl">
          {/* Glass card with backdrop blur */}
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset]">
            
            {/* Success Icon */}
            <div className="flex justify-center mb-8 lg:mb-12">
              <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 xl:w-32 xl:h-32 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <CheckCircle className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 text-green-400" />
              </div>
            </div>

            {/* Success message */}
            <div className="text-center mb-8 lg:mb-12">
              <h2 className="font-tektur text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed px-4">
                Seu email foi enviado com sucesso!
              </h2>
            </div>

            {/* Login button */}
            <div className="flex justify-center">
              <Link
                to="/login"
                className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 lg:py-5 rounded-full transition-colors duration-200 font-normal min-w-[250px] sm:min-w-[300px] lg:min-w-[400px] xl:min-w-[450px] text-center"
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
