import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import AllNewsPage from "./pages/AllNewsPage";
import NewsDetailPage from "./pages/NewsDetailPage";
import AllTrendsPage from "./pages/AllTrendsPage";
import TrendDetailPage from "./pages/TrendDetailPage";
import AllSolutionsPage from "./pages/AllSolutionsPage";
import SolutionDetailPage from "./pages/SolutionDetailPage";
import AllTechnologiesPage from "./pages/AllTechnologiesPage";
import TechnologyDetailPage from "./pages/TechnologyDetailPage";
import AdminLogin from "./admin/AdminLogin";
import ManagePage from "./admin/ManagePage";
import ProtectedRoute from "./admin/components/ProtectedRoute";
import Contact from "./ui/contact";
import WhatsAppButton from "./ui/WhatsAppButton";

export default function App() {
  return (
    <Router>
      <div className="w-full">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/news" element={<AllNewsPage />} />
          <Route path="/news/:id" element={<NewsDetailPage />} />
          <Route path="/trends" element={<AllTrendsPage />} />
          <Route path="/trends/:id" element={<TrendDetailPage />} />
          <Route path="/solutions" element={<AllSolutionsPage />} />
          <Route path="/solutions/:id" element={<SolutionDetailPage />} />
          <Route path="/technologies" element={<AllTechnologiesPage />} />
          <Route path="/technologies/:category" element={<AllTechnologiesPage />} />
          <Route path="/technologies/detail/:id" element={<TechnologyDetailPage />} />
          <Route path="/about" element={<div>About Us Page</div>} />
          <Route path="/contact" element={<Contact/>} />

          {/* Admin Routes */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route
            path="/manage"
            element={
              <ProtectedRoute>
                <ManagePage />
              </ProtectedRoute>
            }
          />
        </Routes>

        {/* Floating WhatsApp & Call Buttons - Visible on all pages */}
        <WhatsAppButton />
      </div>
    </Router>
  );
}
