"use client";

import { useState } from 'react';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio built with Next.js featuring smooth animations and interactive components.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=600&fit=crop',
      tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/dewanshhh24/Personal_Portfolio.git',
      live: 'https://dewansh-portfolio.vercel.app',
      category: 'Development',
      featured: true
    },
    {
      title: 'Movie Recommender System',
      description: 'ML-powered recommendation engine that suggests movies based on user preferences and viewing history.',
      image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=800&h=600&fit=crop',
      tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas'],
      github: 'https://github.com/dewanshhh24/movie-recommender',
      live: '#',
      category: 'Machine Learning',
      featured: true
    },
    // {
    //   title: 'Nutrition AI Assistant',
    //   description: 'AI-powered nutrition tracker that analyzes meals and provides personalized dietary recommendations.',
    //   image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop',
    //   tech: ['React', 'Node.js', 'Express', 'OpenAI API'],
    //   github: '#',
    //   live: '#',
    //   category: 'Development',
    //   featured: false
    // },
    // {
    //   title: 'Task Management App',
    //   description: 'Full-stack task tracker with real-time updates, team collaboration features, and progress analytics.',
    //   image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&h=600&fit=crop',
    //   tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    //   github: '#',
    //   live: '#',
    //   category: 'Development',
    //   featured: false
    // },

    // {
    //   title: 'Weather Dashboard',
    //   description: 'Real-time weather application with interactive maps, forecasts, and location-based alerts.',
    //   image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=600&fit=crop',
    //   tech: ['React', 'TypeScript', 'Weather API', 'Chart.js'],
    //   github: '#',
    //   live: '#',
    //   category: 'Development',
    //   featured: false
    // },
    {
      title: 'GoShop',
      description: 'A full-stack e-commerce platform offering seamless shopping, and complete product & order management.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      tech: ['Next.js', 'Firebase', 'MongoDB', 'Tailwind'],
      github: 'https://github.com/dewanshhh24/GoShop.git',
      live: '#',
      category: 'Development',
      featured: false
    },
    // {
    //   title: 'Sentiment Analysis Tool',
    //   description: 'NLP-based tool that analyzes text sentiment from social media posts and customer reviews.',
    //   image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
    //   tech: ['Python', 'NLTK', 'TensorFlow', 'Flask'],
    //   github: '#',
    //   live: '#',
    //   category: 'Machine Learning',
    //   featured: false
    // },
    {
      title: 'CampusGPT',
      description: 'An All-in-one GenAI assistant for syllabus, exams, resources, and career guidance on campus.',
      image: 'https://images.unsplash.com/photo-1659018966820-de07c94e0d01?q=80&w=898&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tech: ['Next.js', 'Firebase', 'Gemini', 'Tailwind CSS'],
      github: 'https://github.com/dewanshhh24/CampusGPT.git',
      live: '#',
      category: 'Machine Learning',
      featured: false
    },
    {
  title: 'Marvel Comic Library',
  description: 'A web-based application that allows users to browse, search, and explore Marvel comics.',
  image: 'https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  tech: ['React', 'JavaScript', 'Marvel API', 'CSS'],
  github: 'https://github.com/dewanshhh24/Marvel.git',
  live: '#',
  category: 'Development',
  featured: false
},
{
  title: 'Credit Card Fraud Detection',
  description: 'Machine learning-based system to detect fraudulent credit card transactions by analyzing transaction patterns and anomalies.',
  image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop',
  tech: ['Python', 'Pandas', 'NumPy', 'Scikit-learn'],
  github: 'https://github.com/dewanshhh24/credit-card-fraud-detection-ml.git',
  live: '#',
  category: 'Machine Learning',
  featured: false
}




  ];

  const categories = ['All', 'Development', 'Machine Learning'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="min-h-screen px-6 py-20 text-[#ffe6c7]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-size-[200%_auto]">
            My Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A collection of projects showcasing my skills in development, machine learning, and software engineering.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white shadow-lg shadow-[#3a86ff]/30 scale-105'
                  : 'bg-[#00202f] border border-[#3a86ff]/30 text-gray-300 hover:border-[#3a86ff] hover:scale-105'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-3xl font-bold text-[#3a86ff] mb-2">{projects.length}+</p>
            <p className="text-sm text-gray-400">Total Projects</p>
          </div>
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-3xl font-bold text-[#06ffa5] mb-2">{projects.filter(p => p.featured).length}</p>
            <p className="text-sm text-gray-400">Featured</p>
          </div>
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-3xl font-bold text-[#3a86ff] mb-2">15+</p>
            <p className="text-sm text-gray-400">Technologies</p>
          </div>
          <div className="bg-linear-to-br from-[#00202f] to-[#001a28] p-6 rounded-xl border border-[#3a86ff]/20 text-center">
            <p className="text-3xl font-bold text-[#06ffa5] mb-2">100%</p>
            <p className="text-sm text-gray-400">Open Source</p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group bg-linear-to-br from-[#00202f] to-[#001a28] rounded-2xl border border-[#3a86ff]/20 overflow-hidden hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#3a86ff]/20"
            >
              {/* Project Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white text-xs font-bold px-3 py-1 rounded-full">
                    Featured
                  </div>
                )}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-[#00202f] via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Project Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#ffe6c7] mb-2 group-hover:text-[#3a86ff] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-[#3a86ff]/10 text-[#3a86ff] rounded-full border border-[#3a86ff]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#001a28] border border-[#3a86ff]/30 text-[#3a86ff] py-2 rounded-lg hover:bg-[#3a86ff] hover:text-white transition-all duration-300 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </a>
                  {/* <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white py-2 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-[#3a86ff]/30 transition-all duration-300 group/btn"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 mx-auto mb-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 12h.01M12 12h.01M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-xl text-gray-400">No projects found in this category</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-20 bg-linear-to-br from-[#00202f] to-[#001a28] p-12 rounded-2xl border border-[#3a86ff]/20 text-center">
          <h3 className="text-3xl font-bold mb-4">Want to collaborate?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30 transition-all duration-300"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in Touch
          </a>
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