import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';

const coursesList = [
    // ==========================================
    // HARTRON ADVANCE COURSES (Featured Programs)
    // ==========================================
    {
        id: "cywda",
        title: "Cyber Secured Web Development Associate (CYWDA)",
        category: "Advance Long Term Course",
        duration: "18 Months (990 Hours)",
        fee: "₹45,000",
        desc: "Develops secure web applications with in-depth knowledge of cybersecurity principles to protect against vulnerabilities.",
        highlights: ["Secure Coding", "Web Security", "Full-Stack Fundamentals"]
    },
    {
        id: "cssma",
        title: "Cyber Security & Social Media Analyst (CSSMA)",
        category: "Advance Long Term Course",
        duration: "1 Year (480 Hours)",
        fee: "₹30,000",
        desc: "Monitors and analyzes social media platforms for security threats, protecting organizations from digital risks.",
        highlights: ["Social Media Threat Analysis", "Digital Risk Management", "Reputation Protection"]
    },
    {
        id: "aiad",
        title: "Artificial Intelligence Application Developer (AIAD)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹30,000",
        desc: "Develops AI-powered applications that perform tasks like visual perception, decision-making, and automation.",
        highlights: ["AI Model Building", "Decision Systems", "Practical ML Applications"]
    },
    {
        id: "jcsa",
        title: "Cyber Security Associate (JCSA)",
        category: "Advance Long Term Course",
        duration: "1 Year (540 Hours)",
        fee: "₹30,000",
        desc: "Entry-level cybersecurity professional protecting systems and networks from digital attacks and unauthorized access.",
        highlights: ["Network Security", "Threat Prevention", "System Defense"]
    },
    {
        id: "jda",
        title: "Junior Data Analyst (JDA)",
        category: "Advance Long Term Course",
        duration: "1 Year (540 Hours)",
        fee: "₹27,500",
        desc: "Assists senior analysts in collecting, cleaning, and interpreting data to support data-driven business decisions.",
        highlights: ["Data Cleaning", "Business Intelligence", "Data Interpretation"]
    },
    {
        id: "iota",
        title: "Internet of Things Associate (IOTA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        desc: "Works with IoT devices and systems, assisting in connecting physical devices to networks and analyzing sensor data.",
        highlights: ["IoT Hardware & Sensors", "Network Connectivity", "Sensor Data Analysis"]
    },
    {
        id: "jcca",
        title: "Junior Cloud Computing Associate (JCCA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        desc: "Entry-level professional assisting in cloud-based solutions, learning to deploy and manage cloud applications.",
        highlights: ["Cloud Deployment", "Resource Management", "Infrastructure Basics"]
    },
    {
        id: "aia",
        title: "Artificial Intelligence Associate (AIA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        desc: "Entry-level AI professional assisting in developing AI solutions, with foundational knowledge of machine learning.",
        highlights: ["Foundational Machine Learning", "Data Processing", "AI Workflow"]
    },
    {
        id: "jcsa-junior",
        title: "Junior Cyber Security Associate (JCSA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        desc: "Begins career in cybersecurity, learning fundamental security concepts and assisting in basic protection measures.",
        highlights: ["Security Fundamentals", "Basic Threat Mitigation", "System Monitoring"]
    },
    {
        id: "daa",
        title: "Data Analysis Associate (DAA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        desc: "Assists in collecting, processing, and performing statistical analyses on datasets for data-driven decisions.",
        highlights: ["Statistical Analysis", "Data Processing", "Analytics Tooling"]
    },
    {
        id: "dma",
        title: "Digital Marketing Assistant (DMA)",
        category: "Advance Short Term Course",
        duration: "6 Months",
        fee: "₹25,000",
        desc: "Professional course covering all essential digital marketing modules, practical projects, and placement support.",
        highlights: ["SEO & Social Media", "Practical Campaigns", "Brand Building"]
    },
    {
        id: "ms-office-ai",
        title: "MS Office with AI",
        category: "Advance Short Term Course",
        duration: "3 Months",
        fee: "₹5,000 - ₹7,000",
        desc: "Master MS Office productivity tools (Word, Excel, PowerPoint) integrated with AI-powered features for smarter document creation, data analysis, and presentations.",
        highlights: ["AI-Powered Office Tools", "Smart Document Creation", "Data Analysis & Presentations"]
    },
    {
        id: "advance-excel-ai",
        title: "Advance Excel with AI",
        category: "Advance Short Term Course",
        duration: "2 - 3 Months",
        fee: "₹4,000 - ₹6,000",
        desc: "Advanced Excel skills including formulas, pivot tables, and dashboards, combined with AI tools for automated data insights and forecasting.",
        highlights: ["Advanced Formulas & Pivot Tables", "Interactive Dashboards", "AI-Powered Data Insights"]
    },
    {
        id: "generative-ai",
        title: "Generative AI",
        category: "Advance Short Term Course",
        duration: "3 Months",
        fee: "₹6,000 - ₹8,000",
        desc: "Learn to work with Generative AI models like ChatGPT for content creation, prompt engineering, automation, and building AI-driven workflows.",
        highlights: ["Prompt Engineering", "AI Content Generation", "Automation & AI Workflows"]
    }
];

const categories = ["All", "Advance Long Term Course", "Advance Short Term Course"];

const categoryBadgeStyles = {
    "Advance Long Term Course": "bg-purple-50 text-purple-800 border-purple-200",
    "Advance Short Term Course": "bg-cyan-50 text-cyan-800 border-cyan-200",
    "Skill Long Term Course": "bg-amber-50 text-amber-800 border-amber-200",
    "Skill Short Term Course": "bg-emerald-50 text-emerald-800 border-emerald-200"
};

const ROUTE_CATEGORY_MAP = [
    { keywords: ['advance-short-term', 'advance-short'], category: "Advance Short Term Course" },
    { keywords: ['advance-long-term', 'advance-long', 'diploma'], category: "Advance Long Term Course" },
    { keywords: ['skill-short'], category: "Skill Short Term Course" },
    { keywords: ['skill-long'], category: "Skill Long Term Course" }
];

export default function Courses() {
    const location = useLocation();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    // Auto-select Category based on path
    useEffect(() => {
        const path = location.pathname.toLowerCase();
        const matched = ROUTE_CATEGORY_MAP.find(route =>
            route.keywords.some(keyword => path.includes(keyword))
        );
        setSelectedCategory(matched ? matched.category : "All");
    }, [location.pathname]);

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
                                className={`px-5 py-2.5 text-sm font-semibold rounded-full transition-all duration-200 ${selectedCategory === cat
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
                    {filteredCourses.map((course) => (
                        <div
                            key={course.id}
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
                                    {course.highlights.map((h) => (
                                        <div key={h} className="flex items-center text-xs text-slate-700 font-medium">
                                            <span className="text-emerald-500 mr-2 font-bold">✓</span>
                                            <span>{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Card Footer */}
                            <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[10px] uppercase font-bold text-slate-400">Approx. Fee</span>
                                    <span className="font-bold text-blue-950 text-sm">{course.fee}</span>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex items-center gap-2">
                                    <Link
                                        to={`/course/${course.id}`}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors text-center shadow-xs"
                                    >
                                        View Course Details
                                    </Link>
                                    <Link
                                        to="/contact"
                                        state={{ selectedCourse: course.title, courseId: course.id }}
                                        className="flex-1 bg-blue-900 hover:bg-blue-800 text-white text-xs font-semibold py-2 px-3 rounded-lg transition-colors text-center shadow-xs"
                                    >
                                        Inquire Now →
                                    </Link>
                                </div>
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