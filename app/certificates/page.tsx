"use client";

export default function Certificates() {
  const certificates = [
    {
      title: "GirlScript Summer of Code (GSSoC) Contributor",
      issuer: "GirlScript Foundation",
      platform: "Open Source Program",
      date: "2025",
      skills: ["Open Source", "Git", "GitHub", "Collaboration", "Code Reviews"],
      link: "https://drive.google.com/file/d/1x3DZWeIEqsFg-YcLRPmkCV2XfRV7Wobk/view?usp=sharing"
    },
    {
      title: "Technology Virtual Job Simulation",
      issuer: "Deloitte Australia",
      platform: "Forage",
      date: "Jul 2025",
      skills: ["Data Analysis", "Coding", "Dashboard Planning", "Technical Communication"],
      link: "https://drive.google.com/file/d/1V3N_jFyvBJ8TUw2CdtEFqZqtfIzl09fF/view?usp=sharing"
    },
    {
      title: "Google Cloud Study Jams 2025",
      issuer: "Google Cloud",
      platform: "Google Developer Groups",
      date: "Oct 2025",
      skills: ["Google Cloud", "Cloud Fundamentals", "Hands-on Labs", "Cloud Tools"],
      link: "https://drive.google.com/file/d/1Uqg1wzZguuiGnj7KMoMLgLj5iZbqFkOf/view?usp=sharing"
    },
    {
      title: "Build With India Hackathon",
      issuer: "Hack With India",
      platform: "Hackathon",
      date: "Mar 2025",
      skills: ["Problem Solving", "Teamwork", "Rapid Prototyping", "Innovation"],
      link: "https://drive.google.com/file/d/1E-2Hqjcm9UDGWu0Wkx8Gz_m7be3rbYKH/view?usp=sharing"
    },
    {
      title: "Machine Learning & IoT Workshop",
      issuer: "Progressia",
      platform: "RCOEM-TATA-CIIIT",
      date: "Jan 2024",
      skills: ["Machine Learning Basics", "IoT Concepts", "Sensors", "Data Processing"],
      link: "https://drive.google.com/file/d/1AWExxdUpl0gfejSqqW8JtivZERTSgUlB/view?usp=sharing"
    },
    {
      title: "Campus Ambassador Programme",
      issuer: "AXIS'24",
      platform: "VNIT, Nagpur",
      date: "Mar 2024",
      skills: ["Leadership", "Event Management", "Communication", "Team Coordination"],
      link: "https://drive.google.com/file/d/11BlLkb6AJpd3Q4QnWlDj9Rix5s6tY_hE/view?usp=sharing"
    }
  ];

  return (
    <section
      id="certificates"
      className="min-h-screen text-[#ffe6c7] py-20 px-6 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-[#3a86ff] to-[#06ffa5] bg-clip-text text-transparent">
            Certificates & Achievements
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Continuous learning and hands-on experience through recognized programs
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 group"
            >
              {/* Top */}
              <div>
                <div className="w-12 h-12 bg-linear-to-br from-[#3a86ff] to-[#06ffa5] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m-7.165-7.303a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold mb-1 group-hover:text-[#3a86ff] transition-colors">
                  {cert.title}
                </h3>
                <p className="text-gray-300 font-medium">{cert.issuer}</p>
                <p className="text-sm text-gray-400 mb-4">
                  {cert.platform} • {cert.date}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

             {/* Action (always present) */}
{cert.link ? (
  <a
    href={cert.link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4 w-full block text-center py-2 rounded-lg text-sm font-semibold
      bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white
      hover:scale-105 transition-all duration-300"
  >
    View Certificate
  </a>
) : (
  <button
    disabled
    className="mt-4 w-full py-2 rounded-lg text-sm font-semibold
      bg-[#3a86ff]/10 text-gray-500 cursor-not-allowed"
  >
    View Certificate
  </button>
)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
