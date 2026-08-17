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
import leaderimg from "../assets/gallery1/imgi_2_sir_mmap6r.jpg";

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

// Data object for Dr. Balvinder Dhull
const leadershipMember = {
  name: "DR. BALVINDER DHULL",
  qualification: "MCA, Ph.D Computer Science",
  designation: "Head of Institutions",
  image: leaderimg,
  institutions: [
    "Hartron Skill Centre, Kaithal",
    "Hartron Advanced Skill Centre, Kaithal",
    "Hartron Advanced Skill Centre, Panipat",
    "Hartron Advanced Skill Centre, Rohtak",
    "Zed-King Group of Institutions, Kaithal",
  ],
  phone: "+91-9812311612",
  email: "info@hartronindia.com",
};

// Internal Leadership Section Component
function LeadershipSection() {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="max-w-6xl mx-auto my-8 p-6 bg-slate-100/70 rounded-2xl border border-slate-200/80 shadow-sm">
      {/* Header Title */}
      <div className="flex justify-center items-center gap-2 mb-6">
        <div className="bg-blue-100 p-2 rounded-lg text-blue-800">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Leadership Council</h2>
      </div>

      {/* Main Card Content */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200/60 flex flex-col md:flex-row gap-8 relative">
        <span className="absolute top-4 right-4 bg-blue-50 text-blue-900 border border-blue-200 text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
          ★ Leadership
        </span>

        {/* Left Column: Image & Sub-Name */}
        <div className="flex flex-col items-center justify-center md:w-1/3">
          <div className="w-48 h-56 rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-slate-50 flex items-center justify-center">
            {leadershipMember.image && !imgError ? (
              <img
                src={leadershipMember.image}
                alt={leadershipMember.name}
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="w-full h-full bg-blue-900/80 flex items-center justify-center">
                <span className="text-4xl font-black text-white">
                  {getInitials(leadershipMember.name)}
                </span>
              </div>
            )}
          </div>
          <h3 className="mt-3 text-lg font-serif italic font-bold text-slate-800">
            Dr. Balvinder Dhull
          </h3>
        </div>

        {/* Right Column: Information */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="mb-1">
              <h3 className="text-xl font-bold text-slate-900 inline-block mr-2">
                {leadershipMember.name}
              </h3>
              <span className="text-xs text-slate-600 font-medium">
                ({leadershipMember.qualification})
              </span>
            </div>

            <p className="text-sm font-semibold text-blue-800 mb-4">
              {leadershipMember.designation}
            </p>

            <div className="mb-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700 mb-2">
                <span>🏢</span> Institutions
              </div>

              <div className="space-y-1.5">
                {leadershipMember.institutions.map((inst, index) => (
                  <div
                    key={index}
                    className="bg-slate-50 text-slate-700 text-xs px-3 py-2 rounded-md flex items-center gap-2 border border-slate-200/80"
                  >
                    <span>🎓</span> {inst}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-slate-600 pt-3 border-t border-slate-100 font-medium">
            <a
              href={`tel:${leadershipMember.phone}`}
              className="flex items-center gap-1.5 hover:text-blue-800 transition-colors"
            >
              📞 <span>{leadershipMember.phone}</span>
            </a>
            <a
              href={`mailto:${leadershipMember.email}`}
              className="flex items-center gap-1.5 hover:text-blue-800 transition-colors"
            >
              ✉️ <span>{leadershipMember.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Single faculty/profile card component
function ProfileCard({ member, isLeadership = false }) {
  const [showAll, setShowAll] = useState(false);
  const [imgError, setImgError] = useState(false);
  const visibleSkills = showAll ? member.skills : member.skills.slice(0, 5);

  return (
    <div className="overflow-hidden rounded-xl shadow-md border border-slate-200/80 flex flex-col h-full bg-white transition-all duration-200 hover:shadow-lg">
      <div className="flex flex-col md:flex-row flex-grow">
        {/* Photo Side */}
        <div className="md:w-1/3 flex flex-col items-center justify-center p-6 relative bg-[#1e3a8a]">
          <div className="relative group">
            {member.image && !imgError ? (
              <img
                src={member.image}
                alt={member.name}
                className="relative w-40 h-44 md:w-48 md:h-56 object-cover rounded-lg border-2 border-white/20 shadow-md transform group-hover:scale-105 transition-transform duration-300"
                onError={() => setImgError(true)}
              />
            ) : (
              <div className="relative w-40 h-44 md:w-48 md:h-56 rounded-lg border-2 border-white/20 shadow-md transform group-hover:scale-105 transition-transform duration-300 bg-blue-900/40 flex items-center justify-center">
                <span className="text-5xl font-black text-white/80">
                  {getInitials(member.name)}
                </span>
              </div>
            )}
          </div>
          {member.department && (
            <span className="mt-4 text-blue-100 text-[11px] font-semibold uppercase tracking-wider bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-center">
              {member.department}
            </span>
          )}
        </div>

        {/* Details Side */}
        <div className="md:w-2/3 py-6 bg-slate-50 flex flex-col flex-grow">
          <div className="mb-6">
            <div className="bg-[#1e3a8a] w-full text-white py-2.5 shadow-sm">
              <div className="flex flex-wrap items-center gap-2 text-white px-6">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight">{member.name}</h3>
                {member.qualification && (
                  <span className="font-medium text-blue-200 text-sm">
                    ({member.qualification})
                  </span>
                )}
              </div>
            </div>
            <div className="flex items-center mt-2 pl-6 pt-2 flex-wrap gap-2">
              <span className="text-[#1e3a8a] font-semibold bg-blue-100/80 border border-blue-200/60 px-3 py-1 rounded-full text-xs md:text-sm">
                {member.position}
              </span>
              {isLeadership && (
                <span className="flex items-center bg-blue-50 text-blue-900 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold">
                  ⭐ Leadership
                </span>
              )}
            </div>
          </div>

          {member.company && (
            <div className="flex items-start text-slate-700 mb-2 px-6 pt-1">
              <span className="mr-3 text-[#1e3a8a] text-lg">🏫</span>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Campus
                </p>
                <p className="font-medium text-slate-800 text-sm">
                  {member.company}
                </p>
              </div>
            </div>
          )}

          {member.experience && (
            <div className="flex items-start text-slate-700 mb-2 px-6 pt-1">
              <span className="mr-3 text-[#1e3a8a] text-lg">💼</span>
              <div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Experience
                </p>
                <p className="font-medium text-slate-800 text-sm">{member.experience}</p>
              </div>
            </div>
          )}

          <div className="px-6 pt-3">
            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-2">
              Key Skills
            </p>
            <div className="flex flex-wrap gap-1.5">
              {visibleSkills.map((skill, idx) => (
                <span
                  key={idx}
                  className="bg-white text-slate-700 border border-slate-200 text-[11px] font-medium px-2.5 py-1 rounded-md shadow-2xs"
                >
                  {skill}
                </span>
              ))}
            </div>
            {member.skills.length > 5 && (
              <button
                onClick={() => setShowAll((v) => !v)}
                className="mt-3 text-xs font-semibold text-[#1e3a8a] hover:text-blue-700 hover:underline transition-colors cursor-pointer"
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

function parseExperienceYears(expString) {
  if (!expString) return 0;
  const match = expString.match(/\d+/);
  return match ? parseInt(match[0], 10) : 0;
}

export default function OurFaculty() {
  const teachingStaffRaw = [
    {
      name: "Mr.Deepak Sharma",
      position: "Senior Computer Instructor & Technical Incharge",
      qualification: "B.A, M.A",
      experience: "10+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Advanced Language",
      image: deepakImg,
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
      name: "Ms. Shikha Khurana",
      position: "Assistant Professor",
      qualification: "B.Tech, M.Tech, B.Ed",
      experience: "16+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "AI & ML, Data Science",
      image: seekhaImg,
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
      name: "Mr.Ankit Maan",
      position: "Assistant Professor",
      qualification: "BCA, M.Sc",
      
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Data Science, Cyber Security, AI & ML",
      image: ankitImg,
      skills: [
        "Python Programming",
        "Machine Learning",
        "Artificial Intelligence",
        "Deep Learning",
        "Data Science",
        "Data Analysis",
        "Data Visualization",
        "NumPy, Pandas, Matplotlib & Seaborn",
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
      qualification: "B.A, M.A, Special B.Ed",
      
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Digital Marketing",
      image: parulImg,
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
      image: janviImg,
      skills: [
        "Python Programming",
        "C++ Programming",
        "Data Structures & Algorithms",
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning Basics",
        "Data Science",
        "NumPy, Pandas, Matplotlib & Seaborn",
        "HTML, CSS & JavaScript",
        "React.js",
        "Computer Fundamentals"
      ],
    },
  ];

  const nonTeachingStaff = [
    {
      name: "Mr.Rahul Punia",
      position: "Manager of Hartron Advanced Skill Centre",
      qualification: "Hartron Rohtak",
      company: "Hartron Advanced Skill Centre, Rohtak",
      experience: "12+ Years",
      department: "Management & Centre Head",
      image: centreHeadImg,
      skills: [
        "Centre Management",
        "Academic Leadership",
        "Industry Partnerships",
        "Career Guidance",
      ],
    },
    {
      name: "Mr.Sanjay Kumar",
      position: "Coordinator",
      qualification: "B.A",
      experience: "5+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Management & Administration",
      image: directorImg,
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
      name: "Mrs.Neelam Hooda",
      position: "Counsellor & Career Guidance Mentor",
      qualification: "B.Com, B.Ed",
      experience: "2+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Consultancy & Career Guidance",
      image: neelamImg,
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
      name: "Miss.Sonika",
      position: "Receptionist",
      qualification: "B.A, M.Sc, DECE",
      experience: "7+ Years",
      company: "Hartron Advanced Skill Centre, Rohtak",
      department: "Management & Administration",
      image: sonikaImg,
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
  ];

  const sortedTeachingStaff = [...teachingStaffRaw].sort(
    (a, b) => parseExperienceYears(b.experience) - parseExperienceYears(a.experience)
  );

  return (
    <div className="bg-slate-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold text-white tracking-widest uppercase bg-[#1e3a8a] px-3.5 py-1.5 rounded-full shadow-xs">
            Expert Guidance
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Meet Our Qualified Staff
          </h1>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Our experienced mentors, certified instructors, and dedicated administrative staff
            are committed to providing hands-on practical knowledge to help you excel in your career.
          </p>
        </div>

        <LeadershipSection />

        <div className="space-y-8 pt-6">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase bg-blue-100/70 border border-blue-200 px-3.5 py-1.5 rounded-full">
              🏢 Management & Support
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Administrative Faculty
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Dedicated professionals managing operations, career counselling, and student welfare.
            </p>
          </div>

          <div className="space-y-8">
            {nonTeachingStaff.map((member, index) => (
              <React.Fragment key={`non-teaching-${index}`}>
                <ProfileCard member={member} />
                {index !== nonTeachingStaff.length - 1 && (
                  <div className="pt-2 pb-2">
                    <hr className="border-t border-slate-300 my-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="relative py-8 flex items-center justify-center">
          <div className="w-full border-t border-slate-300"></div>
          <span className="absolute bg-slate-50 px-4 text-xs font-bold text-slate-500 uppercase tracking-widest">
            ✦ Academic & Teaching Experts ✦
          </span>
        </div>

        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold text-[#1e3a8a] tracking-widest uppercase bg-blue-100/70 border border-blue-200 px-3.5 py-1.5 rounded-full">
              👨‍🏫 Academic Experts
            </span>
            <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Teaching Faculty
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Experienced instructors providing hands-on practical and technical knowledge (ordered by experience).
            </p>
          </div>

          <div className="space-y-8">
            {sortedTeachingStaff.map((member, index) => (
              <React.Fragment key={`teaching-${index}`}>
                <ProfileCard member={member} />
                {index !== sortedTeachingStaff.length - 1 && (
                  <div className="pt-2 pb-2">
                    <hr className="border-t border-slate-300 my-4" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}