import React, { useState } from "react";
import centreHeadImg from "../assets/gallery1/Image1.jpeg";
import directorImg from "../assets/gallery1/Sanjay.jpeg";
import deepakImg from "../assets/gallery1/deepak.jpeg";
import neelamImg from "../assets/gallery1/neelam.png";
import sonikaImg from "../assets/gallery1/Sonikaaa.png";
import seekhaImg from "../assets/gallery1/seekha.jpeg";
import ankitImg from "../assets/gallery1/ANKIT.png";
import parulImg from "../assets/gallery1/Parull.jpeg";
import janviImg from "../assets/gallery1/janvi.jpeg";
// Helper to create initials avatar from a name
function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Single faculty/profile card matching the reference website's layout
function ProfileCard({ member, isLeadership = false }) {
  const [showAll, setShowAll] = useState(false);
  const visibleSkills = showAll ? member.skills : member.skills.slice(0, 5);

  return (
    <div className="overflow-hidden rounded-xl shadow-lg flex flex-col h-full">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Photo Side */}
        <div className="md:w-1/3 flex flex-col items-center justify-center p-6 relative bg-[#f97316]">
          <div className="relative group">
            {member.image ? (
              <img
                src={member.image}
                alt={member.name}
                className="relative w-40 h-44 md:w-48 md:h-56 object-cover rounded-lg border-4 border-white shadow-md transform group-hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <div className="relative w-40 h-44 md:w-48 md:h-56 rounded-lg border-4 border-white shadow-md transform group-hover:scale-105 transition-transform duration-300 bg-white/20 flex items-center justify-center">
                <span className="text-5xl font-black text-white">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
          </div>
          {member.department && (
            <span className="mt-4 text-white/90 text-xs font-semibold uppercase tracking-wider bg-white/20 px-3 py-1 rounded-full">
              {member.department}
            </span>
          )}
        </div>

        {/* Details Side */}
        <div className="md:w-2/3 py-6 bg-gray-200 flex flex-col flex-grow">
          {/* Name + Qualification header bar */}
          <div className="mb-6">
            <div className="bg-[#1e3a8a] w-full text-white py-2">
              <div className="flex flex-wrap items-center gap-2 text-white px-6">
                <h3 className="text-xl md:text-2xl font-bold">{member.name}</h3>
                {member.qualification && (
                  <span className="font-semibold text-sm">
                    ({member.qualification})
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center mt-2 pl-6 pt-2 flex-wrap gap-2">
              <span className="text-[#1e3a8a] font-medium bg-blue-50 px-3 py-1 rounded-full text-xs md:text-sm">
                {member.position}
              </span>
              {isLeadership && (
                <span className="flex items-center bg-yellow-50 text-yellow-700 px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ Leadership
                </span>
              )}
            </div>
          </div>

          {/* Campus */}
          {member.company && (
            <div className="flex items-start text-gray-700 mb-2 px-6 pt-2">
              <span className="mr-3 text-[#1e3a8a] text-lg">🏫</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Campus
                </p>
                <p className="font-medium text-gray-800">
                  {member.company}
                </p>
              </div>
            </div>
          )}

          {/* Experience */}
          {member.experience && (
            <div className="flex items-start text-gray-700 mb-2 px-6 pt-1">
              <span className="mr-3 text-[#1e3a8a] text-lg">💼</span>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider">
                  Experience
                </p>
                <p className="font-medium text-gray-800">{member.experience}</p>
              </div>
            </div>
          )}

          {/* Skills */}
          <div className="px-6 pt-3">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
              Key Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {visibleSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white text-gray-700 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
            {member.skills.length > 5 && (
              <button
                onClick={() => setShowAll((v) => !v)}
                className="mt-3 text-sm font-semibold text-[#1e3a8a] hover:underline"
              >
                {showAll ? "Show less −" : `View more (${member.skills.length - 5} more) +`}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function OurFaculty() {
  const centreHead = {
    name: "Mr.Rahul Punia",
    position: "Manager of Hartron Advanced Skill Centre",
    qualification: "Hartron Rohtak",
    company: "Hartron Advanced Skill Centre, Rohtak",
    experience: "Experienced IT Educator",
    image: centreHeadImg, // Replace with real Centre Head photo: "/images/faculty/centre-head.jpg"
    skills: [
      "Centre Management",
      "Academic Leadership",
      "Industry Partnerships",
      "Career Guidance",
    ],
    messageTitle: "Message from Centre Head / Center Manager",
    messages: [
      "It gives me immense pride to welcome you to the Hartron Advanced Skill Centre, Rohtak. Our centre is dedicated to empowering the youth of Haryana with future-ready technical skills through industry-aligned, hands-on training programs.",
      "Over the years, HARTRON has been at the forefront of skill development, and our Rohtak centre continues this proud legacy. We offer a wide range of government-recognized courses in web development, AI, cyber security, data science, and digital marketing.",
      "Our experienced faculty and modern infrastructure ensure that every student receives individual attention and practical exposure, making them job-ready for both the private and government sectors.",
      "I extend my best wishes to all learners and hope you make the most of your journey with us. Together, we can build a brighter future for our community and our nation.",
    ],
    signature: "Centre Head / Center Manager",
    footer: "Hartron Advanced Skill Centre, Rohtak",
  };

  const facultyList = [
    {
      name: "Mr.Sanjay Kumar",
      position: "HOD ",
      qualification: "B.A",
      experience: "5+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Management & Administration",
      image: directorImg, // Add real photo: "/images/faculty/instructor-1.jpg"
      skills: [
         "Administration & Operations",
        "Educational Institution Management",
        "Business Development",
        "Project Management",
        "Decision Making",
        "Communication & Public Relations",
        "Student & Stakeholder Relations",
        "Human Resource Management",
        "Training Program Management",
        "Quality Assurance",
        "Problem Solving",
        "Financial & Resource Planning",
        "Organizational Development"
      ],
    },
    {
      name: "Mr.Deepak Sharma",
      position: "Senior Computer Instructor & Technical Incharge",
      qualification: " B.A, M.A ",
      experience: "10+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Advanced Language",
      image: deepakImg, // Add real photo: "/images/faculty/instructor-1.jpg"
      skills: [
            "Computer Fundamentals",
        "Windows Operating System",
        "Internet & Email",
        "SQL & Database Management",
        "MySQL",
        "Power BI & Data Visualization",
        "Advanced Microsoft Excel",
        "Advanced Microsoft Office (Word, Excel & Outlook)",
        "Microsoft PowerPoint (Professional Presentations)",
        "Digital Marketing",
        "AI Tools & Prompt Engineering",
        "Generative AI Applications",
        "Productivity with AI (ChatGPT, Gemini & Microsoft Copilot)"
      ],
    },
    
    {
      name: "Ms. Shikha Khurana ",
      position: "Assistance professor ",
      qualification: ", B.Tech ,M.tech .B.ED",
      experience: "16+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "AI & ML, Data Science",
      image: seekhaImg, // Add real photo: "/images/faculty/instructor-1.jpg"
      skills: [
           "Artificial Intelligence & Machine Learning",
  "Data Science & Data Analytics",
  "Python Programming",
  "SQL & Database Management",
  "MySQL",
  "Power BI & Data Visualization",
  "Advanced Microsoft Excel",
  "Microsoft Office Suite",
  "Data Analysis & Reporting",
  "Generative AI & AI Tools",
  "Prompt Engineering",
  "ChatGPT, Gemini & Microsoft Copilot",
  "AI-Powered Productivity",
  "Digital Marketing & Analytics",
  "Microsoft PowerPoint & Professional Presentations",
  "Computer Fundamentals & IT Skills"
      ],
    },

    {
      name: "Mrs.Neelam Hooda",
      position: "Counsellor & Career Guidance Mentor",
      qualification: "B.Com, B.Ed",
      experience: "2+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Consultancy & Career Guidance",
      image: neelamImg, // Add real photo: "/images/faculty/instructor-2.jpg"
      skills: [
        "Career Counselling",
        "Student Mentoring",
        "Career Planning",
        "Interview Preparation",
        "Resume & CV Building",
        "Communication Skills",
        "Personality Development",
        "Soft Skills Training",
        "Academic Guidance",
        "Goal Setting & Career Mapping",
        "Admission & Course Guidance",
        "Public Speaking",
        "Time Management",
        "Professional Development",
        "Motivational Coaching"
      ],
    },
    {
      name: "Miss.Sonika ",
      position: "Receptionist ",
      qualification: "B.A, M.Sc, DECE",
      experience: "7+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Management & Administration",
      image: sonikaImg, // Add real photo: "/images/faculty/instructor-3.jpg"
      skills: [
        "Front Desk Management",
        "Customer Service",
        "Communication Skills",
        "Telephone & Email Handling",
        "Visitor Management",
        "Appointment Scheduling",
        "MS Office (Word, Excel & PowerPoint)",
        "Data Entry",
        "Documentation & Record Keeping",
        "Hindi & English Typing",
        "Office Administration",
        "Time Management",
        "Professional Etiquette",
        "Multitasking",
        "Problem Solving"
      ],
    },
    {
      name: "Mr.Ankit Maan",
      position: "Assistant Professor",
      qualification: "BCA, M.Sc ",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Data Science,Cyber Security,AI & ML",
      image: ankitImg, // Add real photo: "/images/faculty/instructor-4.jpg"
      skills: [
         "Python Programming",
    "Machine Learning",
    "Artificial Intelligence",
    "Deep Learning",
    "Data Science",
    "Data Analysis",
    "Data Visualization",
    "NumPy , Pandas ,Matplotlib & Seaborn",
    "Scikit-learn",
    "SQL & Database Management",
    "Power BI",
    "Cyber Security Fundamentals",
    "Ethical Hacking Basics",
    "Network Security",
    "Operating Systems & Networking",
    "Linux Fundamentals",
    "Cloud Computing Basics",
    "Git & GitHub",
    "Computer Fundamentals",
    "Problem Solving"
      ],
    },
    {
      name: "Miss.Parul Barak",
      position: "IT Instructor",
      qualification: "B.A, M.A, Special B.ED",
      experience: "1+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Digital Marketing",
      image: parulImg, // Add real photo: "/images/faculty/instructor-5.jpg"
      skills: [
            "Computer Fundamentals",
        "MS Office (Word, Excel & PowerPoint)",
        "Tally Prime & GST",
        "Financial Accounting",
        "Basic Computer Applications",
        "Internet & Email",
        "Project Management",
        "Project Handling & Documentation",
        "Student Mentoring",
        "Presentation & Communication Skills"
      ],
    },
    {
      name: "Miss.Janvi",
      position: "Assistant Professor",
      qualification: "B.Tech",
     
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Artificial Intelligence & Machine Learning",
      image: janviImg, // Add real photo: "/images/faculty/instructor-6.jpg"
      skills: [
            "Python Programming",
        "C++ Programming",
        "Data Structures & Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning Basics",
        "Data Science",
        "NumPy , Pandas ,Matplotlib & Seaborn", 
        "HTML, CSS & JavaScript",
        "React.js",
        "Computer Fundamentals"
      ],
    },
  ];

  return (
    <div className="bg-[#f5f7fa] min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-white tracking-widest uppercase bg-[#1e3a8a] px-3 py-1 rounded-full">
            Expert Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Meet Our Qualified Faculty
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our experienced mentors, certified instructors, and dedicated staff
            are committed to providing hands-on practical knowledge to help you
            excel in your career.
          </p>
        </div>

        {/* Centre Head Message Section */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-[#1e3a8a] py-10 px-6 sm:px-10 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white relative z-10">
              {centreHead.messageTitle}
            </h2>
            <div className="mt-4 h-1 m-auto md:w-96 bg-blue-300 rounded-full"></div>
          </div>

          <div className="flex flex-col md:flex-row p-6 sm:p-10 gap-8 md:gap-12">
            {/* Photo */}
            <div className="md:w-1/3 flex flex-col items-center">
              <div className="relative">
                {centreHead.image ? (
                  <img
                    src={centreHead.image}
                    alt={centreHead.name}
                    className="w-full max-w-xs rounded-2xl shadow-xl border-4 border-white md:-translate-y-6 hover:shadow-2xl transition-shadow duration-300 object-cover"
                  />
                ) : (
                  <div className="w-full max-w-xs rounded-2xl shadow-xl border-4 border-white md:-translate-y-6 hover:shadow-2xl transition-shadow duration-300 bg-gradient-to-br from-[#1e3a8a] to-[#f97316] flex items-center justify-center h-64">
                    <span className="text-7xl">👨‍🏫</span>
                  </div>
                )}
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-800">
                  {centreHead.signature}
                </h3>
                <p className="text-gray-800 font-medium mt-1">
                  {centreHead.position}
                </p>
              </div>
            </div>

            {/* Message text */}
            <div className="md:w-2/3">
              <h2 className="text-xl sm:text-[25px] font-semibold text-gray-800 mb-6">
                {centreHead.messageTitle}
              </h2>
              <div className="text-gray-700 text-justify leading-relaxed space-y-6">
                {centreHead.messages.map((msg, idx) => (
                  <p key={idx}>{msg}</p>
                ))}
                <div className="mt-10 pl-6 border-l-4 border-[#f97316]">
                  <p className="text-2xl font-bold text-gray-800">
                    {centreHead.signature}
                  </p>
                  <p className="text-gray-500 font-medium">
                    {centreHead.footer}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Faculty Grid */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-white tracking-widest uppercase bg-[#1e3a8a] px-3 py-1 rounded-full">
              Our Team
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Faculty & Staff
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dedicated educators and professionals guiding you at every step
              of your learning journey.
            </p>
          </div>

          {facultyList.map((member, index) => (
            <ProfileCard key={index} member={member} />
          ))}
        </div>
      </div>
    </div>
  );
}
