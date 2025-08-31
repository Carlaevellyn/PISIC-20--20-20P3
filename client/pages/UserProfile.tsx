import { Home, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function UserProfile() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState<string>("");

  useEffect(() => {
    // Get user type from localStorage (set during registration)
    const storedUserType = localStorage.getItem("userType");
    setUserType(storedUserType || "Aluno"); // Default to Aluno if not set
  }, []);

  const handleLogout = () => {
    navigate("/login");
  };

  // Mock student data
  const studentData = {
    fullName: "João Silva Santos",
    registration: "20230001234",
    course: "Ciência da Computação",
    isMonitor: false,
    period: "7º Período",
    contact: "joao.silva@ic.ufal.br",
    accessCount: "47",
  };

  // Mock professor data
  const professorData = {
    fullName: "Dr. Maria Silva Santos",
    academicTitle: "Doutora em Ciência da Computação",
    department: "Instituto de Computação - UFAL",
    disciplines: "Algoritmos, Estruturas de Dados, Programação",
    projects: "IA Aplicada à Educação, Sistemas Distribuídos",
    education: "PhD em Ciência da Computação - UFPE",
    course: "Bacharelado em Ciência da Computação",
    contact: "maria.silva@ic.ufal.br",
    accessCount: "128",
  };

  const isProfessor = userType === "Professor";

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

            {/* Logout Button */}
            <div className="bg-slate-800/55 rounded-full px-4 py-2 lg:px-6 lg:py-3">
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

          {/* User Profile Section */}
          <div className="flex flex-col lg:flex-row items-center justify-center mb-8 lg:mb-12 gap-6 lg:gap-12">
            {/* Profile Icon */}
            <div className="w-20 h-20 lg:w-24 lg:h-24 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-10 h-10 lg:w-12 lg:h-12 text-white" />
            </div>

            {/* User Type */}
            <h2 className="font-tektur text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center">
              {isProfessor ? "usuário profissional" : "usuário aluno"}
            </h2>

            {/* Photo Placeholder */}
            <div className="w-32 h-36 lg:w-36 lg:h-40 bg-white/27 rounded-[25px] flex items-end justify-center pb-4">
              <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl">
                FOTO
              </span>
            </div>
          </div>

          {/* User Information Card */}
          <div className="bg-pisic-bg/65 rounded-[80px] p-8 lg:p-12 xl:p-16 mb-8 lg:mb-12">
            <div className="space-y-4 lg:space-y-6 max-w-4xl">
              {/* Common field: Full Name */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                  NOME COMPLETO:
                </span>
                <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                  {isProfessor ? professorData.fullName : studentData.fullName}
                </span>
              </div>

              {isProfessor ? (
                <>
                  {/* Professor-specific fields */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      TITULO ACADEMICO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.academicTitle}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      DEPARTAMENTO/INSTITUTO DE ATUAÇÃO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.department}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      DICIPLINAS:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.disciplines}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      PROJETOS:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.projects}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      FORMAÇÃO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.education}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      CURSO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.course}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      CONTATO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {professorData.contact}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-2xl lg:text-3xl xl:text-4xl font-medium min-w-fit">
                      ACESSOS:
                    </span>
                    <span className="font-tektur text-white/80 text-2xl lg:text-3xl xl:text-4xl">
                      {professorData.accessCount}
                    </span>
                  </div>
                </>
              ) : (
                <>
                  {/* Student-specific fields */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      MATRÍCULA:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {studentData.registration}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      CURSO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {studentData.course}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      MONITOR:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {studentData.isMonitor ? "SIM" : "NÃO"}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      PERIODO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {studentData.period}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl font-medium min-w-fit">
                      CONTATO:
                    </span>
                    <span className="font-tektur text-white/80 text-lg lg:text-xl xl:text-2xl">
                      {studentData.contact}
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                    <span className="font-tektur text-white text-2xl lg:text-3xl xl:text-4xl font-medium min-w-fit">
                      ACESSOS:
                    </span>
                    <span className="font-tektur text-white/80 text-2xl lg:text-3xl xl:text-4xl">
                      {studentData.accessCount}
                    </span>
                  </div>
                </>
              )}
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
