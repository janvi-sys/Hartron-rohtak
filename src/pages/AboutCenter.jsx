import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutCenter() {
  const highlights = [
    { title: "Government Recognition", desc: "Courses certified by HARTRON (Government of Haryana enterprise)." },
    { title: "Modern Infrastructure", desc: "Fully air-conditioned labs with high-speed internet and 1:1 PC ratio." },
    { title: "Industry Relevance", desc: "Updated curriculum focusing on web development, cyber security, and accounting." },
    { title: "Career Guidance", desc: "Dedicated support for DEO exam preparation and job placement drives." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-blue-900 tracking-widest uppercase bg-blue-100 px-3 py-1 rounded-full">
            Authorized Training Partner
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            About Hartron Advanced Skill Centre
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Empowering students across Haryana with high-quality, practical IT training and government-recognized certifications for a successful technical career.
          </p>
        </div>

        {/* Mission & Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-blue-900">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span>🎯</span> Our Mission
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To bridge the gap between academic education and industry requirements by providing affordable, high-impact technical training to youth, making them job-ready for private and government sectors.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm border-t-4 border-t-yellow-400">
            <h2 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span>🚀</span> Our Vision
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the premier digital skill development hub in the region, fostering technical excellence, hands-on learning, and widespread employment opportunities for all aspiring professionals.
            </p>
          </div>
        </div>

        {/* Key Highlights */}
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 text-center mb-8">Why Learn With Us?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-slate-200 shadow-xs">
                <h3 className="font-bold text-slate-900 text-base mb-2">{item.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call To Action */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 text-center space-y-4">
          <h2 className="text-2xl font-bold">Want to know more about our programs?</h2>
          <p className="text-slate-300 text-sm max-w-xl mx-auto">
            Check out our broad range of diploma and short-term courses designed for various career paths.
          </p>
          <div className="pt-2">
            <Link to="/courses" className="inline-block bg-yellow-400 text-slate-950 font-bold px-6 py-3 rounded-xl hover:bg-yellow-300 transition text-sm">
              Explore Courses →
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}