"use client";

import { useState } from 'react';
import ProfileCard from '../../portfolio-react/ProfileCard/ProfileCard';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const interests = [
    { icon: "💻", label: "Web Development", color: "from-blue-500 to-cyan-500" },
    { icon: "🤖", label: "Machine Learning", color: "from-purple-500 to-pink-500" },
    { icon: "📸", label: "Photography", color: "from-orange-500 to-red-500" },
    { icon: "🎨", label: "UI/UX Design", color: "from-green-500 to-emerald-500" },
    { icon: "🧩", label: "Open Source", color: "from-yellow-500 to-amber-500" },
    { icon: "🚀", label: "Innovation", color: "from-teal-500 to-cyan-500" }
  ];

  const values = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      title: "Innovation",
      description: "Always exploring new technologies and creative solutions"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Learning",
      description: "Committed to continuous growth and skill development"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Collaboration",
      description: "Building amazing things together with talented people"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ),
      title: "Quality",
      description: "Delivering polished, user-focused solutions"
    }
  ];

  const funFacts = [
    "🎯 Solved 200+ DSA problems",
    "📷 Love capturing sunsets and landscapes",
    "🎵 Code better with music",
    "🌅 Early starter & most productive in morning",
    "☕ Tea enthusiast",  
    "🎬 Occasional editor when not coding",
  ];

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-[length:200%_auto]">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tech enthusiast, problem solver, and lifelong learner passionate about building meaningful digital experiences.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24  space-y-6">
              {/* Using the provided ProfileCard component */}
              <div className="shrink-0 mt-10 ">
            <ProfileCard
              name="Dewansh Warjurkar"
              title="AIML Student"
              handle="dewanshhh24"
              status="Online"
              contactText="Contact Me"
              avatarUrl="/profile-card-image.jpg"
              miniAvatarUrl="/dino-avatar.png"
              showUserInfo={true}
              enableTilt={true}
              onContactClick={() => console.log('Contact clicked')}
            />
          </div>

              {/* Quick Stats */}
              <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-2xl border border-[#3a86ff]/20">
                <h4 className="text-lg font-bold text-[#ffe6c7] mb-4">Quick Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Location</span>
                    <span className="text-[#3a86ff] font-medium">Nagpur, India 🇮🇳</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Focus</span>
                    <span className="text-[#06ffa5] font-medium">Full Stack</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400">Status</span>
                    <span className="text-green-400 font-medium flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Online
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Story & Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Story Section */}
            <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20">
              <h3 className="text-3xl font-bold text-[#ffe6c7] mb-6">My Story</h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I am <span className="text-[#3a86ff] font-semibold">Dewansh Warjurkar</span>, a tech enthusiast with a strong passion for web development,
                  machine learning, and building meaningful digital experiences. I love exploring how technology can be used to solve real-world problems and make
                  life a little easier, or just more interesting.
                </p>

                <p>
                  Most of my work revolves around crafting responsive, dynamic web applications using <span className="text-[#06ffa5] font-medium">React, Next.js</span>, and other modern tools. I also enjoy diving into backend
                  development with Springboot and Node, connecting all the pieces to build full-stack solutions that actually work well and feel good to use.
                </p>

                <p>
                  Alongside web development, I'm fascinated by the world of <span className="text-[#3a86ff] font-medium">AI and data</span>. I spend a lot of time improving my DSA skills in Java and experimenting with Python to explore
                  machine learning models and understand how data can drive smarter applications.
                </p>

                <p>
                  Outside of tech, <span className="text-[#06ffa5] font-medium">photography</span> is something I genuinely enjoy. There's something about capturing a fleeting moment and turning it into a story that really resonates with me.
                  It keeps my creativity alive and gives me a fresh perspective when I return to coding.
                </p>

                <p>
                  I'm always looking to <span className="text-[#3a86ff] font-medium">learn, grow, and take on new challenges</span> - whether it's collaborating on projects, picking up a new framework, or just brainstorming ideas
                  that could turn into the next big thing. I'd love to connect and explore how we can build something amazing together!
                </p>
              </div>
            </div>

            {/* Interests Grid */}
            <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20">
              <h3 className="text-3xl font-bold text-[#ffe6c7] mb-6">What I'm Passionate About</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <div
                    key={index}
                    className="group bg-[#001a28] p-4 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 text-center"
                  >
                    <div className={`text-4xl mb-2 group-hover:scale-110 transition-transform duration-300`}>
                      {interest.icon}
                    </div>
                    <p className="text-sm font-medium text-gray-300 group-hover:text-[#3a86ff] transition-colors duration-300">
                      {interest.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Values */}
            <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20">
              <h3 className="text-3xl font-bold text-[#ffe6c7] mb-6">Core Values</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#001a28] rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 group"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-[#3a86ff] to-[#06ffa5] rounded-lg flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#ffe6c7] mb-1 group-hover:text-[#3a86ff] transition-colors duration-300">
                        {value.title}
                      </h4>
                      <p className="text-sm text-gray-400">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Fun Facts */}
            <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20">
              <h3 className="text-3xl font-bold text-[#ffe6c7] mb-6">Fun Facts About Me</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {funFacts.map((fact, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-[#001a28] rounded-lg border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:translate-x-2"
                  >
                    <span className="text-gray-300">{fact}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-12 rounded-2xl border border-[#3a86ff]/20 text-center">
          <h3 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to collaborate. 
            Let's create something that makes a difference!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 bg-[#001a28] border-2 border-[#3a86ff] text-[#3a86ff] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#3a86ff] hover:text-white hover:scale-105 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Let's Talk
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}