import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Courses() {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Auto-select Category based on path
  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path.includes('advance-short-term') || path.includes('advance-short')) {
      setSelectedCategory("Hartron Advance Short Term Course");
    } else if (path.includes('advance-long-term') || path.includes('advance-long') || path.includes('diploma')) {
      setSelectedCategory("Hartron Advance Long Term Course");
    } else if (path.includes('skill-short')) {
      setSelectedCategory("Skill Short Term Course");
    } else if (path.includes('skill-long')) {
      setSelectedCategory("Skill Long Term Course");
    } else {
      setSelectedCategory("All");
    }
  }, [location.pathname]);

  const coursesList = [
    // ==========================================
    // 1. HARTRON ADVANCE COURSES (Featured Programs)
    // ==========================================
    {
      title: "Day Boarding Course (AI, Cyber Security & Digital Marketing)",
      category: "Hartron Advance Long Term Course",
      duration: "18 Months",
      fee: "₹1,30,000",
      desc: "Comprehensive program combining AI, Cyber Security, Web Development, and Digital Marketing with 100% placement assistance.",
      highlights: ["Hands-on Projects", "Industry Mentors", "100% Placement Support"]
    },
    {
      title: "Cyber Secured Web Development Associate (CYWDA)",
      category: "Hartron Advance Long Term Course",
      duration: "18 Months (990 Hours)",
      fee: "₹45,000",
      desc: "Develops secure web applications with in-depth knowledge of cybersecurity principles to protect against vulnerabilities.",
      highlights: ["Secure Coding", "Web Security", "Full-Stack Fundamentals"]
    },
    {
      title: "Cyber Security & Social Media Analyst (CSSMA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (480 Hours)",
      fee: "₹30,000",
      desc: "Monitors and analyzes social media platforms for security threats, protecting organizations from digital risks.",
      highlights: ["Social Media Threat Analysis", "Digital Risk Management", "Reputation Protection"]
    },
    {
      title: "Artificial Intelligence Application Developer (AIAD)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (450 Hours)",
      fee: "₹30,000",
      desc: "Develops AI-powered applications that perform tasks like visual perception, decision-making, and automation.",
      highlights: ["AI Model Building", "Decision Systems", "Practical ML Applications"]
    },
    {
      title: "Cyber Security Associate (JCSA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (540 Hours)",
      fee: "₹30,000",
      desc: "Entry-level cybersecurity professional protecting systems and networks from digital attacks and unauthorized access.",
      highlights: ["Network Security", "Threat Prevention", "System Defense"]
    },
    {
      title: "Junior Data Analyst (JDA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (540 Hours)",
      fee: "₹27,500",
      desc: "Assists senior analysts in collecting, cleaning, and interpreting data to support data-driven business decisions.",
      highlights: ["Data Cleaning", "Business Intelligence", "Data Interpretation"]
    },
    {
      title: "Internet of Things Associate (IOTA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (450 Hours)",
      fee: "₹25,000",
      desc: "Works with IoT devices and systems, assisting in connecting physical devices to networks and analyzing sensor data.",
      highlights: ["IoT Hardware & Sensors", "Network Connectivity", "Sensor Data Analysis"]
    },
    {
      title: "Junior Cloud Computing Associate (JCCA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (450 Hours)",
      fee: "₹25,000",
      desc: "Entry-level professional assisting in cloud-based solutions, learning to deploy and manage cloud applications.",
      highlights: ["Cloud Deployment", "Resource Management", "Infrastructure Basics"]
    },
    {
      title: "Artificial Intelligence Associate (AIA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (450 Hours)",
      fee: "₹25,000",
      desc: "Entry-level AI professional assisting in developing AI solutions, with foundational knowledge of machine learning.",
      highlights: ["Foundational Machine Learning", "Data Processing", "AI Workflow"]
    },
    {
      title: "Junior Cyber Security Associate (JCSA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (450 Hours)",
      fee: "₹25,000",
      desc: "Begins career in cybersecurity, learning fundamental security concepts and assisting in basic protection measures.",
      highlights: ["Security Fundamentals", "Basic Threat Mitigation", "System Monitoring"]
    },
    {
      title: "Data Analysis Associate (DAA)",
      category: "Hartron Advance Long Term Course",
      duration: "1 Year (450 Hours)",
      fee: "₹25,000",
      desc: "Assists in collecting, processing, and performing statistical analyses on datasets for data-driven decisions.",
      highlights: ["Statistical Analysis", "Data Processing", "Analytics Tooling"]
    },
    {
      title: "Digital Marketing Assistant (DMA)",
      category: "Hartron Advance Short Term Course",
      duration: "6 Months",
      fee: "₹25,000",
      desc: "Professional course covering all essential digital marketing modules, practical projects, and placement support.",
      highlights: ["SEO & Social Media", "Practical Campaigns", "Brand Building"]
    },
    {
      title: "MS Office with AI",
      category: "Hartron Advance Short Term Course",
      duration: "3 Months",
      fee: "₹5,000 - ₹7,000",
      desc: "Master MS Office productivity tools (Word, Excel, PowerPoint) integrated with AI-powered features for smarter document creation, data analysis, and presentations.",
      highlights: ["AI-Powered Office Tools", "Smart Document Creation", "Data Analysis & Presentations"]
    },
    {
      title: "Advance Excel with AI",
      category: "Hartron Advance Short Term Course",
      duration: "2 - 3 Months",
      fee: "₹4,000 - ₹6,000",
      desc: "Advanced Excel skills including formulas, pivot tables, and dashboards, combined with AI tools for automated data insights and forecasting.",
      highlights: ["Advanced Formulas & Pivot Tables", "Interactive Dashboards", "AI-Powered Data Insights"]
    },
    {
      title: "Generative AI",
      category: "Hartron Advance Short Term Course",
      duration: "3 Months",
      fee: "₹6,000 - ₹8,000",
      desc: "Learn to work with Generative AI models like ChatGPT for content creation, prompt engineering, automation, and building AI-driven workflows.",
      highlights: ["Prompt Engineering", "AI Content Generation", "Automation & AI Workflows"]
    },

    // ==========================================
    // 2. HARTRON SKILL COURSES - LONG TERM
    // ==========================================
    {
      title: "Course in Computer Application (CCA)",
      category: "Skill Long Term Course",
      duration: "6 Months - 1 Year",
      fee: "₹8,000 - ₹12,000",
      desc: "Foundational course in computer applications, office productivity tools, and essential digital skills.",
      highlights: ["Computer Fundamentals", "MS Office Tools", "Internet & Communication"]
    },
    {
      title: "Advanced Course in Computer Application (ACCA)",
      category: "Skill Long Term Course",
      duration: "1 Year",
      fee: "₹12,000 - ₹15,000",
      desc: "Advanced training in office automation, database management, web browsing, and IT applications.",
      highlights: ["Advanced MS Office", "DBMS Fundamentals", "IT Operations"]
    },
    {
      title: "Course in Software Development (CSD)",
      category: "Skill Long Term Course",
      duration: "1 Year",
      fee: "₹15,000 - ₹20,000",
      desc: "Learn core software engineering concepts, programming languages, and application development workflows.",
      highlights: ["Software Engineering", "Logic Building", "App Development"]
    },
    {
      title: "Course in Digital Accounting (CDA)",
      category: "Skill Long Term Course",
      duration: "6 Months",
      fee: "₹6,000 - ₹9,000",
      desc: "Comprehensive practical training on computer accounting tools, Tally, GST, and business finance.",
      highlights: ["Tally & GST", "E-Filing Fundamentals", "Business Accounting"]
    },
    {
      title: "Course in Designing and Publishing (CDP)",
      category: "Skill Long Term Course",
      duration: "6 Months",
      fee: "₹8,000 - ₹10,000",
      desc: "Master Desktop Publishing (DTP), graphics creation, layouts, and vector design for print and web media.",
      highlights: ["Photoshop & CorelDRAW", "Layout Designing", "DTP & Graphic Tools"]
    },
    {
      title: "Computer Hardware and Networking Associate",
      category: "Skill Long Term Course",
      duration: "1 Year",
      fee: "₹10,000 - ₹14,000",
      desc: "Hands-on expertise in PC hardware troubleshooting, assembly, network configuration, and OS setup.",
      highlights: ["Hardware Repair", "LAN/WAN Networking", "System Troubleshooting"]
    },
    {
      title: "Course in Web Technology (CWT)",
      category: "Skill Long Term Course",
      duration: "6 Months - 1 Year",
      fee: "₹10,000 - ₹15,000",
      desc: "Focuses on front-end web design, HTML, CSS, JavaScript, and creating responsive web applications.",
      highlights: ["HTML5 & CSS3", "JavaScript Basics", "Responsive Web Design"]
    },

    // ==========================================
    // 3. HARTRON SKILL COURSES - SHORT TERM
    // ==========================================
    {
      title: "Programming with Python",
      category: "Skill Short Term Course",
      duration: "2 Months",
      fee: "₹4,500 - ₹6,000",
      desc: "Master core Python syntax, data types, object-oriented concepts, and basic scripting techniques.",
      highlights: ["Python Syntax & Logic", "OOPs Concepts", "Scripting & Mini Projects"]
    },
    {
      title: "Java Programming Fundamentals",
      category: "Skill Short Term Course",
      duration: "2 - 3 Months",
      fee: "₹4,500 - ₹6,500",
      desc: "Basic to intermediate Java programming, covering OOPs, control structures, and array management.",
      highlights: ["Core Java Logic", "OOPs Architecture", "Input/Output Handling"]
    },
    {
      title: "C++ Programming with OOP Concepts",
      category: "Skill Short Term Course",
      duration: "2 Months",
      fee: "₹3,500 - ₹5,000",
      desc: "Learn Object-Oriented Programming principles using C++, classes, inheritance, pointers, and memory control.",
      highlights: ["Classes & Objects", "Inheritance & Polymorphism", "Pointer Management"]
    },
    {
      title: "PHP and MySQL Web Development",
      category: "Skill Short Term Course",
      duration: "3 Months",
      fee: "₹5,000 - ₹7,500",
      desc: "Build dynamic websites with server-side PHP programming and relational MySQL database connectivity.",
      highlights: ["Server-side Scripting", "MySQL Relational DB", "Dynamic Form Handling"]
    },
    {
      title: "Advanced Java Programming",
      category: "Skill Short Term Course",
      duration: "3 Months",
      fee: "₹6,000 - ₹8,500",
      desc: "Advanced topics including JDBC, Servlets, JSP, multithreading, and backend enterprise application design.",
      highlights: ["JDBC Connectivity", "Servlets & JSP", "Multithreading & APIs"]
    },
    {
      title: "Professional Financial Accounting",
      category: "Skill Short Term Course",
      duration: "2 - 3 Months",
      fee: "₹4,000 - ₹6,000",
      desc: "Practical business accounting principles, balance sheet maintenance, voucher entries, and taxation.",
      highlights: ["Voucher & Bookkeeping", "Financial Statements", "GST & Taxation"]
    },
    {
      title: "Fundamentals of Computer",
      category: "Skill Short Term Course",
      duration: "1 - 2 Months",
      fee: "₹2,000 - ₹3,000",
      desc: "Entry-level computer literacy program covering OS navigation, internet safety, and MS Office basics.",
      highlights: ["Windows Navigation", "MS Word & Excel", "Email & Web Browsing"]
    },
    {
      title: "C Language Programming Course (CLC)",
      category: "Skill Short Term Course",
      duration: "2 Months",
      fee: "₹3,000 - ₹4,500",
      desc: "Build strong foundational logic using C language, data types, loops, arrays, pointers, and structures.",
      highlights: ["Logic Building", "Pointers & Memory", "Functions & Arrays"]
    },
    {
      title: "Fundamentals of Cyber Security",
      category: "Skill Short Term Course",
      duration: "2 Months",
      fee: "₹4,500 - ₹6,500",
      desc: "Introduction to threat landscapes, web safety, basic network security controls, and ethical hacking concepts.",
      highlights: ["Network Basics", "Threat Prevention", "Cyber Safety Rules"]
    }
  ];

  const categories = ["All", "Hartron Advance Long Term Course", "Hartron Advance Short Term Course", "Skill Long Term Course", "Skill Short Term Course"];

  const categoryBadgeStyles = {
    "Hartron Advance Long Term Course": "bg-purple-50 text-purple-800 border-purple-200",
    "Hartron Advance Short Term Course": "bg-cyan-50 text-cyan-800 border-cyan-200",
    "Skill Long Term Course": "bg-amber-50 text-amber-800 border-amber-200",
    "Skill Short Term Course": "bg-emerald-50 text-emerald-800 border-emerald-200"
  };

  const filteredCourses = coursesList.filter(course => {
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Title Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 tracking-tight">
            Our Certified Courses
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
            Enhance your IT and professional skills with government-recognized Hartron courses designed for job readiness.
          </p>
        </div>

        {/* Filter & Search Bar Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  selectedCategory === cat
                    ? "bg-blue-900 text-white shadow-md"
                    : "bg-white text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="🔍 Search course..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 shadow-sm"
            />
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1"
            >
              <div className="p-6">
                {/* Category Tag & Duration */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-md border ${categoryBadgeStyles[course.category] ?? 'bg-slate-100 text-slate-700 border-slate-200'}`}>
                    {course.category}
                  </span>
                  <div className="flex items-center text-xs font-semibold text-slate-500">
                    ⏱️ {course.duration}
                  </div>
                </div>

                {/* Course Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-2 leading-snug">
                  {course.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                  {course.desc}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 mb-4">
                  {course.highlights.map((h, i) => (
                    <div key={i} className="flex items-center text-xs text-slate-700 font-medium">
                      <span className="text-emerald-500 mr-2 font-bold">✓</span>
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400">Approx. Fee</span>
                  <div className="flex items-center font-bold text-blue-950 text-sm">
                    {course.fee}
                  </div>
                </div>
                
                <Link
                  to="/contact"
                  state={{ selectedCourse: course.title }}
                  className="bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors inline-block text-center shadow-xs"
                >
                  Inquire Now →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredCourses.length === 0 && (
          <div className="text-center py-12 text-slate-500 font-medium">
            No courses found matching your criteria.
          </div>
        )}

      </div>
    </div>
  );
}

