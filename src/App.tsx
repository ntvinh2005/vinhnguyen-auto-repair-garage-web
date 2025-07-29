import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/auth/Login";
import PrivateRoute from "./pages/auth/PrivateRoute";
import { BlogCreate, Blogs, BlogDetail } from "./pages/blogs";
import BlogPublicLayout from "./pages/blogs/BlogPublicLayout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/blog/create"
            element={
              <PrivateRoute>
                <BlogCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/blog/edit/:slug"
            element={
              <PrivateRoute>
                <BlogCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/blogs"
            element={
              <BlogPublicLayout>
                <Blogs />
              </BlogPublicLayout>
            }
          />
          <Route
            path="/blogs/:slug"
            element={
              <BlogPublicLayout>
                <BlogDetail />
              </BlogPublicLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
