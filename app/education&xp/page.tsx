import { useState } from 'react';

export default function EducationExperience() {
  const [activeTab, setActiveTab] = useState('education');

  const education = [
    {
      degree: "B.Tech in Artificial Intelligence & Machine Learning",
      institution: "Shri Ramdeobaba College of Engineering and Management",
      location: "Nagpur, Maharashtra",
      period: "2023 - 2027",
      grade: "CGPA: 8.63",
      description: "Specialized in AI/ML with focus on deep learning, natural language processing, and computer vision.",
      highlights: [
        
        "Participated in various Techfests and coding competitions",
        "Focused on consistent academic improvement and long-term skill development",
        
        
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
        </svg>
      )
    },
    {
      degree: "Higher Secondary Education (12th)",
      institution: "Taywade Junior College",
      location: "Nagpur, Maharashtra",
      period: "2021 - 2023",
      grade: "Percentage: 77%",
      description: "Completed higher secondary education with specialization in Science stream (PCM with Computer Science).",
      highlights: [
        "JEE Mains : 87.8 %ile",
        "CET : 93.6 %ile",
      ],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  const experiences = [
    {
      title: "Open Source Contributor",
      company: "GirlScript Summer of Code",
      location: "Remote",
      period: "Jul 2025 - Oct 2025",
      type: "Open Source",
      description: "Contributed to multiple open-source repositories under GSSoC, working on real-world features, bug fixes, and documentation improvements.",
      responsibilities: [
        "Fixed UI & functionality issues in React-based projects",
        "Collaborated with mentors via GitHub PR reviews",
        "Improved code quality and documentation",
        "Worked with version control, issues, and deadlines"
      ],
      skills: ["Git","Github","Next.js", "React", "Tailwind CSS", "Node.js", "Open Source"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      title: "Technology Virtual Job Simulation",
      company: "Deloitte Australia (via Forage)",
      location: "Remote",
      period: "Jul 2025",
      type: "Virtual Experience",
      description: "Completed Deloitte Australia’s Technology Virtual Job Simulation on Forage, gaining hands-on exposure to data integration, coding tasks, and dashboard proposal development.",
      responsibilities: [
        "Worked on data integration and transformation tasks.",
        "Performed coding exercises aligned with real-world scenarios.",
        "Prepared a short proposal outlining a dashboard solution.",
        "Practiced problem-solving and technical communication"
      ],
      skills: ["Data Analysis", "Coding", "Dashboard Planning", "Technical Writing", "Problem Solving"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    
    {
  title: "Campus Ambassador",
  company: "AXIS'24",
  location: "Visvesvaraya National Institute of Technology, Nagpur",
  period: "Mar 2024",
  type: "Campus Role",
  description: "Worked as a Campus Ambassador for AXIS'24, contributing to the promotion and coordination of technical events on campus.",
  responsibilities: [
    "Promoted technical events and competitions among students across campus",
    "Assisted in organizing 5+ coding and technical competitions with 200+ participants",
    "Coordinated with event organizers, volunteers, and participants to ensure smooth execution",
    "Helped manage registrations, announcements, and on-ground event support",
  ],
  skills: ["Leadership", "Event Management", "Communication", "Team Coordination"],
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
},
{
  title: "Student Ambassador",
  company: "Google (Gemini Program)",
  location: "Shri Ramdeobaba College of Engineering and Management, Nagpur",
  period: "Aug 2025 - Dec 2025",
  type: "Campus Role",
  description: "Selected as a Student Ambassador to promote awareness and adoption of Google Gemini among students on campus.",
  responsibilities: [
    "Promoted Google Gemini features and use-cases among students through peer interactions",
    "Created awareness about AI-powered tools and their practical applications",
    "Encouraged student participation by sharing updates, resources, and early-access benefits",
    "Acted as a point of contact between the program and the student community",
  ],
  skills: ["Leadership", "Communication", "Community Engagement", "AI Awareness"],
  icon: (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  )
}

    
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Freelance': 'bg-purple-500/10 text-purple-400 border-purple-500/30',
      'Internship': 'bg-blue-500/10 text-blue-400 border-blue-500/30',
      'Volunteer': 'bg-green-500/10 text-green-400 border-green-500/30',
      'Campus Role': 'bg-orange-500/10 text-orange-400 border-orange-500/30'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-500/10 text-gray-400 border-gray-500/30';
  };

  return (
    <section id="education" className="min-h-screen text-[#ffe6c7] py-20 px-6 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-gradient-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            Education & Experience 
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My academic journey and professional experiences that shaped my skills and expertise.
          </p>
          <div className="h-1 w-32 bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-12 px-4">
          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
              activeTab === 'education'
                ? 'bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-lg shadow-[#3a86ff]/30 scale-105'
                : 'bg-[#00202f] border border-[#3a86ff]/30 text-gray-300 hover:border-[#3a86ff] hover:scale-105'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="hidden sm:inline">Education</span>
            <span className="sm:hidden">Education</span>
          </button>
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center justify-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 ${
              activeTab === 'experience'
                ? 'bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-lg shadow-[#3a86ff]/30 scale-105'
                : 'bg-[#00202f] border border-[#3a86ff]/30 text-gray-300 hover:border-[#3a86ff] hover:scale-105'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 sm:w-6 sm:h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="hidden sm:inline">Experience</span>
            <span className="sm:hidden">Experience</span>
          </button>
        </div>

        {/* Education Content */}
        {activeTab === 'education' && (
          <div className="space-y-8">
            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line - Hidden on mobile */}
              <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3a86ff] via-[#06ffa5] to-[#3a86ff]"></div>
              
              {education.map((edu, index) => (
                <div key={index} className="relative md:pl-24 pb-8 md:pb-12 last:pb-0">
                  {/* Timeline Dot - Hidden on mobile */}
                  <div className="hidden md:flex absolute left-4 top-0 w-8 h-8 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-full border-4 border-[#001a28] items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-4 sm:p-6 md:p-8 rounded-2xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-[1.02] group">
                    <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
                      {/* Icon */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        {edu.icon}
                      </div>

                      {/* Details */}
                      <div className="flex-1 w-full">
                        <h3 className="text-xl sm:text-2xl font-bold text-[#ffe6c7] mb-2 group-hover:text-[#3a86ff] transition-colors duration-300">
                          {edu.degree}
                        </h3>
                        <p className="text-base sm:text-lg font-medium text-gray-300 mb-1">{edu.institution}</p>
                        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {edu.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {edu.period}
                          </span>
                          <span className="px-2 sm:px-3 py-1 bg-[#06ffa5]/10 text-[#06ffa5] rounded-full text-xs font-semibold border border-[#06ffa5]/30">
                            {edu.grade}
                          </span>
                        </div>
                        <p className="text-sm sm:text-base text-gray-400 mb-4">{edu.description}</p>
                        
                        {/* Highlights */}
                        <div className="space-y-2">
                          <p className="text-sm font-semibold text-[#3a86ff]">Key Highlights:</p>
                          <ul className="space-y-1">
                            {edu.highlights.map((highlight, hIndex) => (
                              <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#06ffa5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                {highlight}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        
       {/* Experience Content */}

{activeTab === 'experience' && (
  <div className="space-y-8">
    
    <div className="relative">
      
      <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3a86ff] via-[#06ffa5] to-[#3a86ff]"></div>
      
      {experiences.map((exp, index) => (
        <div key={index} className="relative md:pl-24 pb-8 md:pb-12 last:pb-0">
          
          <div className="hidden md:flex absolute left-4 top-0 w-8 h-8 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-full border-4 border-[#001a28] items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>

          
          <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-4 sm:p-6 md:p-8 rounded-2xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-[1.02] group">
            <div className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
              
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-xl flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                {exp.icon}
              </div>

              
              <div className="flex-1 w-full">
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2 sm:gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#ffe6c7] mb-1 group-hover:text-[#3a86ff] transition-colors duration-300">
                      {exp.title}
                    </h3>
                    <p className="text-base sm:text-lg font-medium text-gray-300">
                      {exp.company}
                    </p>
                  </div>
                  <span className={`px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs font-semibold border whitespace-nowrap ${getTypeColor(exp.type)}`}>
                    {exp.type}
                  </span>
                </div>
                
                <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {exp.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.period}
                  </span>
                </div>
                
                <p className="text-sm sm:text-base text-gray-400 mb-4">
                  {exp.description}
                </p>
                
                
                <div className="space-y-3 mb-4">
                  <p className="text-sm font-semibold text-[#3a86ff]">
                    Key Responsibilities:
                  </p>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, rIndex) => (
                      <li key={rIndex} className="flex items-start gap-2 text-sm text-gray-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[#06ffa5] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {resp}
                      </li>
                    ))}
                  </ul>
                </div>

                
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, sIndex) => (
                    <span
                      key={sIndex}
                      className="px-3 py-1 text-xs font-medium bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)}

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-4xl font-bold text-[#3a86ff] mb-2">3+</p>
            <p className="text-sm text-gray-400">Years of Learning</p>
          </div>
          <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-4xl font-bold text-[#06ffa5] mb-2">{experiences.length}</p>
            <p className="text-sm text-gray-400">Experiences</p>
          </div>
          <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-4xl font-bold text-[#3a86ff] mb-2">20+</p>
            <p className="text-sm text-gray-400">Skills Gained</p>
          </div>
          <div className="bg-gradient-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-4xl font-bold text-[#06ffa5] mb-2">10+</p>
            <p className="text-sm text-gray-400">Projects Completed</p>
          </div>
        </div>
      </div>

      
    </section>
  );
}