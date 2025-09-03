import { useState } from "react";
import { User, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import SearchSystems from "@/components/SearchSystems";
import { systemModules } from "@/lib/modules";

export default function Dashboard() {
  const [searchQuery] = useState("");
  const navigate = useNavigate();


  // systemModules imported from @/lib/modules

  const handleModuleClick = (moduleId: string) => {
    navigate(`/${moduleId}`);
  };


  const handleLogout = () => {
    console.log("Logging out...");
    navigate("/login");
  };

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

          {/* Search Bar */}
          <div className="flex items-center justify-center mb-8 lg:mb-12">
            <SearchSystems />
          </div>

          {/* System Modules Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-12">
            {systemModules.map((module) => (
              <button
                key={module.id}
                onClick={() => handleModuleClick(module.id)}
                className="bg-slate-800/70 hover:bg-slate-800/85 border border-slate-600/30 hover:border-slate-500/50 rounded-[47px] p-8 lg:p-12 transition-all duration-200 group min-h-[200px] lg:min-h-[234px] flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                <span className="font-tektur text-white text-2xl lg:text-3xl xl:text-4xl group-hover:scale-105 transition-transform duration-200">
                  {module.name}
                </span>
              </button>
            ))}
          </div>

          {/* Footer */}
          <div className="flex flex-col sm:flex-row items-center justify-center pt-8 lg:pt-12 border-t border-white/10">
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
