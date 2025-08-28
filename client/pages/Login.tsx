import { useState } from "react";
import { Mail, Lock } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", { email, password });
    // Navigate to dashboard after successful login
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-pisic-bg flex relative overflow-hidden">
      {/* Left side - PISIC logo panel */}
      <div className="hidden lg:flex w-1/3 xl:w-2/5 bg-slate-800 rounded-r-[194px] items-center justify-center relative">
        <div className="text-center">
          <h2 className="text-pisic-text text-8xl xl:text-9xl 2xl:text-[200px] leading-none">
            <span className="font-philosopher">PIS</span>
            <span className="font-rubik-puddles">IC</span>
          </h2>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>
        
        {/* Glass morphism card */}
        <div className="relative z-10 w-full max-w-2xl">
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset]">
            
            {/* Main heading */}
            <h1 className="font-tektur text-pisic-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl text-center mb-8 sm:mb-12 md:mb-16">
              Login
            </h1>

            {/* Login form */}
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

              {/* Password input */}
              <div className="relative">
                <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                  SENHA
                </label>
                <div className="relative">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-transparent border-b-2 border-pisic-text/50 focus:border-white pb-2 text-white font-tektur text-lg sm:text-xl placeholder-white/50 outline-none transition-colors"
                    placeholder="Digite sua senha..."
                    required
                  />
                  <Lock className="absolute right-0 bottom-3 w-5 h-5 sm:w-6 sm:h-6 text-pisic-text" />
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-center pt-4 sm:pt-6">
                <button
                  type="submit"
                  className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full transition-colors duration-200 font-normal min-w-[200px] sm:min-w-[250px] md:min-w-[308px]"
                >
                  Login
                </button>
              </div>

              {/* Navigation links */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-4 sm:pt-6">
                <Link 
                  to="/register"
                  className="font-tektur text-white text-lg sm:text-xl md:text-2xl hover:text-white/80 transition-colors"
                >
                  NÃO TEM UMA CONTA?
                </Link>
                <Link 
                  to="/forgot-password"
                  className="font-tektur text-white text-lg sm:text-xl md:text-2xl hover:text-white/80 transition-colors"
                >
                  ESQUECEU SUA SENHA?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
