import { useState } from "react";
import { Mail, Info } from "lucide-react";
import { Link } from "react-router-dom";

export default function Index() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Email submitted:", email);
  };

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
            
            {/* Info Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Info className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
              </div>
            </div>

            {/* Main heading */}
            <h2 className="font-tektur text-white text-2xl sm:text-3xl md:text-4xl text-center mb-6 sm:mb-8">
              esquceu sua senha?
            </h2>

            {/* Description text */}
            <p className="font-tektur text-white text-base sm:text-lg md:text-xl lg:text-2xl text-center mb-8 sm:mb-12 leading-relaxed px-4">
              Por favor, digite seu email instutucional. Você irá receber um link para criar uma nova senha via email.
            </p>

            {/* Email form */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Email input */}
              <div className="relative">
                <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                  EMAIL
                </label>
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-pisic-text/50 focus:border-white pb-2 text-white font-tektur text-lg sm:text-xl placeholder-white/50 outline-none transition-colors"
                    placeholder="Digite seu email..."
                    required
                  />
                  <Mail className="absolute right-0 bottom-3 w-5 h-5 sm:w-6 sm:h-6 text-pisic-text" />
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-center pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full transition-colors duration-200 font-normal min-w-[200px] sm:min-w-[250px] md:min-w-[308px]"
                >
                  enviar
                </button>
              </div>

              {/* Back to login link */}
              <div className="text-center pt-4 sm:pt-6">
                <Link
                  to="/login"
                  className="font-tektur text-white text-lg sm:text-xl md:text-2xl hover:text-white/80 transition-colors"
                >
                  Voltar para login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
