import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Register from "./pages/Register";
import ProfessionalRegister from "./pages/ProfessionalRegister";
import AdminRegister from "./pages/AdminRegister";
import RegisterSuccess from "./pages/RegisterSuccess";
import PasswordResetConfirmation from "./pages/PasswordResetConfirmation";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import UserProfile from "./pages/UserProfile";
import Contacts from "./pages/Contacts";
import SystemModule from "./pages/SystemModule";
import RecallLoading from "./pages/RecallLoading";
import KeyManagerLoading from "./pages/KeyManagerLoading";
import MarketICLoading from "./pages/MarketICLoading";
import PresencaQRLoading from "./pages/PresencaQRLoading";
import NotificLoading from "./pages/NotificLoading";
import ICronogramaLoading from "./pages/ICronogramaLoading";
import AccessDenied from "./pages/AccessDenied";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/professional-register"
            element={<ProfessionalRegister />}
          />
          <Route path="/admin-register" element={<AdminRegister />} />
          <Route path="/register-success" element={<RegisterSuccess />} />
          <Route path="/forgot-password" element={<Index />} />
          <Route
            path="/password-reset-confirmation"
            element={<PasswordResetConfirmation />}
          />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/recall" element={<RecallLoading />} />
          <Route path="/key-manager" element={<KeyManagerLoading />} />
          <Route path="/presenca-qr" element={<PresencaQRLoading />} />
          <Route path="/monic" element={<AccessDenied />} />
          <Route path="/market-ic" element={<MarketICLoading />} />
          <Route path="/notific" element={<NotificLoading />} />
          <Route path="/icronograma" element={<ICronogramaLoading />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

const container = document.getElementById("root")!;

// Check if root already exists to prevent duplicate createRoot calls
if (!container._reactRootContainer) {
  const root = createRoot(container);
  container._reactRootContainer = root;
  root.render(<App />);
} else {
  container._reactRootContainer.render(<App />);
}
