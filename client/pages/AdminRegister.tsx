import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload } from "lucide-react";

export default function AdminRegister() {
  const [formData, setFormData] = useState({
    fullName: "",
    position: "",
    cpfOrSiape: "",
    phoneRamal: "",
    document: null as File | null,
    confirmAdminRole: false,
    acceptTerms: false,
  });
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      document: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Administrative registration data:", formData);

    // Store user type as Administrador (will be overridden if Coordenador was selected)
    const storedUserType =
      localStorage.getItem("tempUserType") || "Administrador";
    localStorage.setItem("userType", storedUserType);
    localStorage.setItem("administrativeData", JSON.stringify(formData));

    // Navigate back to main registration to enter email and password
    navigate("/register?step=credentials");
  };

  return (
    <div className="min-h-screen bg-pisic-bg flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>

      <div className="relative z-10 w-full max-w-4xl mx-auto">
        {/* PISIC Logo */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-pisic-text">
            <span className="font-philosopher">PIS</span>
            <span className="font-rubik-puddles">IC</span>
          </h1>
        </div>

        {/* Glass morphism card */}
        <div className="relative mx-auto max-w-3xl">
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset]">
            {/* Title */}
            <h2 className="font-tektur text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center mb-6 sm:mb-8 leading-tight px-4">
              Registro de Administrador/Coordenador
            </h2>

            {/* Subtitle */}
            <p className="font-tektur text-white text-lg sm:text-xl md:text-2xl text-center mb-8 sm:mb-12 leading-relaxed">
              Preencha as informações abaixo para criar sua conta e ter acesso
              ao PISIC
            </p>

            {/* Registration form */}
            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Full Name */}
              <div className="relative">
                <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                  NOME COMPLETO:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-2 text-white font-tektur text-lg sm:text-xl placeholder-white/50 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Position */}
              <div className="relative">
                <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                  CARGO:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-2 text-white font-tektur text-lg sm:text-xl placeholder-white/50 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* CPF or SIAPE */}
              <div className="relative">
                <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                  CPF ou SIAPE:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="cpfOrSiape"
                    value={formData.cpfOrSiape}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-2 text-white font-tektur text-lg sm:text-xl placeholder-white/50 outline-none transition-colors"
                    required
                  />
                </div>
              </div>

              {/* Phone/Extension */}
              <div className="relative">
                <label className="block font-tektur text-white text-lg sm:text-xl md:text-2xl mb-2">
                  TELEFONE/RAMAL:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="phoneRamal"
                    value={formData.phoneRamal}
                    onChange={handleInputChange}
                    className="w-full bg-transparent border-b-2 border-white/50 focus:border-white pb-2 text-white font-tektur text-lg sm:text-xl placeholder-white/50 outline-none transition-colors"
                  />
                  <span className="absolute right-0 bottom-3 font-tektur text-white text-sm">
                    *OPCIONAL
                  </span>
                </div>
              </div>

              {/* Document Upload */}
              <div className="relative">
                <div className="flex items-center gap-4 mb-2">
                  <Upload className="w-12 h-8 text-white" />
                  <label className="font-tektur text-white text-base sm:text-lg md:text-xl">
                    Upload de documento de nomeação / portaria (PDF ou imagem)
                  </label>
                </div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.jpg,.jpeg,.png"
                  className="w-full text-white font-tektur text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-white/20 file:text-white hover:file:bg-white/30"
                />
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 sm:space-y-6">
                {/* Administrative role confirmation */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <input
                    type="checkbox"
                    id="confirmAdminRole"
                    name="confirmAdminRole"
                    checked={formData.confirmAdminRole}
                    onChange={handleInputChange}
                    className="w-4 h-4 sm:w-5 sm:h-5 mt-1 bg-white border-2 border-white rounded focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <label
                    htmlFor="confirmAdminRole"
                    className="font-tektur text-white text-base sm:text-lg md:text-xl leading-relaxed"
                  >
                    Confirmo que exerço função administrativa/coordenação na
                    UFAL.
                  </label>
                </div>

                {/* Terms acceptance */}
                <div className="flex items-start gap-3 sm:gap-4">
                  <input
                    type="checkbox"
                    id="acceptTerms"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 sm:w-5 sm:h-5 mt-1 bg-white border-2 border-white rounded focus:ring-2 focus:ring-white/50"
                    required
                  />
                  <label
                    htmlFor="acceptTerms"
                    className="font-tektur text-white text-base sm:text-lg md:text-xl leading-relaxed"
                  >
                    Li e aceito os Termos de Uso e a Política de Privacidade.
                  </label>
                </div>
              </div>

              {/* Submit button */}
              <div className="flex justify-center pt-6 sm:pt-8">
                <button
                  type="submit"
                  className="bg-gray-300 hover:bg-gray-200 text-pisic-card font-tektur text-2xl sm:text-3xl md:text-4xl lg:text-5xl px-8 sm:px-12 md:px-16 lg:px-20 py-3 sm:py-4 lg:py-5 rounded-full transition-colors duration-200 font-normal min-w-[250px] sm:min-w-[300px] lg:min-w-[400px]"
                  disabled={!formData.confirmAdminRole || !formData.acceptTerms}
                >
                  enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
