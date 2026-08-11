import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ImageSlider from '../components/ImageSlider';
import heroBg1 from '../assets/gallery/imgi_2_j5xjcdbao0wqargmhmxr.jpg';
import heroBg2 from '../assets/gallery/imgi_9_gq74m4rdentbvyswnitc.jpg';
import heroBg3 from '../assets/gallery/image3.jpeg';


export default function Home() {
  const heroImages = [heroBg1, heroBg2, heroBg3];
  const [activeHero, setActiveHero] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveHero((prev) => (prev + 1) % heroImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  // Trending, high-demand, and future-proof Hartron courses (Basic + Advanced)
  const featuredCourses = [
    {
      id: "feat-1",
      title: "AI & Cyber Security Specialization",
      tag: "100% Placement Support",
      desc: "Day Boarding program covering AI model application, cyber defense, web security, and digital marketing.",
      duration: "18 Months"
    },
    {
      id: "feat-2",
      title: "Cyber Secured Web Dev (CYWDA)",
      tag: "High Demand",
      desc: "Full-stack web application development combined with core cybersecurity & secure coding practices.",
      duration: "18 Months (990 Hrs)"
    },
    {
      id: "feat-3",
      title: "Internet of Things Associate (IOTA)",
      tag: "Emerging Tech",
      desc: "Connect physical devices to networks, configure smart sensors, and analyze real-time IoT data.",
      duration: "1 Year (450 Hrs)"
    },
    {
      id: "feat-4",
      title: "Programming with Python",
      tag: "Skill Booster",
      desc: "Core Python syntax, Object-Oriented Programming, data structures, and automation scripting essentials.",
      duration: "2 Months"
    }
  ];

  // Student Journey Steps Data
  const journeySteps = [
    {
      id: "01",
      title: "Enrollment",
      desc: "Join Hartron's industry-aligned courses and pick your specialization.",
      badgeColor: "bg-blue-600"
    },
    {
      id: "02",
      title: "Skill Mastery",
      desc: "Hands-on training in programming, networking, or web development.",
      badgeColor: "bg-amber-500"
    },
    {
      id: "03",
      title: "Certification",
      desc: "Earn the prestigious Hartron certificate recognized by Govt & MNCs.",
      badgeColor: "bg-emerald-500"
    },
    {
      id: "04",
      title: "Soft Skills",
      desc: "Mock interviews and resume building sessions with career experts.",
      badgeColor: "bg-purple-500"
    },
    {
      id: "05",
      title: "Placement",
      desc: "Secure your dream job through our dedicated placement drives.",
      badgeColor: "bg-sky-500"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden text-white py-16 sm:py-24 px-4">
        <div className="absolute inset-0">
          <img src={heroImages[activeHero]} alt="Hero background" className="absolute inset-0 w-full h-full object-cover opacity-50 transition-opacity duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-950/75 via-slate-950/35 to-blue-950/65"></div>
        </div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 text-yellow-300 px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold mb-6 animate-pulse">
            <span>📢</span>
            <span>New Batches Starting Next Week | Limited Seats!</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-tight mb-6">
            HARTRON ADVANCED SKILL CENTER, <span className="text-yellow-400 underline decoration-yellow-400/40">ROHTAK</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
            Empowering youth through State-of-the-Art IT Education, Government Recognized Certification, and Industry-Oriented Practical Training.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/courses" 
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-extrabold px-8 py-3.5 sm:py-4 rounded-xl shadow-lg hover:shadow-yellow-400/20 transition-all transform hover:-translate-y-0.5 text-center text-sm sm:text-base"
            >
              Explore All Courses →
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 sm:py-4 rounded-xl transition text-center text-sm sm:text-base"
            >
              Book Free Counseling
            </Link>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-10 border-t border-slate-800">
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <span className="block text-2xl sm:text-3xl font-extrabold text-yellow-400">100%</span>
              <span className="text-xs text-slate-400 mt-1 block uppercase tracking-wider">Govt Recognized</span>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <span className="block text-2xl sm:text-3xl font-extrabold text-yellow-400">5000+</span>
              <span className="text-xs text-slate-400 mt-1 block uppercase tracking-wider">Students Trained</span>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <span className="block text-2xl sm:text-3xl font-extrabold text-yellow-400">1:1</span>
              <span className="text-xs text-slate-400 mt-1 block uppercase tracking-wider">PC Allocation</span>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-xl border border-slate-800">
              <span className="block text-2xl sm:text-3xl font-extrabold text-yellow-400">DEO</span>
              <span className="text-xs text-slate-400 mt-1 block uppercase tracking-wider">Exam Special Prep</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. WHY CHOOSE US SECTION */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Why Choose Hartron Advanced Skill Center Rohtak?
          </h2>
          <p className="text-slate-600 mt-2 text-xs sm:text-sm">
            We offer the perfect environment for career-driven technical education.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
              📜
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Govt Recognized Certificates</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Official Hartron approved certifications widely accepted in Haryana Government jobs, corporate firms, and private organizations.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
              🖥️
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">Fully Equipped Practical Labs</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              High-speed internet, modern computer systems, individual PC allocation, and hands-on practical learning environment.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-md transition">
            <div className="w-12 h-12 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center font-bold text-2xl mb-6">
              🎯
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-3">DEO Exam & Typing Practice</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Specialized typing software, exam simulation tests, and dedicated guidance for clearing Haryana Hartron Data Entry Operator tests.
            </p>
          </div>
        </div>
      </section>

      {/* 3. FEATURED COURSES PREVIEW */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200/80 px-4">
        <div className="max-w-6xl mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-blue-900">Trending & Future-Ready</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">Featured Programs</h2>
            </div>
            <Link to="/courses" className="text-blue-900 font-bold hover:underline text-xs sm:text-sm flex items-center gap-1">
              View All Courses →
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredCourses.map((c) => (
              <div key={c.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md hover:-translate-y-1 transition duration-200">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {c.tag}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-500">{c.duration}</span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2 leading-snug">{c.title}</h3>
                  <p className="text-slate-600 text-xs leading-relaxed mb-6 line-clamp-3">{c.desc}</p>
                </div>
                <Link to="/contact" className="block text-center bg-slate-50 hover:bg-blue-900 hover:text-white text-blue-900 text-xs font-bold py-2.5 rounded-xl border border-slate-200 transition">
                  Inquire Now
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. STUDENT JOURNEY / CAREER PATH */}
      <section className="py-16 sm:py-20 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-900">Roadmap to Success</span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">Your Journey With Hartron</h2>
          <p className="text-slate-600 text-xs sm:text-sm mt-2">A structured 5-step path to turn learning into a career.</p>
        </div>

        {/* Responsive Steps Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
          {journeySteps.map((step, idx) => (
            <div 
              key={step.id} 
              className={`relative bg-white rounded-2xl p-6 shadow-xs hover:shadow-md transition-all duration-300 border border-slate-200/80 flex flex-col justify-between ${
                idx % 2 !== 0 ? 'lg:mt-6' : 'lg:mt-0'
              }`}
            >
              {/* Top Number Badge */}
              <div className={`absolute -top-4 left-6 lg:left-1/2 lg:-translate-x-1/2 w-9 h-9 ${step.badgeColor} text-white font-black text-xs rounded-xl flex items-center justify-center shadow-xs`}>
                {step.id}
              </div>

              <div className="pt-3 text-left lg:text-center">
                <h3 className="text-base font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{step.desc}</p>
              </div>

              {/* Bottom Color Bar */}
              <div className={`mt-6 h-1 w-full rounded-full ${step.badgeColor}`}></div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CALL TO ACTION BANNER */}
      <section className="py-12 sm:py-16 px-4 max-w-6xl mx-auto">
        <div className="bg-[#0f2257] rounded-3xl p-6 sm:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl relative overflow-hidden">
          
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <span className="text-yellow-400 font-extrabold text-xs tracking-widest uppercase">
              READY TO UPGRADE YOUR CAREER?
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight leading-tight">
              Visit Hartron Advanced Skill Center, Sheela bypass Rohtak Today
            </h2>
            <p className="text-slate-300 text-xs sm:text-base font-light leading-relaxed">
              Get personalized counseling, expert career guidance, and reserve your seat for the upcoming batches.
            </p>
          </div>

          <div className="shrink-0 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <Link 
              to="/contact" 
              className="w-full sm:w-auto bg-[#ffc000] hover:bg-yellow-400 text-blue-950 font-black px-6 py-3 rounded-xl text-center transition text-xs sm:text-sm shadow-md"
            >
              Contact Us Now
            </Link>

            <a 
              href="tel:+919653540612" 
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-xl text-center border border-white/20 transition flex items-center justify-center gap-2 text-xs sm:text-sm"
            >
              <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
              </svg>
              <span>Call Center</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}