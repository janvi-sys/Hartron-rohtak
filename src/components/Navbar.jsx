import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/hasc-logo.jpg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-40 bg-white shadow-xs font-sans">
      {/* 1. TOP ANNOUNCEMENT & CONTACT BAR */}
      <div className="bg-[#0066b2] text-white py-2 px-4 text-xs md:text-sm">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-center md:text-left">
            <span className="text-base">🎓</span>
            <span>
              Learning to code? Check out our{" "}
              <Link
                to="/courses"
                className="underline font-bold hover:text-yellow-300 transition"
              >
                Coding Fundamentals
              </Link>{" "}
              course for beginners!
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919896111612"
              className="flex items-center gap-1.5 font-semibold hover:text-yellow-300 transition"
            >
              <span>+91-9653540612</span>
            </a>

            <a
              href="mailto:hascrohtak@gmail.com"
              className="flex items-center gap-1.5 font-semibold hover:text-yellow-300 transition"
            >
              <span>hascrohtak@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. LOGO SECTION */}
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center"
        >
          <img
            src={logo}
            alt="Hartron Logo"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          />
        </Link>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          className="md:hidden text-2xl text-[#004b87] p-1 border rounded-md"
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* 3. NAVIGATION LINKS BAR */}
      <div className="border-t border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="hidden md:flex items-center justify-center space-x-8 py-3 text-slate-800 font-bold text-sm">
            <Link
              to="/"
              className={`hover:text-[#0066b2] ${isActive("/") ? "text-[#0066b2]" : ""}`}
            >
              🏠 Home
            </Link>

            {/* About Links */}
            <Link
              to="/about/center"
              className={`hover:text-[#0066b2] ${isActive("/about/center") ? "text-[#0066b2]" : ""}`}
            >
              🏛️ About Center
            </Link>
            <Link
              to="/about/faculty"
              className={`hover:text-[#0066b2] ${isActive("/about/faculty") ? "text-[#0066b2]" : ""}`}
            >
              👨‍🏫 Our Faculty
            </Link>

            {/* Courses Link */}
            <Link
              to="/courses"
              className={`hover:text-[#0066b2] ${isActive("/courses") ? "text-[#0066b2]" : ""}`}
            >
              📖 Courses
            </Link>

            {/* Internship Link */}
            <Link
              to="/internship"
              className={`hover:text-[#0066b2] ${isActive("/internship") ? "text-[#0066b2]" : ""}`}
            >
              🏆 Internship
            </Link>

            {/* Student Section Direct Links */}
            <Link
              to="/verify-certificate"
              className={`hover:text-[#0066b2] ${isActive("/verify-certificate") ? "text-[#0066b2]" : ""}`}
            >
              🎓 Verify Certificate
            </Link>
            <Link
              to="/student-login"
              className={`hover:text-[#0066b2] ${isActive("/student-login") ? "text-[#0066b2]" : ""}`}
            >
              🔐 Student Portal
            </Link>

            <Link
              to="/contact"
              className={`hover:text-[#0066b2] ${isActive("/contact") ? "text-[#0066b2]" : ""}`}
            >
              📞 Contact Us
            </Link>
          </nav>

          {/* Mobile Drawer */}
          {isOpen && (
            <div className="md:hidden py-4 space-y-2 font-semibold text-xs border-t text-slate-700">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                🏠 Home
              </Link>
              <Link
                to="/about/center"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                🏛️ About Center
              </Link>
              <Link
                to="/about/faculty"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                👨‍🏫 Our Faculty
              </Link>
              <Link
                to="/courses"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                📖 All Courses
              </Link>
              <Link
                to="/internship"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                🏆 Internship
              </Link>
              <Link
                to="/verify-certificate"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                🎓 Verify Certificate
              </Link>
              <Link
                to="/student-login"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                🔐 Student Portal
              </Link>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block py-1.5 px-2"
              >
                📞 Contact Us
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
