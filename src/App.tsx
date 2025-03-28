
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Politicians from "./pages/Politicians";
import PoliticianDetail from "./pages/PoliticianDetail";
import Promises from "./pages/Promises";
import Parliament from "./pages/Parliament";
import Ministers from "./pages/Ministers";
import Appointees from "./pages/Appointees";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark" storageKey="ghana-politics-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/politicians" element={<Politicians />} />
            <Route path="/politicians/:id" element={<PoliticianDetail />} />
            <Route path="/promises" element={<Promises />} />
            <Route path="/parliament" element={<Parliament />} />
            <Route path="/ministers" element={<Ministers />} />
            <Route path="/appointees" element={<Appointees />} />
            <Route path="/dashboard" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
