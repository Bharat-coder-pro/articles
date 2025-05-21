
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articles" element={<Index />} />
          <Route path="/articles/create" element={<NotFound />} />
          <Route path="/keywords" element={<NotFound />} />
          <Route path="/article-settings" element={<NotFound />} />
          <Route path="/internal-links" element={<NotFound />} />
          <Route path="/integrations" element={<NotFound />} />
          <Route path="/help" element={<NotFound />} />
          <Route path="/updates" element={<NotFound />} />
          <Route path="/chat" element={<NotFound />} />
          <Route path="/profile" element={<NotFound />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </TooltipProvider>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
