import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const coursesData = {
    cywda: {
        id: "cywda",
        title: "Cyber Secured Web Development Associate (CYWDA)",
        category: "Advance Long Term Course",
        duration: "18 Months (990 Hours)",
        fee: "₹45,000",
        nsqfLevel: "4.0",
        eligibility: [
            "12th Grade Pass from a recognized board",
            "Completed 2nd year of 3-year diploma",
            "10th Grade Pass + 2-year NTC"
        ],
        description:
            "Develops secure web applications with in-depth knowledge of cybersecurity principles to protect against vulnerabilities, malware, OWASP threats, and unauthorized access.",
        highlights: [
            "100% Placement Support",
            "Live Cyber Labs & Simulated Scenarios",
            "Global & Govt Recognized Certifications",
            "Live Industry Projects & Hackathons"
        ],
        credentials: [
            "Certified Secure Web Application Developer",
            "OWASP Security Certification",
            "Cybersecurity Fundamentals Certificate"
        ],
        // batchTimings: [
        //     { time: "8:00 AM", session: "Morning Batch", duration: "2 Hours", seats: "1 Seat Available" },
        //     { time: "9:00 AM", session: "Morning Batch", duration: "2 Hours", seats: "3 Seats Available" },
        //     { time: "10:00 AM", session: "Morning Batch", duration: "2 Hours", seats: "1 Seat Available" },
        //     { time: "11:00 AM", session: "Morning Batch", duration: "2 Hours", seats: "3 Seats Available" },
        //     { time: "12:00 PM", session: "Evening Batch", duration: "2 Hours", seats: "2 Seats Available" },
        //     { time: "1:00 PM", session: "Evening Batch", duration: "2 Hours", seats: "4 Seats Available" },
        //     { time: "2:00 PM", session: "Evening Batch", duration: "2 Hours", seats: "1 Seat Available" },
        //     { time: "3:00 PM", session: "Evening Batch", duration: "2 Hours", seats: "3 Seats Available" },
        //     { time: "4:00 PM", session: "Evening Batch", duration: "2 Hours", seats: "5 Seats Available" }
        // ],
        // certifications: [
        //     {
        //         title: "Certified CYWDA - HARTRON HASC",
        //         issuer: "Hartron Advance Skill Centre",
        //         validity: "Lifetime",
        //         recognition: "Government & Industry Recognized",
        //         desc: "Validates expertise in developing secure web applications following state & national standards."
        //     },
        //     {
        //         title: "OWASP Security Certification",
        //         issuer: "Open Web Application Security Project",
        //         validity: "3 Years",
        //         recognition: "Global Industry Standard",
        //         desc: "Globally recognized certification in web application security and vulnerability defense."
        //     },
        //     {
        //         title: "Cyber Security Fundamentals",
        //         issuer: "NIELIT / Government of India",
        //         validity: "Lifetime",
        //         recognition: "National Skill Level 4.0 Alignment",
        //         desc: "NSQF Level 4 certification in cybersecurity fundamentals and network safety."
        //     },
        //     {
        //         title: "Web Development Associate",
        //         issuer: "Skill India",
        //         validity: "Lifetime",
        //         recognition: "National Skill Qualification Framework",
        //         desc: "Government recognized certification in full-stack web application development."
        //     }
        // ],
        // curriculum: [
        //     {
        //         module: "01",
        //         title: "Computer Fundamentals and Operating System",
        //         topicsCount: "5 topics",
        //         desc: "Core computer architecture, OS concepts, file systems, user permission control, and command line interface."
        //     },
        //     {
        //         module: "02",
        //         title: "Fundamentals of Internet and Computer Network",
        //         topicsCount: "4 topics",
        //         desc: "TCP/IP protocols, DNS, IP addressing, HTTP/HTTPS mechanisms, routers, and network security basics."
        //     },
        //     {
        //         module: "03",
        //         title: "Web Application Development",
        //         topicsCount: "15 topics",
        //         desc: "HTML5, CSS3, JavaScript, React.js, Node.js, Express, REST APIs, and database design (SQL/NoSQL)."
        //     },
        //     {
        //         module: "04",
        //         title: "Cyber Security & Web App Penetration Testing",
        //         topicsCount: "28 topics",
        //         desc: "OWASP Top 10 vulnerabilities, SQL Injection, XSS, CSRF, secure authentication, WAF, and penetration testing."
        //     },
        //     {
        //         module: "05",
        //         title: "Data Structure and Algorithm Associate (DSA)",
        //         topicsCount: "91 topics",
        //         desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Sorting algorithms, and algorithmic complexity optimization."
        //     },
        //     {
        //         module: "06",
        //         title: "Employability Skills",
        //         topicsCount: "11 topics",
        //         desc: "Communication skills, technical resume building, 1:1 mock technical interviews, and corporate etiquette."
        //     }
        // ],
        // programHighlights: [
        //     { title: "AI-Powered Learning", desc: "Adaptive learning paths with AI-driven personalized content and real-time progress tracking." },
        //     { title: "Live Cyber Labs", desc: "Real-time virtual labs with simulated cyber attack and defense scenarios." },
        //     { title: "MAANG & Industry Faculty", desc: "Learn from veterans with real-world cybersecurity experience at top tech organizations." },
        //     { title: "Live Projects & Hackathons", desc: "Hands-on security challenges and real-world penetration testing exercises." },
        //     { title: "24/7 Doubt Resolution", desc: "Instant expert support for all cybersecurity concepts and coding challenges." },
        //     { title: "Career Mentorship", desc: "1:1 career guidance, resume building, and placement preparation." }
        // ],
        // studentPortfolios: [
        //     { name: "Harkaran", role: "Cyber Security Web Developer Associate", tags: ["HTML", "Tailwind CSS", "JavaScript", "GitHub", "React.js"] },
        //     { name: "Kunal Bansal", role: "Cyber Security Web Developer Associate", tags: ["HTML", "Tailwind CSS", "JavaScript", "GitHub", "React.js"] },
        //     { name: "Ayush Chaudhary", role: "Cyber Security Web Developer Associate", tags: ["HTML", "Tailwind CSS", "JavaScript", "GitHub", "React.js"] },
        //     { name: "Simran", role: "Cyber Security Web Developer Associate", tags: ["HTML", "Tailwind CSS", "JavaScript", "GitHub", "React.js"] },
        //     { name: "Lakshya", role: "Cyber Security Web Developer Associate", tags: ["HTML", "Tailwind CSS", "JavaScript", "GitHub", "React.js"] }
        // ],
        // instructors: [
        //     { name: "Mr. Ravi Singh", domain: "Cyber Security & Web Defense", experience: "4.5+ Years Experience" },
        //     { name: "Mr. Rajesh Kaushik", domain: "Digital Technologies & Marketing", experience: "15+ Years Experience" }
        // ],
        // faqs: [
        //     {
        //         question: "What are the prerequisites for the Cyber Security Web Development program?",
        //         answer: "Minimum 12th pass from a recognized board, or 10th pass + 2-year NTC, or completed 2nd year of a 3-year diploma. Basic familiarity with computers is recommended."
        //     },
        //     {
        //         question: "How is this CYWDA course different from other web development courses?",
        //         answer: "CYWDA integrates full-stack web development with deep cyber security and penetration testing. You learn to build applications that are inherently secure against OWASP Top 10 vulnerabilities."
        //     },
        //     {
        //         question: "What placement support is provided?",
        //         answer: "Hartron provides 100% placement assistance, including mock technical interviews, resume building, portfolio preparation, and direct placement drives with partner IT companies."
        //     },
        //     {
        //         question: "Are the certifications globally recognized?",
        //         answer: "Yes, upon completion you receive government-recognized Hartron certification aligned with NSQF Level 4.0, along with OWASP and NIELIT credentials."
        //     }
        // ],
        // skills: [
        //     "HTML5, CSS3, & Modern JavaScript",
        //     "React.js & Front-end Architecture",
        //     "Node.js, Express & REST API Security",
        //     "OWASP Top 10 Web Vulnerabilities",
        //     "Penetration Testing & Security Auditing",
        //     "Database Management (SQL & NoSQL)",
        //     "Web Application Firewall (WAF) & Deployment"
        // ],
        // careerRoles: [
        //     "Full-Stack Web Developer",
        //     "Web Security Associate",
        //     "Cyber Security Analyst",
        //     "Penetration Tester Trainee"
        // ]
    },

    cssma: {
        id: "cssma",
        title: "Cyber Security & Social Media Analyst (CSSMA)",
        category: "Advance Long Term Course",
        duration: "1 Year (480 Hours)",
        fee: "₹30,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass", "Basic Computer Knowledge"],
        description:
            "Monitors and analyzes social media platforms for security threats, protecting organizations from digital risks, brand impersonation, and online fraud.",
        highlights: [
            "Social Media Threat Intelligence",
            "Digital Risk & Reputation Defense",
            "100% Placement Assistance"
        ],
        skills: [
            "Social Media Threat Analysis",
            "OSINT & Threat Intelligence",
            "Cyber Hygiene & Phishing Mitigation",
            "Brand Protection & Risk Monitoring"
        ],
        careerRoles: [
            "Social Media Analyst",
            "Cyber Risk Analyst",
            "Brand Protection Specialist"
        ]
    },

    aiad: {
        id: "aiad",
        title: "Artificial Intelligence Application Developer (AIAD)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹30,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass with Mathematics/Computer Science"],
        description:
            "Develops AI-powered applications that perform visual perception, automated decision-making, natural language processing, and predictive analytics.",
        highlights: [
            "Practical Machine Learning",
            "Deep Learning & Computer Vision",
            "AI Model Deployment"
        ],
        skills: [
            "Python & Data Science Stack",
            "Machine Learning Algorithms",
            "OpenCV Computer Vision",
            "Neural Networks & TensorFlow"
        ],
        careerRoles: [
            "AI Application Developer",
            "Machine Learning Associate",
            "AI Automation Specialist"
        ]
    },

    jcsa: {
        id: "jcsa",
        title: "Cyber Security Associate (JCSA)",
        category: "Advance Long Term Course",
        duration: "1 Year (540 Hours)",
        fee: "₹30,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Entry-level cybersecurity professional protecting systems and networks from digital attacks, unauthorized access, and infrastructure vulnerabilities.",
        highlights: [
            "Network Defense & Architecture",
            "SOC Incident Response",
            "Ethical Hacking Fundamentals"
        ],
        skills: [
            "TCP/IP Networking & Subnetting",
            "Ethical Hacking Basics",
            "Firewalls & Log Analysis",
            "System Defense & Hardening"
        ],
        careerRoles: [
            "Cyber Security Associate",
            "SOC Analyst Tier-1",
            "Network Security Administrator"
        ]
    },

    jda: {
        id: "jda",
        title: "Junior Data Analyst (JDA)",
        category: "Advance Long Term Course",
        duration: "1 Year (540 Hours)",
        fee: "₹27,500",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Assists senior analysts in collecting, cleaning, transforming, and interpreting data to support data-driven business decisions.",
        highlights: [
            "Data Cleaning & Wrangling",
            "Interactive Dashboards",
            "Business Intelligence Analytics"
        ],
        skills: [
            "Advanced Excel & Pivot Tables",
            "SQL Database Queries",
            "Python Pandas & NumPy",
            "Power BI / Tableau Dashboards"
        ],
        careerRoles: [
            "Junior Data Analyst",
            "Business Intelligence Specialist",
            "Data Reporting Specialist"
        ]
    },

    iota: {
        id: "iota",
        title: "Internet of Things Associate (IOTA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Works with IoT hardware and microcontrollers, connecting physical devices to networks and analyzing sensor data in real-time.",
        highlights: [
            "Arduino & Raspberry Pi",
            "Smart Sensor Interfacing",
            "IoT Cloud Automation"
        ],
        skills: [
            "Microcontroller Programming",
            "Sensors & Actuators",
            "MQTT & Wireless Protocols",
            "Embedded C & Python"
        ],
        careerRoles: [
            "IoT Associate",
            "Smart Automation Specialist",
            "Embedded Systems Developer"
        ]
    },

    jcca: {
        id: "jcca",
        title: "Junior Cloud Computing Associate (JCCA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Assists in designing cloud-based infrastructure, learning to deploy, scale, and manage cloud applications on AWS and Azure.",
        highlights: [
            "AWS & Azure Infrastructure",
            "Cloud Deployment & Containers",
            "Linux Server Administration"
        ],
        skills: [
            "AWS & Azure Cloud Basics",
            "Linux Server Commands",
            "Docker Containerization",
            "Cloud Storage & Security"
        ],
        careerRoles: [
            "Cloud Support Associate",
            "Junior DevOps Technician",
            "Systems Administrator Assistant"
        ]
    },

    aia: {
        id: "aia",
        title: "Artificial Intelligence Associate (AIA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Entry-level AI professional assisting in developing AI solutions, with foundational knowledge of machine learning models and data preprocessing.",
        highlights: [
            "Machine Learning Fundamentals",
            "Feature Engineering",
            "AI Workflow Lifecycle"
        ],
        skills: [
            "Python Basics",
            "Supervised & Unsupervised ML",
            "Scikit-Learn Framework",
            "Data Cleaning Techniques"
        ],
        careerRoles: [
            "AI Assistant",
            "Junior Data Science Trainee",
            "Analytics Associate"
        ]
    },

    "jcsa-junior": {
        id: "jcsa-junior",
        title: "Junior Cyber Security Associate (JCSA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Begins career in cybersecurity, learning fundamental security concepts, cyber hygiene, and assisting in basic network protection measures.",
        highlights: [
            "Security Fundamentals",
            "Threat Mitigation",
            "System Monitoring"
        ],
        skills: [
            "Cybersecurity Basics",
            "Antivirus & Ransomware Defense",
            "Network Scanning Basics",
            "Data Backup & Encryption"
        ],
        careerRoles: [
            "Junior Security Analyst",
            "IT Support Assistant"
        ]
    },

    daa: {
        id: "daa",
        title: "Data Analysis Associate (DAA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Assists in collecting, processing, and performing statistical analyses on datasets for data-driven corporate decision making.",
        highlights: [
            "Statistical Analysis",
            "Data Processing Workflows",
            "Analytics Tooling"
        ],
        skills: [
            "Data Cleaning Techniques",
            "Excel Data Modeling",
            "SQL Query Essentials",
            "Data Visualization"
        ],
        careerRoles: [
            "Data Analyst Associate",
            "Operations Reporting Analyst"
        ]
    },

    dma: {
        id: "dma",
        title: "Digital Marketing Assistant (DMA)",
        category: "Advance Short Term Course",
        duration: "6 Months",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Professional course covering all essential digital marketing modules, practical live ad campaigns, SEO, and brand building strategies.",
        highlights: [
            "SEO & Google Ads",
            "Social Media Marketing",
            "Content Strategy & Analytics"
        ],
        skills: [
            "Search Engine Optimization (SEO)",
            "Google Ads (PPC)",
            "Meta Ads & Social Media Marketing",
            "Google Analytics 4"
        ],
        careerRoles: [
            "Digital Marketing Executive",
            "SEO Specialist",
            "Social Media Coordinator"
        ]
    },

    "ms-office-ai": {
        id: "ms-office-ai",
        title: "MS Office with AI",
        category: "Advance Short Term Course",
        duration: "3 Months",
        fee: "₹5,000 - ₹7,000",
        nsqfLevel: "4.0",
        eligibility: ["10th / 12th Grade Pass"],
        description:
            "Master MS Office productivity tools (Word, Excel, PowerPoint) integrated with AI features for smarter document creation, data processing, and presentations.",
        highlights: [
            "AI-Powered Office Tools",
            "Smart Document & Presentation Creation",
            "Office Productivity Automation"
        ],
        skills: [
            "MS Word Advanced Layouts & Copilot",
            "MS Excel Data Processing",
            "MS PowerPoint AI Slide Generator",
            "Document Automation"
        ],
        careerRoles: [
            "Office Assistant / Executive",
            "Administrative Assistant",
            "Documentation Specialist"
        ]
    },

    "advance-excel-ai": {
        id: "advance-excel-ai",
        title: "Advance Excel with AI",
        category: "Advance Short Term Course",
        duration: "2 - 3 Months",
        fee: "₹4,000 - ₹6,000",
        nsqfLevel: "4.0",
        eligibility: ["10th / 12th Grade Pass"],
        description:
            "Advanced Excel skills including lookup formulas, pivot tables, and dashboards, combined with AI tools for automated data insights and forecasting.",
        highlights: [
            "Advanced Formulas & Pivot Tables",
            "Interactive Dashboards & Power Query",
            "AI Data Insights"
        ],
        skills: [
            "XLOOKUP, VLOOKUP, INDEX-MATCH",
            "Pivot Tables & Slicers",
            "Power Query Data Cleaning",
            "AI Prompting in Excel"
        ],
        careerRoles: [
            "MIS Reporting Executive",
            "Excel Data Specialist",
            "Operations Analyst"
        ]
    },

    "generative-ai": {
        id: "generative-ai",
        title: "Generative AI",
        category: "Advance Short Term Course",
        duration: "3 Months",
        fee: "₹6,000 - ₹8,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass / Graduation"],
        description:
            "Learn to work with Generative AI models like ChatGPT, Claude, and Midjourney for content creation, prompt engineering, and building AI-driven workflows.",
        highlights: [
            "Prompt Engineering Masterclass",
            "AI Content & Media Generation",
            "AI Automation & Workflows"
        ],
        skills: [
            "Prompt Engineering Techniques",
            "ChatGPT & LLM Workflows",
            "AI Image & Graphics Generation",
            "AI Automation & API Tools"
        ],
        careerRoles: [
            "Generative AI Specialist",
            "Prompt Engineer",
            "AI Content Creator"
        ]
    },

    "feat-1": {
        id: "feat-1",
        title: "AI & Cyber Security Specialization",
        category: "Hartron Advance Long Term Course",
        duration: "18 Months",
        fee: "₹1,30,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Comprehensive Day Boarding program combining AI, Cyber Security, Web Development, and Digital Marketing with 100% placement assistance.",
        highlights: [
            "Hands-on Industry Projects",
            "100% Placement Support",
            "1:1 Lab PC Allocation"
        ],
        skills: [
            "AI & Machine Learning",
            "Cyber Defense & Security",
            "Full-Stack Web Development",
            "Digital Marketing"
        ],
        careerRoles: [
            "AI & Cyber Security Engineer",
            "Full-Stack Security Specialist"
        ]
    },

    "feat-2": {
        id: "feat-2",
        title: "Cyber Secured Web Dev (CYWDA)",
        category: "Advance Long Term Course",
        duration: "18 Months (990 Hours)",
        fee: "₹45,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Full-stack web application development combined with core cybersecurity & secure coding practices.",
        highlights: ["Secure Coding", "Web Security", "Full-Stack Fundamentals"],
        skills: ["HTML5 & CSS3", "React & Node.js", "OWASP Security"],
        careerRoles: ["Full-Stack Web Developer", "Web Security Associate"]
    },

    "feat-3": {
        id: "feat-3",
        title: "Internet of Things Associate (IOTA)",
        category: "Advance Long Term Course",
        duration: "1 Year (450 Hours)",
        fee: "₹25,000",
        nsqfLevel: "4.0",
        eligibility: ["12th Grade Pass"],
        description:
            "Connect physical devices to networks, configure smart sensors, and analyze real-time IoT data.",
        highlights: ["IoT Hardware & Sensors", "Network Connectivity", "Sensor Data Analysis"],
        skills: ["Arduino & Sensors", "Networking Protocols", "Embedded C & Python"],
        careerRoles: ["IoT Associate", "Smart Device Specialist"]
    },

    "feat-4": {
        id: "feat-4",
        title: "Programming with Python",
        category: "Skill Short Term Course",
        duration: "2 Months",
        fee: "₹4,500 - ₹6,000",
        nsqfLevel: "4.0",
        eligibility: ["10th / 12th Grade Pass"],
        description:
            "Core Python syntax, Object-Oriented Programming, data structures, and automation scripting essentials.",
        highlights: ["Python Syntax & Logic", "OOPs Concepts", "Scripting & Mini Projects"],
        skills: ["Python Variables & Loops", "OOPs Architecture", "File I/O & Automation"],
        careerRoles: ["Python Developer Trainee", "Automation Script Assistant"]
    }
};

export default function CourseDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(null);

    const course = coursesData[id];

    if (!course) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
                <div className="text-center bg-white p-8 sm:p-12 rounded-2xl border border-slate-200 shadow-md max-w-md w-full">
                    <div className="text-5xl mb-4">🔍</div>
                    <h1 className="text-2xl font-extrabold text-slate-900 mb-2">
                        Course Details Not Found
                    </h1>
                    <p className="text-slate-600 text-sm mb-6">
                        The course you are looking for may have been updated or moved.
                    </p>
                    <Link
                        to="/courses"
                        className="inline-block bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-xl text-sm transition shadow-sm"
                    >
                        ← Back to All Courses
                    </Link>
                </div>
            </div>
        );
    }

    const handleInquireNow = () => {
        navigate("/contact", {
            state: { selectedCourse: course.title, courseId: course.id }
        });
    };

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-10 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* Navigation Bar */}
                <div className="flex items-center justify-between">
                    <Link
                        to="/courses"
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-900 bg-white hover:bg-blue-50 border border-slate-200 py-2.5 px-5 rounded-xl shadow-xs transition"
                    >
                        <span>←</span> Back to Courses
                    </Link>

                    <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-emerald-800 bg-emerald-100 border border-emerald-200 px-3 py-1 rounded-full">
                            NSQF Level {course.nsqfLevel || "4.0"}
                        </span>
                        <span className="text-xs font-bold text-blue-900 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full hidden sm:inline-block">
                            Govt. Recognized
                        </span>
                    </div>
                </div>

                {/* 1. HERO SECTION */}
                <div className="bg-white rounded-3xl border border-slate-200 shadow-md overflow-hidden">
                    <div className="h-3 bg-gradient-to-r from-blue-950 via-blue-700 to-yellow-400" />

                    <div className="p-6 sm:p-10 space-y-6">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <span className="bg-blue-100 text-blue-950 font-black text-xs uppercase tracking-wider px-3.5 py-1.5 rounded-lg border border-blue-200">
                                {course.category}
                            </span>
                            <span className="text-xs text-slate-500 font-semibold">
                                HARTRON Advance Skill Centre
                            </span>
                        </div>

                        <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight">
                            {course.title}
                        </h1>

                        <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-4xl font-normal">
                            {course.description}
                        </p>

                        {/* Quick Stats Bar */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-slate-100">
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Fees</span>
                                <span className="text-xl sm:text-2xl font-black text-blue-950">{course.fee}</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Duration</span>
                                <span className="text-xl sm:text-2xl font-black text-slate-900">{course.duration}</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">NSQF Alignment</span>
                                <span className="text-xl sm:text-2xl font-black text-emerald-700">Level {course.nsqfLevel || "4.0"}</span>
                            </div>
                            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80">
                                <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">Placement</span>
                                <span className="text-xl sm:text-2xl font-black text-yellow-600">100% Support</span>
                            </div>
                        </div>

                        {/* Feature Badges */}
                        <div className="flex flex-wrap gap-2 pt-2">
                            {course.highlights.map((h, idx) => (
                                <span key={idx} className="bg-blue-50 text-blue-900 border border-blue-200 text-xs font-bold px-3.5 py-1.5 rounded-full flex items-center gap-1.5">
                                    <span className="text-emerald-600 font-bold">✓</span> {h}
                                </span>
                            ))}
                        </div>

                        {/* CTA Header Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 pt-4">
                            <button
                                onClick={handleInquireNow}
                                className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-extrabold px-8 py-3.5 rounded-xl shadow-md transition text-center cursor-pointer text-sm"
                            >
                                Inquire & Book Free Counseling →
                            </button>
                            <a
                                href="tel:+91 9653540612"
                                className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-6 py-3.5 rounded-xl transition text-center text-sm"
                            >
                                📞 Call Counselor: +91 9653540612
                            </a>
                        </div>
                    </div>
                </div>

                {/* 2. ELIGIBILITY & KEY CREDENTIALS */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Eligibility */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-blue-100 text-blue-900 rounded-xl flex items-center justify-center text-xl font-bold">
                                🎓
                            </div>
                            <h2 className="text-xl font-extrabold text-slate-900">Eligibility Criteria</h2>
                        </div>
                        <ul className="space-y-2.5 pt-2">
                            {(course.eligibility || ["12th Grade Pass from recognized board", "Basic computer literacy"]).map((req, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                    <span className="text-emerald-500 font-bold text-base">✓</span>
                                    <span>{req}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Credentials */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-yellow-100 text-yellow-900 rounded-xl flex items-center justify-center text-xl font-bold">
                                🏅
                            </div>
                            <h2 className="text-xl font-extrabold text-slate-900">Key Credentials Earned</h2>
                        </div>
                        <ul className="space-y-2.5 pt-2">
                            {(course.credentials || [
                                "Hartron Certified Professional",
                                "NSQF Level 4.0 Certificate",
                                "Industry Placement Credentials"
                            ]).map((cred, idx) => (
                                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                                    <span className="text-yellow-500 font-bold text-base">★</span>
                                    <span>{cred}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 3. AVAILABLE BATCH TIMINGS */}
                {course.batchTimings && (
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
                            <div>
                                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                                    <span>⏰</span> Available Batch Timings
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                    Flexible schedules designed for students and working professionals
                                </p>
                            </div>
                            <span className="text-xs font-bold text-blue-900 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
                                Batch Duration: 2 Hours Daily
                            </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {course.batchTimings.map((batch, idx) => (
                                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-blue-300 transition flex items-center justify-between">
                                    <div className="space-y-1">
                                        <span className="text-base font-black text-slate-900 block">{batch.time} ({batch.session})</span>
                                        <span className="text-xs text-slate-500 block">{batch.duration} • {batch.seats}</span>
                                    </div>
                                    <button
                                        onClick={handleInquireNow}
                                        className="bg-blue-900 hover:bg-blue-800 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition"
                                    >
                                        Select
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 4. COURSE CURRICULUM breakdown */}
                {course.curriculum && (
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                        <div>
                            <span className="text-xs font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                                Structured Learning Path
                            </span>
                            <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                                Course Curriculum Breakdown
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Master core concepts with our step-by-step module structure
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.curriculum.map((m, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 hover:shadow-xs transition">
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs font-extrabold text-white bg-blue-950 px-2.5 py-1 rounded-md">
                                            Module {m.module}
                                        </span>
                                        <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                                            {m.topicsCount}
                                        </span>
                                    </div>
                                    <h3 className="text-base font-extrabold text-slate-900 leading-snug">{m.title}</h3>
                                    <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 5. INDUSTRY RECOGNIZED CERTIFICATIONS */}
                {course.certifications && (
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                                <span>🏆</span> Industry Recognized Certifications
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Globally accepted credentials earned upon course completion
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {course.certifications.map((cert, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                    <div className="flex items-start justify-between">
                                        <h3 className="text-base font-extrabold text-blue-950 leading-snug">{cert.title}</h3>
                                        <span className="text-[10px] uppercase font-extrabold text-amber-900 bg-amber-100 border border-amber-200 px-2 py-0.5 rounded">
                                            {cert.validity}
                                        </span>
                                    </div>
                                    <p className="text-xs text-slate-600">{cert.desc}</p>
                                    <div className="pt-2 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-500 font-semibold">
                                        <span>Issuer: {cert.issuer}</span>
                                        <span className="text-emerald-600 font-bold">{cert.recognition}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 6. PROGRAM HIGHLIGHTS / WHY CHOOSE US */}
                <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                            <span>🚀</span> Program Highlights & Features
                        </h2>
                        <p className="text-xs sm:text-sm text-slate-500 mt-1">
                            Experience industry-leading training designed for career acceleration
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {(course.programHighlights || [
                            { title: "AI-Powered Learning", desc: "Adaptive learning paths and content tracking." },
                            { title: "Live Cyber Labs", desc: "Virtual labs with simulated real-world scenarios." },
                            { title: "MAANG & Industry Faculty", desc: "Learn directly from veteran engineers." },
                            { title: "Live Projects & Hackathons", desc: "Hands-on problem solving and portfolio building." },
                            { title: "24/7 Doubt Resolution", desc: "Get answers to technical queries promptly." },
                            { title: "Career Mentorship", desc: "1:1 mock interviews, resume writing & placements." }
                        ]).map((ph, idx) => (
                            <div key={idx} className="p-5 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1.5">
                                <h3 className="text-sm font-extrabold text-blue-950">{ph.title}</h3>
                                <p className="text-xs text-slate-600 leading-relaxed">{ph.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 7. STUDENT PORTFOLIOS / GRADUATES */}
                {course.studentPortfolios && (
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                                <span>💻</span> Student Portfolios & Accomplishments
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                See what our graduates accomplish during their course training
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                            {course.studentPortfolios.map((st, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-blue-950 text-yellow-400 font-extrabold rounded-xl flex items-center justify-center text-sm">
                                            {st.name.charAt(0)}
                                        </div>
                                        <div>
                                            <h3 className="text-sm font-bold text-slate-900">{st.name}</h3>
                                            <span className="text-[11px] text-slate-500 block">{st.role}</span>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-1.5 pt-1">
                                        {st.tags.map((tag, i) => (
                                            <span key={i} className="text-[10px] font-bold bg-white text-slate-700 border border-slate-200 px-2 py-0.5 rounded">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 8. INSTRUCTORS */}
                {course.instructors && (
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                                <span>👨‍🏫</span> Meet Your Expert Instructors
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Learn from industry veterans with real-world technical expertise
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {course.instructors.map((inst, idx) => (
                                <div key={idx} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex items-center gap-4">
                                    <div className="w-12 h-12 bg-blue-900 text-white font-extrabold rounded-full flex items-center justify-center text-lg">
                                        {inst.name.charAt(3) || "M"}
                                    </div>
                                    <div>
                                        <h3 className="text-base font-bold text-slate-900">{inst.name}</h3>
                                        <p className="text-xs text-blue-900 font-semibold">{inst.domain}</p>
                                        <span className="text-xs text-slate-500 block mt-0.5">{inst.experience}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 9. FREQUENTLY ASKED QUESTIONS */}
                {course.faqs && (
                    <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-6">
                        <div>
                            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
                                <span>❓</span> Frequently Asked Questions
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                Find answers regarding course structure, prerequisites, and placement
                            </p>
                        </div>

                        <div className="space-y-3">
                            {course.faqs.map((faq, idx) => (
                                <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden transition">
                                    <button
                                        onClick={() => toggleFaq(idx)}
                                        className="w-full text-left p-4 sm:p-5 bg-slate-50 hover:bg-slate-100/80 font-bold text-xs sm:text-sm text-slate-900 flex justify-between items-center cursor-pointer"
                                    >
                                        <span>{faq.question}</span>
                                        <span className="text-lg text-blue-900 font-extrabold">{openFaq === idx ? "−" : "+"}</span>
                                    </button>
                                    {openFaq === idx && (
                                        <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* 10. FOOTER CONSULTATION CTA */}
                <div className="bg-blue-950 text-white p-8 sm:p-12 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="space-y-2 text-center md:text-left">
                        <span className="text-xs font-extrabold text-yellow-400 bg-yellow-400/10 border border-yellow-400/30 px-3.5 py-1 rounded-full uppercase tracking-wider">
                            Start Your Journey Today
                        </span>
                        <h2 className="text-2xl sm:text-3xl font-black text-white">
                            Secure Your Seat for the Next Batch!
                        </h2>
                        <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
                            Connect with senior career counselors at Hartron Advanced Skill Center Rohtak for personalized course guidance and fee structure details.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
                        <button
                            onClick={handleInquireNow}
                            className="bg-yellow-400 hover:bg-yellow-300 text-blue-950 font-black px-8 py-4 rounded-2xl text-xs sm:text-sm shadow-md transition text-center cursor-pointer"
                        >
                            Request Call Back →
                        </button>
                        <a
                            href="tel:+91 9653540612"
                            className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-4 rounded-2xl text-xs sm:text-sm border border-white/20 transition text-center"
                        >
                            📞 +91 9653540612
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}