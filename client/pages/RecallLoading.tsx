import { Home, User, Search, Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import SearchSystems from "@/components/SearchSystems";

export default function RecallLoading() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleLogout = () => {
    navigate("/login");
  };

  // Simulate redirect delay (in a real app, this would redirect to the actual Recall system)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Here you would redirect to the actual Recall system URL
      console.log("Redirecting to Recall system...");
      // For demo purposes, redirect back to dashboard after 5 seconds
      navigate("/dashboard");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen bg-pisic-bg p-4 lg:p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>

      {/* Main glass container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-6 sm:p-8 md:p-12 lg:p-16 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset] min-h-[calc(100vh-2rem)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 lg:mb-12">
            {/* PISIC Logo */}
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-pisic-text">
                <span className="font-philosopher">PIS</span>
                <span className="font-rubik-puddles">IC</span>
              </h1>
            </div>

            {/* User Menu */}
            <div className="flex items-center bg-slate-800/55 rounded-full px-4 py-2 lg:px-6 lg:py-3">
              <User className="w-6 h-6 lg:w-8 lg:h-8 text-pisic-text mr-3" />
              <Link
                to="/profile"
                className="font-tektur text-pisic-text text-lg sm:text-xl lg:text-2xl xl:text-3xl mr-2 hover:text-white transition-colors"
              >
                usuário
              </Link>
              <span className="font-tektur text-pisic-text text-lg sm:text-xl lg:text-2xl xl:text-3xl mx-2">
                /
              </span>
              <button
                onClick={handleLogout}
                className="font-tektur text-pisic-text text-lg sm:text-xl lg:text-2xl xl:text-3xl hover:text-white transition-colors"
              >
                sair
              </button>
            </div>
          </div>

          {/* Home Navigation */}
          <div className="flex items-center mb-6 lg:mb-8">
            <Link to="/dashboard" className="flex items-center gap-3 group">
              <Home className="w-8 h-8 lg:w-12 lg:h-12 text-white group-hover:text-white/80 transition-colors" />
              <span className="font-tektur text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl group-hover:text-white/80 transition-colors">
                inicial
              </span>
            </Link>
          </div>

          {/* Search Bar */}
          <div className="flex items-center mb-8 lg:mb-12">
            <SearchSystems />
          </div>

          {/* Recall Title */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="bg-pisic-bg/47 rounded-full px-8 py-4 lg:px-12 lg:py-6 inline-block">
              <h2 className="font-tektur text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                Recall
              </h2>
            </div>
          </div>

          {/* Loading Section */}
          <div className="text-center mb-8 lg:mb-12">
            {/* Loading Spinner */}
            <div className="flex justify-center mb-6 lg:mb-8">
              <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Loader className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 text-blue-400 animate-spin" />
              </div>
            </div>

            {/* Redirect Messages */}
            <div className="space-y-4 lg:space-y-6">
              <h3 className="font-tektur text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed">
                Você está sendo direcionado
              </h3>

              <p className="font-tektur text-white text-xl sm:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-relaxed">
                aguarde em instantes...
              </p>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-between pt-8 lg:pt-12 border-t border-white/10">
            {/* Copyright and Contacts */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl">
                © 2025 IC - UFAL |
              </span>
              <Link
                to="/contacts"
                className="font-tektur text-white text-lg lg:text-xl xl:text-2xl hover:text-white/80 transition-colors"
              >
                CONTATOS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
