import { useState, useEffect } from "react";
import { Mail, Lock, ChevronDown } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // Check if this is the credentials step for multi-step registration
  const isCredentialsStep = searchParams.get("step") === "credentials";

  useEffect(() => {
    if (isCredentialsStep) {
      // Load stored user type for multi-step registration
      const storedUserType = localStorage.getItem("userType");
      if (storedUserType) {
        setUserType(storedUserType);
      }
    }
  }, [isCredentialsStep]);

  const userTypes = ["Administrador", "Professor", "Aluno", "Coordenador"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isCredentialsStep) {
      // This is the final step for multi-step registration
      const storedUserType = localStorage.getItem("userType");
      const professionalData = localStorage.getItem("professionalData");
      const administrativeData = localStorage.getItem("administrativeData");

      console.log("Final multi-step registration:", {
        email,
        password,
        userType: storedUserType,
        professionalData: professionalData
          ? JSON.parse(professionalData)
          : null,
        administrativeData: administrativeData
          ? JSON.parse(administrativeData)
          : null,
      });

      // Clean up temporary storage
      localStorage.removeItem("professionalData");
      localStorage.removeItem("administrativeData");

      // Navigate to success page after registration
      navigate("/register-success");
    } else {
      // Regular registration flow for non-professors
      console.log("Registration data:", { email, password, userType });

      // Store user type for profile personalization
      localStorage.setItem("userType", userType);

      // Navigate to success page after registration
      navigate("/register-success");
    }
  };

  return (
    <div className="min-h-screen bg-pisic-bg flex relative overflow-hidden">
      {/* Left side - Registration form */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>

        {/* Glass morphism card */}
        <div className="relative z-10 w-full max-w-2xl">
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset]">
            {/* Main heading */}
            <h1 className="font-tektur text-pisic-text text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8 sm:mb-12 md:mb-16">
              {isCredentialsStep ? "finalize sua conta" : "crie uma conta"}
            </h1>

            {/* Multi-step credentials subtitle */}
            {isCredentialsStep && (
              <p className="font-tektur text-white text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 leading-relaxed">
                Agora digite seu email e senha para finalizar o cadastro
              </p>
            )}

            {/* Registration form */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* User type dropdown - only show in initial step */}
              {!isCredentialsStep && (
                <div className="relative">
                  <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                    SELECIONE O TIPO DE USUARIO
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      className="w-full bg-white/25 rounded-full px-6 py-3 text-white font-tektur text-lg flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-white/50"
                    >
                      <span className={userType || "text-white/70"}>
                        {userType || "Selecione..."}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      />
                    </button>

                    {isDropdownOpen && (
                      <div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg z-20">
                        {userTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => {
                              if (type === "Professor") {
                                // Redirect to professional registration page
                                navigate("/professional-register");
                              } else if (
                                type === "Administrador" ||
                                type === "Coordenador"
                              ) {
                                // Store temp user type and redirect to admin registration page
                                localStorage.setItem("tempUserType", type);
                                navigate("/admin-register");
                              } else {
                                setUserType(type);
                                setIsDropdownOpen(false);
                              }
                            }}
                            className="w-full px-6 py-3 text-left font-tektur text-pisic-card hover:bg-white/20 first:rounded-t-2xl last:rounded-b-2xl transition-colors"
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              )}

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
                {/* Institutional email information - only show in initial step */}
                {!isCredentialsStep && (
                  <p className="font-tektur text-white text-sm sm:text-base mt-3 text-center leading-relaxed">
                    Somente e-mails institucionais serão aceitos. Um link de
                    ativação será enviado.
                  </p>
                )}
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
                  className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl sm:text-3xl md:text-4xl px-8 sm:px-12 md:px-16 py-3 sm:py-4 rounded-full transition-colors duration-200 font-normal min-w-[200px] sm:min-w-[250px]"
                >
                  {isCredentialsStep ? "FINALIZAR" : "CRIAR"}
                </button>
              </div>

              {/* Already have account link */}
              <div className="text-center pt-4 sm:pt-6">
                <Link
                  to="/login"
                  className="font-tektur text-white text-lg sm:text-xl md:text-2xl hover:text-white/80 transition-colors"
                >
                  JÁ TEM UMA CONTA?
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Right side - PISIC logo panel */}
      <div className="hidden lg:flex w-1/3 xl:w-2/5 bg-slate-800 rounded-l-[194px] items-center justify-center relative">
        <div className="text-center">
          <h2 className="text-pisic-text text-8xl xl:text-9xl 2xl:text-[200px] leading-none">
            <span className="font-philosopher">PIS</span>
            <span className="font-rubik-puddles">IC</span>
          </h2>
        </div>
      </div>
    </div>
  );
}
