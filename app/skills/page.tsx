"use client";

import { useState } from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "TypeScript", icon: "📘" }
      ]
    },
    {
      title: "Backend Development",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Springboot", icon: "🍃" },
        { name: "Node.js", icon: "🟢" },
        // { name: "Express.js", icon: "🚂" },
        { name: "MongoDB", icon: "🌿" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Firebase", icon: "🔥" },
        { name: "REST APIs", icon: "🔌" }
      ]
    },
    {
      title: "Programming Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "C/C++", icon: "⚙️" },
        { name: "JavaScript", icon: "📜" },
        { name: "SQL", icon: "💾" }
      ]
    },
    {
      title: "AI & Machine Learning",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "TensorFlow", icon: "🧠" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "OpenCV", icon: "👁️" }
      ]
    },
    {
      title: "Tools & Platforms",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-500",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
        // { name: "AWS", icon: "☁️" }
      ]
    },
    {
      title: "Soft Skills",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Collaboration", icon: "🤝" },
        { name: "Communication", icon: "💬" },
        { name: "Time Management", icon: "⏰" },
        { name: "Leadership", icon: "👑" }
      ]
    }
  ];

  const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

  return (
    <main className="min-h-screen">
      <section className="relative max-w-7xl mx-auto px-6 py-20 text-center" id="skills">
        
        {/* Header Section */}
        <div className="mb-16 space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-size-[200%_auto]">
            My Skills & Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical abilities and proficiencies across various domains.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20">
            <p className="text-4xl font-bold text-[#3a86ff] mb-2">{totalSkills}+</p>
            <p className="text-sm text-gray-400">Total Skills</p>
          </div>
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20">
            <p className="text-4xl font-bold text-[#06ffa5] mb-2">{skillCategories.length}</p>
            <p className="text-sm text-gray-400">Categories</p>
          </div>
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20">
            <p className="text-4xl font-bold text-[#3a86ff] mb-2">15+</p>
            <p className="text-sm text-gray-400">Technologies</p>
          </div>
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20">
            <p className="text-4xl font-bold text-[#06ffa5] mb-2">2+</p>
            <p className="text-sm text-gray-400">Years Experience</p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {skillCategories.map((category, catIndex) => (
            <div
              key={catIndex}
              className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-101 group"
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-linear-to-br ${category.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h2 className="text-2xl font-bold text-[#ffe6c7] group-hover:text-[#3a86ff] transition-colors duration-300">
                  {category.title}
                </h2>
              </div>

              {/* Skills List */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center gap-3 px-4 py-3 bg-[#001a28] rounded-lg border border-[#3a86ff]/10 hover:border-[#3a86ff]/40 hover:bg-[#001a28]/80 transition-all duration-300 group/skill"
                  >
                    <span className="text-2xl group-hover/skill:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="text-[#ffe6c7] font-medium group-hover/skill:text-[#3a86ff] transition-colors duration-300">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Category Footer */}
              <div className="mt-6 pt-6 border-t border-[#3a86ff]/20">
                <div className="text-center">
                  <span className="text-sm text-gray-400">{category.skills.length} skills</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Journey */}
        <div className="mt-20 bg-linear-to-br from-[#00202f] to-[#001a28] p-12 rounded-2xl border border-[#3a86ff]/20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 text-left space-y-4">
              <h3 className="text-3xl font-bold text-[#ffe6c7]">Continuous Learning</h3>
              <p className="text-gray-300 text-lg">
                I'm constantly expanding my skill set and staying updated with the latest technologies. 
                Currently learning cloud architecture, advanced React patterns, and exploring generative AI.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#3a86ff]/10 text-[#3a86ff] rounded-full text-sm font-medium border border-[#3a86ff]/30">
                  🚀 AWS Solutions Architect
                </span>
                <span className="px-4 py-2 bg-[#06ffa5]/10 text-[#06ffa5] rounded-full text-sm font-medium border border-[#06ffa5]/30">
                  🎯 Advanced React Patterns
                </span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30">
                  🤖 Generative AI
                </span>
              </div>
            </div>
            <div className="shrink-0">
              <div className="w-48 h-48 bg-linear-to-br from-[#3a86ff]/20 to-[#06ffa5]/20 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-[#3a86ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30 transition-all duration-300"
          >
            <span>See My Skills in Action</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      
    </main>
  );
}