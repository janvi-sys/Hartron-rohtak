import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function InternshipNotice() {
  const [showNotice, setShowNotice] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    if (params.get('notice') === 'open') {
      setShowNotice(true);
    }
  }, [location.search]);

  return (
    <div className="max-w-4xl mx-auto my-6 px-4 animate-fadeIn">
      {/* Trigger Button */}
      <button
        onClick={() => setShowNotice(!showNotice)}
        className="w-full flex items-center justify-between bg-gradient-to-r from-blue-900 to-[#0066b2] hover:from-blue-800 hover:to-[#005596] text-white p-4 rounded-2xl shadow-md transition-all duration-300 border border-blue-700"
      >
        <div className="flex items-center gap-3 text-left">
          <span className="bg-[#ffc107] text-slate-900 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shrink-0">
            ⚡ IMPORTANT NOTICE
          </span>
          <span className="font-bold text-sm sm:text-base line-clamp-1">
            College/University Students Mandatory Internship Notice
          </span>
        </div>
        
        <div className="flex items-center gap-2 text-xs font-bold bg-white/10 px-3 py-1.5 rounded-xl ml-2 shrink-0">
          <span>{showNotice ? "Hide Notice" : "Click to View Notice"}</span>
          <span className={`transform transition-transform duration-300 text-sm ${showNotice ? "rotate-180" : "rotate-0"}`}>
            ▼
          </span>
        </div>
      </button>

      {/* Collapsible Content */}
      {showNotice && (
        <div className="mt-3 bg-[#0066b2] text-white py-8 px-6 text-center rounded-2xl shadow-lg border border-blue-600">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 bg-[#ffc107] text-slate-900 font-extrabold text-xs sm:text-sm px-5 py-2 rounded-full shadow-xs">
              <span>⚡</span>
              <span>Important Notice / महत्वपूर्ण सूचना</span>
            </div>

            <h2 className="text-lg sm:text-2xl md:text-3xl font-extrabold leading-snug tracking-tight">
              सभी College और University के छात्रों के लिए: अब आपकी डिग्री के लिए Internship करना अनिवार्य (Compulsory) है।
            </h2>

            <p className="text-xs sm:text-sm md:text-base text-blue-100 font-medium max-w-3xl mx-auto">
              Hartron Advanced Skill Centre लेकर आया है एक सुनहरा मौका — Corporate Expert Trainers से लेटेस्ट AI टेक्नोलॉजी सीखें।
            </p>

            <div className="pt-2">
              <Link
                to="/contact"
                state={{ selectedCourse: "College Internship Program" }}
                className="inline-block bg-[#ffc107] hover:bg-yellow-400 text-slate-900 font-extrabold text-xs sm:text-sm px-6 py-2.5 rounded-xl shadow-md transition"
              >
                Apply for Internship Now →
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}