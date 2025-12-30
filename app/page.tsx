'use client'
import ProfileCard from "../portfolio-react/ProfileCard/ProfileCard"
import About from "./about/page"
import Skills from "./skills/page"
import Projects from "./projects/page"
import Contact from "./contact/page"
import Resume from "./resume/page"
import EducationExperience from "./education&xp/page"
import Certificates from "./certificates/page"
import ClickSpark from '../portfolio-react/click'
import Particles from "../portfolio-react/Particles"

export default function Home() {
  return (
    <main className="text-[#ffe6c7] scroll-smooth">
      <ClickSpark>
      {/* Hero Section with Enhanced Bento Grid */}
      <section id="home" className="min-h-screen py-20 px-4 mt-6 sm:px-6 flex items-center justify-center relative overflow-hidden">
        
        {/* Animated Background Gradient Orbs */}
        {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#3a86ff]/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#06ffa5]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div> */}

        <div className="w-full max-w-7xl relative z-10">
          
          {/* Enhanced Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5 lg:gap-6">
            
            {/* Main Introduction Card - Top Left - Enhanced */}
            <div className="md:col-span-5 md:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/20 to-[#06ffa5]/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0"></div>
              <div className="relative bg-gradient-to-br from-[#00202f] via-[#001a28] to-[#00202f] p-6 md:p-8 lg:p-10 rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 backdrop-blur-sm h-full flex flex-col justify-center shadow-2xl shadow-[#3a86ff]/5">
                <div className="space-y-4 md:space-y-6">
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#3a86ff]/10 to-[#06ffa5]/10 border border-[#3a86ff]/20 rounded-full">
                    <span className="text-xs md:text-sm lg:text-xl font-medium text-[#3a86ff]">Welcome to my Portfolio👋</span>
                  </div>
                  
                  <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-[#ffe6c7]">
                    Hello, I'm 
                    <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold  bg-gradient-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent mt-2 animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                      Dewansh 
                    </span>
                    <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight bg-gradient-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent mt-2 animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
                      Warjurkar
                    </span>
                  </h1>
                  
                  <p className="text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed">
                    I'm a <span className="text-[#3a86ff] font-semibold">Tech enthusiast</span> passionate about <span className="text-[#06ffa5] font-semibold">Web Development</span> and <span className="text-[#3a86ff] font-semibold">Machine Learning</span>. Building innovative projects with React, Next.js, and Python.
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Python", "ML"].map((tech, i) => (
                      <span key={i} className="px-3 py-1 text-xs font-medium bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20 hover:bg-[#3a86ff]/20 hover:scale-110 transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Profile Image Card - Top Center - Enhanced with Glow */}
            <div className="md:col-span-4 md:row-span-2 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/30 to-[#06ffa5]/30 rounded-2xl blur-2xl "></div>
              <div className="relative bg-gradient-to-br from-[#00202f] to-[#001a28] rounded-2xl border-2 border-[#3a86ff]/40 overflow-hidden  ">
                <div className="absolute inset-0 bg-gradient-to-t from-[#00202f] via-transparent to-transparent opacity-60 z-10"></div>
                <img 
                  src="/profile-headshot.jpg"
                  alt="Dewansh Warjurkar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <div className="bg-[#00202f]/80 backdrop-blur-md px-4 py-2 rounded-lg border border-[#3a86ff]/30">
                    <p className="text-sm font-semibold text-[#ffe6c7]">Full Stack Developer</p>
                    <p className="text-xs text-gray-400">AI/ML Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hobbies Card - Top Right - Enhanced Grid */}
<div className="md:col-span-3 md:row-span-1 relative group">
  <div className="absolute inset-0 bg-gradient-to-br from-[#06ffa5]/10 to-[#3a86ff]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0"></div>

  <div className="relative bg-gradient-to-br from-[#00202f] to-[#001a28] p-4 md:p-6 rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 shadow-xl h-full">
    <div className="flex items-center gap-2 mb-4">
      <h3 className="text-3xl md:text-lg lg:text-3xl font-bold text-[#ffe6c7]">
        My{" "}
        <span className="text-transparent bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] bg-clip-text">
          Hobbies
        </span>
      </h3>
    </div>

    <div className="grid grid-cols-2 gap-2 md:gap-3">
      {[
        {
          name: "Photography",
          icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 mx-auto" fill="currentColor">
              <path d="m11.2 8.375l3.5-6q2.275.6 4.038 2.2t2.562 3.8zm-2.775 2.5L5 4.875q1.35-1.325 3.138-2.1T12 2q.325 0 .75.038t.775.087zm-6.1 3.625q-.15-.6-.238-1.225T2 12q0-1.775.575-3.35T4.2 5.775L9.25 14.5zm7 7.125q-2.275-.6-4.05-2.2t-2.575-3.8h10.075zM12 22q-.375 0-.763-.05t-.737-.1l5.075-8.725l3.425 6q-1.35 1.325-3.137 2.1T12 22m7.8-3.775L14.75 9.5h6.925q.15.6.238 1.225T22 12q0 1.75-.612 3.35T19.8 18.225" />
            </svg>
          ),
        },
        {
          name: "Travel",
          icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 mx-auto" fill="currentColor">
              <path d="m9.925 21.125l-2.475-4.6l-4.6-2.475l1.775-1.75l3.625.625l2.55-2.55L2.875 7l2.1-2.15l9.625 1.7l3.1-3.1q.575-.575 1.425-.575t1.425.575t.575 1.412t-.575 1.413L17.425 9.4l1.7 9.6L17 21.125L13.6 13.2l-2.55 2.55l.65 3.6z" />
            </svg>
          ),
        },
        {
          name: "Editing",
          icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 mx-auto" fill="currentColor">
              <path d="m24.219.063l-4.844 1.25l2.438 1.437l-3.844 1L15.5 2.344l-4.813 1.25l2.438 1.437l-3.875 1l-2.438-1.406l-4.843 1.25l3.656 2.156L24.969 2.97l-.75-2.906zM2 8a2 2 0 1 0 0 4a2 2 0 0 0 0-4m4 3l-3 3h5l3-3zm9 0l-3 3h5l3-3zm9 0l-3 3h5v-3zM0 15v8a3 3 0 0 0 3 3h20a3 3 0 0 0 3-3v-8z" />
            </svg>
          ),
        },
        {
          name: "Sports",
          icon: (
            <svg viewBox="0 0 24 24" className="w-7 h-7 mx-auto" fill="currentColor">
              <path d="m3.67 16.26l.54.53l-.62.61a9 9 0 0 0 .84 1.11L18.51 4.42a11 11 0 0 0-1.1-.83l-.62.61l-.53-.53l.48-.48A10 10 0 0 0 3.2 16.74zM14.86 5.07l.53.53L14 7l-.53-.53zm-2.79 2.8l.52.53l-1.39 1.4l-.53-.53zm-2.8 2.8l.53.53l-1.4 1.39l-.53-.53zm-2.8 2.79L7 14l-1.4 1.4l-.53-.53zm.12 6.95l.62-.61l.53.53l-.48.48A10 10 0 0 0 20.8 7.26l-.47.48l-.54-.53l.62-.61a9 9 0 0 0-.84-1.11L5.49 19.58a11 11 0 0 0 1.1.83M18.4 8.61l.53.53l-1.4 1.4L17 10zm-2.8 2.8l.53.53l-1.4 1.39l-.53-.53zm-2.8 2.79l.53.53l-1.39 1.4l-.54-.53zM10 17l.53.53l-1.4 1.4l-.53-.53z" />
            </svg>
          ),
        },
      ].map((hobby, index) => (
        <div key={index} className="relative group/item">
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/20 to-[#06ffa5]/20 rounded-lg blur group-hover/item:blur-md transition-all duration-300 opacity-0 group-hover/item:opacity-100"></div>

          <div className="relative bg-[#001a28] border border-[#3a86ff]/20 rounded-lg px-2 md:px-3 py-3 text-center hover:border-[#3a86ff] hover:scale-110 transition-all duration-300 cursor-default">
            <div className="text-[#ffe6c7] group-hover/item:text-[#3a86ff] transition-colors duration-300 mb-1">
              {hobby.icon}
            </div>
            <div className="text-base md:text-sm font-medium text-[#ffe6c7]">
              {hobby.name}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

            {/* Social Links Card - Right Middle - Enhanced Icons with Tooltip */}
<div className="md:col-span-3 md:row-span-1 relative group">
  <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/10 to-[#06ffa5]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0"></div>

  <div className="relative bg-gradient-to-br from-[#00202f] to-[#001a28] p-4 md:p-6 rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 flex items-center justify-center shadow-xl h-full">
    <div>
      <p className="text-center text-lg lg:text-xl font-semibold text-gray-400 mb-4">
        Connect With Me
      </p>

      <div className="grid grid-cols-2 gap-3 md:gap-4">
        {[
          {
            name: "GitHub",
            href: "https://github.com/dewanshhh24",
            icon: (
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            ),
          },
          {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/dewanshwarjurkar/",
            icon: (
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            ),
          },
          {
            name: "Instagram",
            href: "https://instagram.com/_dewanshhh",
            icon: (
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>                     ),
          },
          {
            name: "Codolio",
            href: "https://codolio.com/profile/dewanshhh24",
            icon: (
              <path d="M12 16c.56.84 1.31 1.53 2.2 2L12 20.2L9.8 18c.89-.47 1.65-1.16 2.2-2m5-4.8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-10 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10-2.5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-10 0a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4M2.24 1c1.76 3.7.49 6.46-.69 9.2c-.36.8-.55 1.63-.55 2.5a6 6 0 0 0 6 6c.21-.01.42-.02.63-.05l2.96 2.96L12 23l1.41-1.39l2.96-2.96c.21.03.42.04.63.05a6 6 0 0 0 6-6c0-.87-.19-1.7-.55-2.5C21.27 7.46 20 4.7 21.76 1c-2.64 2.06-6.4 3.69-9.76 3.7C8.64 4.69 4.88 3.06 2.24 1" />
            ),
          },
          
        ].map((social, index) => (
          <a
            key={index}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/social w-14 h-14 md:w-16 md:h-16"
          >
            {/* Tooltip */}
            <span
  className="
    absolute -bottom-9 left-1/2 -translate-x-1/2
    px-3 py-1 rounded-md text-xs font-semibold
    bg-[#001a28] text-[#ffe6c7]
    border border-[#3a86ff]/40
    opacity-0 -translate-y-2
    group-hover/social:opacity-100
    group-hover/social:translate-y-0
    transition-all duration-300
    pointer-events-none
    whitespace-nowrap
    z-50
  "
>
  {social.name}
</span>


            <div className="relative bg-[#001a28] border border-[#3a86ff]/30 rounded-xl w-full h-full flex items-center justify-center hover:scale-110 hover:bg-[#000000] transition-all duration-300">
              <svg
                className="w-7 h-7 md:w-8 md:h-8 text-[#ffe6c7] group-hover/social:text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {social.icon}
              </svg>
            </div>
          </a>
        ))}
      </div>
    </div>
  </div>
</div>


            {/* Education Card - Bottom Left - Enhanced with Icon */}
            <div className="md:col-span-6 md:row-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#3a86ff]/10 to-[#06ffa5]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 "></div>
              <div className="relative bg-gradient-to-br from-[#00202f] to-[#001a28] p-4 md:p-6 rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 shadow-xl h-full">
                <div className="flex flex-col md:flex-row items-start md:items-center justify-start gap-3 md:gap-4 h-full">
                  <div className="flex items-start gap-4 flex-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-[#3a86ff] to-[#06ffa5] rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 md:w-7 md:h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm md:text-base lg:text-lg font-bold text-[#ffe6c7] mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#3a86ff] group-hover:to-[#06ffa5] group-hover:bg-clip-text transition-all duration-300">
                        Shri Ramdeobaba College of Engineering and Management
                      </h3>
                      <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm lg:text-base">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4 text-[#3a86ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Nagpur, India</span>
                        <span className="text-[#3a86ff]">•</span>
                        <span>B.Tech AI/ML</span>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-auto flex justify-center md:justify-center mt-2 md:mt-0">
                    <a 
                      href="/Resume_DewanshWarjurkar.pdf" 
                      download
                      className="relative group/btn overflow-hidden px-5 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold whitespace-nowrap"
                    >
                      <div className="absolute inset-0 bg-[#3a86ff] transition-transform duration-300 group-hover/btn:scale-110"></div>
                      <div className="relative flex items-center gap-2 text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <span>Résumé</span>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>

            {/* Content Creator Card - Bottom Right - Enhanced */}
            <div className="md:col-span-6 md:row-span-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#06ffa5]/10 to-[#3a86ff]/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 "></div>
              <div className="relative bg-gradient-to-br from-[#00202f] to-[#001a28] p-4 md:p-6 rounded-2xl border border-[#3a86ff]/30 hover:border-[#3a86ff]/60 transition-all duration-500 shadow-xl h-full">
                <div className="flex items-center gap-4 md:gap-6 h-full">
                  <div className="relative flex-shrink-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] rounded-full blur-xs group-hover:blur-sm transition-all duration-300"></div>
                    <div className="relative p-[3px] rounded-full bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] group-hover:scale-110 transition-all duration-300">
  <img 
    src="/cinnnamo_roll.webp"
    alt="Content Creator"
    className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full object-cover bg-[#001a28]"
  />
</div>

                    
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-base md:text-lg lg:text-2xl font-bold text-[#ffe6c7] mb-1">
                      I am a <span className="text-transparent bg-gradient-to-r from-[#3a86ff] to-[#06ffa5] bg-clip-text">Content Creator</span>
                    </p>
                    <p className="text-xs md:text-sm lg:text-base text-gray-400 mb-3">Photographs & Video Edits</p>
                    <a 
                      href="https://instagram.com/cinnnamo_roll" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs md:text-sm lg:text-base font-semibold text-[#3a86ff] hover:text-[#ffe6c7] transition-colors duration-300 group/link"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                      <span>@cinnnamo_roll</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 md:w-4 md:h-4 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      
        <About />
        <Skills />
        <EducationExperience />
        <Projects />
        <Certificates />
        <Resume />
        <Contact />
      </ClickSpark>
    </main>
  )
}
