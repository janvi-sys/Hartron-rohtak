import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Contact() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    course: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  // Auto-fill course name if redirected from Courses or Home page
  useEffect(() => {
    if (location.state && location.state.selectedCourse) {
      setFormData((prev) => ({ ...prev, course: location.state.selectedCourse }));
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fullName || !formData.mobile) {
      alert("Please fill in your name and mobile number.");
      return;
    }
    // Form submission logic (e.g., API call or Email handling)
    setIsSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-blue-900 tracking-wider uppercase bg-blue-100 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Contact Hartron Advanced Skill Center Rohtak
          </h1>
          <p className="text-slate-600 text-xs sm:text-sm max-w-xl mx-auto">
            Have questions regarding courses, fees, or admissions? Send us a query or call our counselor directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Contact Details Card */}
          <div className="bg-blue-950 text-white p-6 sm:p-8 rounded-2xl shadow-md space-y-6 lg:col-span-1">
            <h2 className="text-xl font-bold border-b border-blue-800 pb-3">Contact Details</h2>
            
            <div className="space-y-4 text-xs sm:text-sm font-light">
              <div className="flex items-start gap-3">
                <span className="text-lg">📍</span>
                <div>
                  <strong className="block font-semibold text-white">Address:</strong>
                  <p className="text-slate-300 mt-0.5">
                    Hartron Advanced Skill Center, 1st Floor Meghna Complex, Near Sheela by-Pass, Rohtak, Haryana
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">📞</span>
                <div>
                  <strong className="block font-semibold text-white">Call Us:</strong>
                  <a href="tel:+91 9653540612" className="text-yellow-400 font-bold hover:underline">
                    +91 9653540612
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-lg">⏰</span>
                <div>
                  <strong className="block font-semibold text-white">Center Timings:</strong>
                  <p className="text-slate-300 mt-0.5">Mon - Sat: 8:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-blue-800/80">
              <span className="text-xs text-yellow-400 font-semibold block mb-1">Government Authorized</span>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Official IT skill development center under HARTRON (Haryana State Electronics Development Corp. Ltd.)
              </p>
            </div>
          </div>

          {/* Form Container */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs lg:col-span-2">
            {isSubmitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 text-3xl font-bold rounded-full flex items-center justify-center mx-auto">
                  ✓
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Query Submitted Successfully!</h3>
                <p className="text-slate-600 text-xs sm:text-sm max-w-md mx-auto">
                  Thank you <strong>{formData.fullName}</strong>. Our counselor will get back to you shortly on <strong>{formData.mobile}</strong>.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ fullName: '', mobile: '', course: '', message: '' });
                  }}
                  className="mt-4 text-xs font-bold text-blue-900 bg-blue-50 px-4 py-2 rounded-xl hover:bg-blue-100 transition"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-slate-700 text-xs font-bold mb-1.5">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                    placeholder="e.g. Rahul Sharma"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                      placeholder="10-digit Mobile Number"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 text-xs font-bold mb-1.5">
                      Interested Course
                    </label>
                    <input
                      type="text"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition"
                      placeholder="e.g. CYWDA, Python, DEO"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 text-xs font-bold mb-1.5">
                    Your Message / Question (Optional)
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition resize-none"
                    placeholder="Ask about batch timings, fees, certification, etc."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-3.5 rounded-xl text-xs sm:text-sm shadow-md transition-all duration-200"
                >
                  Submit Query →
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}