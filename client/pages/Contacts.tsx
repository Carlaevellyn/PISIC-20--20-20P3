import { Home, User, Phone } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export default function Contacts() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/login");
  };

  const contactInfo = {
    emails: ["PISIC@ic.ufal.br", "secretaria@ic.ufal.br"],
    phones: ["(82)3214-1401", "[82]9999-9999"],
  };

  return (
    <div className="min-h-screen bg-pisic-bg p-4 lg:p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pisic-bg via-pisic-bg to-slate-700"></div>

      {/* Main container */}
      <div className="relative z-10 mx-auto max-w-6xl">
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

        {/* Glass morphism card */}
        <div className="relative mx-auto max-w-4xl">
          <div className="relative bg-white/10 backdrop-blur-[59px] rounded-[151px] p-8 sm:p-12 md:p-16 lg:p-20 shadow-[59px_-59px_59px_0_rgba(165,165,165,0.1)_inset,_-59px_59px_59px_0_rgba(255,255,255,0.1)_inset] min-h-[600px]">
            {/* Home Navigation */}
            <div className="flex items-center mb-8 lg:mb-12">
              <Link to="/dashboard" className="flex items-center gap-3 group">
                <Home className="w-8 h-8 lg:w-12 lg:h-12 text-white group-hover:text-white/80 transition-colors" />
                <span className="font-tektur text-white text-lg sm:text-xl lg:text-2xl xl:text-3xl group-hover:text-white/80 transition-colors">
                  inicial
                </span>
              </Link>
            </div>

            {/* Contacts Section */}
            <div className="text-center mb-8 lg:mb-12">
              {/* Contact Icon */}
              <div className="flex justify-center mb-6 lg:mb-8">
                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Phone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                </div>
              </div>

              {/* Contacts Title */}
              <h2 className="font-tektur text-white text-2xl sm:text-3xl lg:text-4xl xl:text-5xl mb-8 lg:mb-12">
                contatos
              </h2>

              {/* Contact Information */}
              <div className="space-y-4 lg:space-y-6 max-w-md mx-auto">
                {/* Email Addresses */}
                {contactInfo.emails.map((email, index) => (
                  <div key={`email-${index}`} className="text-center">
                    <a
                      href={`mailto:${email}`}
                      className="font-tektur text-white text-lg lg:text-xl xl:text-2xl hover:text-white/80 transition-colors block"
                    >
                      {email}
                    </a>
                  </div>
                ))}

                {/* Phone Numbers */}
                {contactInfo.phones.map((phone, index) => (
                  <div key={`phone-${index}`} className="text-center">
                    <a
                      href={`tel:${phone.replace(/\D/g, "")}`}
                      className="font-tektur text-white text-lg lg:text-xl xl:text-2xl hover:text-white/80 transition-colors block"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 lg:mt-12">
          <span className="font-tektur text-white text-lg lg:text-xl xl:text-2xl">
            © 2025 IC - UFAL
          </span>
        </div>
      </div>
    </div>
  );
}
