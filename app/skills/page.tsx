"use client";

import { useState, useRef } from "react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      shortTitle: "Frontend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-500",
      accentColor: "#3a86ff",
      skills: [
        { name: "HTML5", icon: "🌐" },
        { name: "CSS3", icon: "🎨" },
        { name: "JavaScript", icon: "⚡" },
        { name: "React", icon: "⚛️" },
        { name: "Next.js", icon: "▲" },
        { name: "Tailwind CSS", icon: "💨" },
        { name: "TypeScript", icon: "📘" },
      ],
    },
    {
      title: "Backend Development",
      shortTitle: "Backend",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
      color: "from-green-500 to-emerald-500",
      accentColor: "#06ffa5",
      skills: [
        { name: "Springboot", icon: "🍃" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🌿" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "Firebase", icon: "🔥" },
        { name: "REST APIs", icon: "🔌" },
      ],
    },
    {
      title: "Programming Languages",
      shortTitle: "Languages",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "from-purple-500 to-pink-500",
      accentColor: "#a855f7",
      skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "C/C++", icon: "⚙️" },
        { name: "JavaScript", icon: "📜" },
        { name: "SQL", icon: "💾" },
      ],
    },
    {
      title: "AI & Machine Learning",
      shortTitle: "AI / ML",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
      color: "from-orange-500 to-red-500",
      accentColor: "#f97316",
      skills: [
        { name: "TensorFlow", icon: "🧠" },
        { name: "Scikit-learn", icon: "📊" },
        { name: "Pandas", icon: "🐼" },
        { name: "NumPy", icon: "🔢" },
        { name: "OpenCV", icon: "👁️" },
      ],
    },
    {
      title: "Tools & Platforms",
      shortTitle: "Tools",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-500",
      accentColor: "#eab308",
      skills: [
        { name: "Git & GitHub", icon: "🐙" },
        { name: "Docker", icon: "🐳" },
        { name: "VS Code", icon: "💻" },
        { name: "Postman", icon: "📮" },
        { name: "Figma", icon: "🎨" },
      ],
    },
    {
      title: "Soft Skills",
      shortTitle: "Soft Skills",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-teal-500 to-cyan-500",
      accentColor: "#14b8a6",
      skills: [
        { name: "Problem Solving", icon: "🧩" },
        { name: "Team Collaboration", icon: "🤝" },
        { name: "Communication", icon: "💬" },
        { name: "Time Management", icon: "⏰" },
        { name: "Leadership", icon: "👑" },
      ],
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const activeCategory = skillCategories[activeIndex];
  const totalSkills = skillCategories.reduce((sum, cat) => sum + cat.skills.length, 0);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) < 40) return;
    if (delta > 0) {
      setActiveIndex((prev) => (prev + 1) % skillCategories.length);
    } else {
      setActiveIndex((prev) => (prev - 1 + skillCategories.length) % skillCategories.length);
    }
    touchStartX.current = null;
  };

  return (
    <main className="min-h-screen">
      <style>{`
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .skill-card-animate {
          animation: fadeSlideUp 0.28s ease forwards;
          opacity: 0;
        }
      `}</style>

      <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20" id="skills">

        {/* ── Header ── */}
        <div className="mb-14 text-center space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-size-[200%_auto]">
            My Skills & Expertise
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A comprehensive overview of my technical abilities and proficiencies across various domains.
          </p>
          <div className="h-1 w-28 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full" />
        </div>

        {/* ── Stats ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { value: `${totalSkills}+`, label: "Total Skills", color: "#3a86ff" },
            { value: skillCategories.length, label: "Categories", color: "#06ffa5" },
            { value: "15+", label: "Technologies", color: "#3a86ff" },
            { value: "2+", label: "Years Experience", color: "#06ffa5" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-linear-to-br from-[#00202f] to-[#001a28] p-5 rounded-xl border border-[#3a86ff]/20 flex flex-col items-center justify-center gap-1 text-center"
            >
              <p className="text-3xl md:text-4xl font-bold" style={{ color: stat.color }}>
                {stat.value}
              </p>
              <p className="text-xs md:text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* ── Tabbed Skills Panel ── */}
        <div className="bg-linear-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/20 overflow-hidden">

          {/* Tab Bar */}
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex items-center justify-center flex-wrap gap-1.5 p-3 sm:p-4 border-b border-[#3a86ff]/20 bg-[#001220]/70"
          >
            {skillCategories.map((category, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="skill-panel"
                  onClick={() => setActiveIndex(index)}
                  className={[
                    "flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a86ff]/60",
                    isActive
                      ? "bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-md shadow-[#3a86ff]/20"
                      : "text-gray-400 hover:text-[#ffe6c7] hover:bg-[#3a86ff]/10 border border-[#3a86ff]/10 hover:border-[#3a86ff]/25",
                  ].join(" ")}
                >
                  <span className="text-white/90 [&>svg]:w-4 [&>svg]:h-4" aria-hidden="true">
                    {category.icon}
                  </span>
                  <span className="hidden xs:inline sm:inline">{category.shortTitle}</span>
                </button>
              );
            })}
          </div>

          {/* Panel Body */}
          <div id="skill-panel" role="tabpanel" className="p-5 sm:p-8" onTouchStart={handleTouchStart} onTouchEnd={handleTouchEnd}>

            {/* Panel Header — icon + title + badge */}
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-[#3a86ff]/15">
              <div
                className={`w-12 h-12 sm:w-14 sm:h-14 shrink-0 bg-linear-to-br ${activeCategory.color} rounded-xl flex items-center justify-center text-white`}
                aria-hidden="true"
              >
                {activeCategory.icon}
              </div>
              <div className="min-w-0 text-left">
                <h2 className="text-xl sm:text-2xl font-bold text-[#ffe6c7] leading-snug truncate">
                  {activeCategory.title}
                </h2>
                <p className="text-sm text-gray-400 mt-0.5">
                  {activeCategory.skills.length} skills
                </p>
              </div>
              <span
                className="ml-auto shrink-0 hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold tracking-wide"
                style={{
                  borderColor: `${activeCategory.accentColor}40`,
                  color: activeCategory.accentColor,
                  background: `${activeCategory.accentColor}12`,
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: activeCategory.accentColor }}
                />
                {activeIndex + 1} / {skillCategories.length}
              </span>
            </div>

            {/* Skills Grid with Side Arrows */}
            <div className="flex items-center gap-3">
              {/* Left Arrow */}
              <button
                aria-label="Previous category"
                onClick={() => setActiveIndex((activeIndex - 1 + skillCategories.length) % skillCategories.length)}
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl border border-[#3a86ff]/20 text-gray-400 hover:text-[#ffe6c7] hover:border-[#3a86ff]/50 hover:bg-[#3a86ff]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a86ff]/60"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              {/* Grid */}
              <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {activeCategory.skills.map((skill, skillIndex) => (
                  <div
                    key={`${activeIndex}-${skillIndex}`}
                    style={{ animationDelay: `${skillIndex * 45}ms` }}
                    className="skill-card-animate flex items-center gap-3 px-4 py-3 bg-[#001a28] rounded-xl border border-[#3a86ff]/10 hover:border-[#3a86ff]/40 hover:bg-[#00243a] transition-all duration-200 cursor-default group/skill"
                  >
                    <span
                      className="text-xl leading-none shrink-0 group-hover/skill:scale-110 transition-transform duration-200"
                      aria-hidden="true"
                    >
                      {skill.icon}
                    </span>
                    <span className="text-[#ffe6c7] text-sm font-medium group-hover/skill:text-[#3a86ff] transition-colors duration-200 leading-tight">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                aria-label="Next category"
                onClick={() => setActiveIndex((activeIndex + 1) % skillCategories.length)}
                className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl border border-[#3a86ff]/20 text-gray-400 hover:text-[#ffe6c7] hover:border-[#3a86ff]/50 hover:bg-[#3a86ff]/10 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a86ff]/60"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Dot Navigation */}
            <div
              className="flex items-center justify-center gap-2 mt-8 pt-6 border-t border-[#3a86ff]/15"
              role="navigation"
              aria-label="Category navigation"
            >
              {skillCategories.map((cat, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${cat.title}`}
                  className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a86ff]/60 ${
                    activeIndex === index
                      ? "w-7 h-2 bg-linear-to-r from-[#3a86ff] to-[#06ffa5]"
                      : "w-2 h-2 bg-[#3a86ff]/25 hover:bg-[#3a86ff]/50"
                  }`}
                />
              ))}
            </div>

          </div>
        </div>

        {/* ── Learning Journey ── */}
        <div className="mt-12 bg-linear-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/20 overflow-hidden">
          <div className="flex flex-col md:flex-row items-center gap-0">

            {/* Text side */}
            <div className="flex-1 p-8 sm:p-10 space-y-5 text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#ffe6c7]">Continuous Learning</h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-prose">
                I'm constantly expanding my skill set and staying updated with the latest technologies.
                Currently learning cloud architecture, advanced React patterns, and exploring generative AI.
              </p>
              <div className="flex flex-wrap gap-2.5">
                <span className="px-4 py-2 bg-[#3a86ff]/10 text-[#3a86ff] rounded-full text-sm font-medium border border-[#3a86ff]/30 whitespace-nowrap">
                  🚀 AWS Solutions Architect
                </span>
                <span className="px-4 py-2 bg-[#06ffa5]/10 text-[#06ffa5] rounded-full text-sm font-medium border border-[#06ffa5]/30 whitespace-nowrap">
                  🎯 Advanced React Patterns
                </span>
                <span className="px-4 py-2 bg-purple-500/10 text-purple-400 rounded-full text-sm font-medium border border-purple-500/30 whitespace-nowrap">
                  🤖 Generative AI
                </span>
              </div>
            </div>

            {/* Icon side */}
            <div className="shrink-0 flex items-center justify-center p-8 md:p-10 border-t border-[#3a86ff]/15 md:border-t-0 md:border-l md:border-[#3a86ff]/15 w-full md:w-auto">
              <div className="w-36 h-36 sm:w-44 sm:h-44 bg-linear-to-br from-[#3a86ff]/15 to-[#06ffa5]/15 rounded-full flex items-center justify-center border border-[#3a86ff]/20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-16 h-16 sm:w-20 sm:h-20 text-[#3a86ff]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>

          </div>
        </div>

        {/* ── CTA ── */}
        <div className="mt-10 text-center">
          <a
            href="#projects"
            className="inline-flex items-center gap-3 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white px-8 py-4 rounded-xl font-semibold text-base sm:text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30 transition-all duration-300"
          >
            <span>See My Skills in Action</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

      </section>
    </main>
  );
}