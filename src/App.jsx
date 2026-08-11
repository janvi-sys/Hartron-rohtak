import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Courses from "./pages/Courses";

import AboutCenter from "./pages/AboutCenter";
import OurFaculty from "./pages/OurFaculty";
import Internship from "./pages/Internship";
import VerifyCertificate from "./pages/VerifyCertificate";
import StudentLogin from "./pages/StudentLogin";

// Components
import PlacementPartners from "./components/PlacementPartners";
import ImageSlider from "./components/ImageSlider";

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between font-sans bg-slate-50 text-slate-800">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* About Routes */}
            <Route path="/about" element={<AboutCenter />} />
            <Route path="/about/center" element={<AboutCenter />} />
            <Route path="/about/faculty" element={<OurFaculty />} />

            {/* Courses Routes */}
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/all" element={<Courses />} />
            <Route path="/courses/diploma" element={<Courses />} />
            <Route path="/courses/short-term" element={<Courses />} />

            {/* Internship Route */}
            <Route path="/internship" element={<Internship />} />

            {/* Student Section */}
            <Route path="/verify-certificate" element={<VerifyCertificate />} />
            <Route path="/student-login" element={<StudentLogin />} />
            <Route path="/student-portal" element={<StudentLogin />} />

            <Route path="/contact" element={<Contact />} />

            {/* 404 Fallback */}
            <Route
              path="*"
              element={
                <div className="text-center py-24 px-4 space-y-4">
                  <h1 className="text-6xl font-extrabold text-blue-900">404</h1>
                  <p className="text-xl font-bold text-slate-800">
                    Page Not Found
                  </p>
                </div>
              }
            />
          </Routes>
        </main>

        {/* 🚀 OUR PLACEMENT NETWORK SECTION */}
        {/* <PlacementPartners /> */}

        <ImageSlider />

        <Footer />
      </div>
    </Router>
  );
}