"use client";

import { useState } from 'react';
import emailjs from "@emailjs/browser";




export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setFormStatus("Sending...");

  emailjs
    .send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    )
    .then(
      () => {
        setFormStatus("Message sent successfully! 🎉");
        setFormData({ name: "", email: "", subject: "", message: "" });
      },
      (error) => {
        console.error("EmailJS full error:", error);
        setFormStatus("Failed to send message. Please try again later.");
      }
    );
};



  const contactInfo = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      label: "Email",
      value: "dewanshwarjurkar24@gmail.com",
      link: "mailto:dewanshwarjurkar24@gmail.com"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: "Phone",
      value: "+91 8010728200",
      link: "tel:+918010728200"
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      label: "Location",
      value: "Nagpur, India",
      link: null
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/dewanshhh24",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/dewansh-warjurkar",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: "Instagram",
      url: "https://instagram.com/_dewanshhh",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    {
  name: "Codolio",
  url: "https://codolio.com/profile/dewanshhh24",
  icon: (
    <svg
      className="w-6 h-6"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 16c.56.84 1.31 1.53 2.2 2L12 20.2L9.8 18c.89-.47 1.65-1.16 2.2-2m5-4.8a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m-10 0a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m10-2.5a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m-10 0a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4M2.24 1c1.76 3.7.49 6.46-.69 9.2c-.36.8-.55 1.63-.55 2.5a6 6 0 0 0 6 6c.21-.01.42-.02.63-.05l2.96 2.96L12 23l1.41-1.39l2.96-2.96c.21.03.42.04.63.05a6 6 0 0 0 6-6c0-.87-.19-1.7-.55-2.5C21.27 7.46 20 4.7 21.76 1c-2.64 2.06-6.4 3.69-9.76 3.7C8.64 4.69 4.88 3.06 2.24 1" />
    </svg>
  )
},
    
  ];

  return (
    <section id="contact" className="min-h-screen text-[#ffe6c7] flex items-center justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight pb-2 bg-linear-to-r from-[#3a86ff] via-[#06ffa5] to-[#3a86ff] bg-clip-text text-transparent animate-[gradient_3s_ease_infinite] bg-size-[200%_auto]">
            Let's Create Something Together
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Whether it's about a project or just to connect, I'm always up for a good conversation. 
            Drop me a message anytime.
          </p>
          <div className="h-1 w-32 bg-linear-to-r from-[#3a86ff] to-[#06ffa5] mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Info & Form */}
          <div className="space-y-8">
            
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-linear-to-br from-[#00202f] to-[#001a28] p-5 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-linear-to-br from-[#3a86ff] to-[#06ffa5] rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-gray-400 mb-1">{info.label}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-[#ffe6c7] font-medium hover:text-[#3a86ff] transition-colors duration-300"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-[#ffe6c7] font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Connect With Me</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-linear-to-br from-[#00202f] to-[#001a28] p-4 rounded-xl border border-[#3a86ff]/20 hover:border-[#3a86ff]/50 transition-all duration-300 hover:scale-110 group flex flex-col items-center justify-center gap-2"
                  >
                    <div className="text-[#ffe6c7] group-hover:text-[#ffffff] transition-colors duration-300">
                      {social.icon}
                    </div>
                    <span className="text-sm text-[#ffe6c7]  group-hover:text-gray-200 transition-colors duration-300">
                      {social.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="bg-linear-to-br from-[#00202f] to-[#001a28] p-8 rounded-2xl border border-[#3a86ff]/20">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              <div className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-[#ffe6c7] mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#001a28] border border-[#3a86ff]/30 text-[#ffe6c7] focus:outline-none focus:border-[#3a86ff] focus:ring-2 focus:ring-[#3a86ff]/20 transition-all duration-300"
                    placeholder="Dewansh Warjurkar"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#ffe6c7] mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#001a28] border border-[#3a86ff]/30 text-[#ffe6c7] focus:outline-none focus:border-[#3a86ff] focus:ring-2 focus:ring-[#3a86ff]/20 transition-all duration-300"
                    placeholder="dewanshwarjurkar24@gmail.com"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#ffe6c7] mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#001a28] border border-[#3a86ff]/30 text-[#ffe6c7] focus:outline-none focus:border-[#3a86ff] focus:ring-2 focus:ring-[#3a86ff]/20 transition-all duration-300"
                    placeholder="Project Collaboration"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-[#ffe6c7] mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#001a28] border border-[#3a86ff]/30 text-[#ffe6c7] focus:outline-none focus:border-[#3a86ff] focus:ring-2 focus:ring-[#3a86ff]/20 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "Sending..."}
                  className="w-full bg-linear-to-r from-[#3a86ff] to-[#06ffa5] text-white py-4 rounded-lg font-semibold text-lg hover:scale-105 hover:shadow-xl hover:shadow-[#3a86ff]/30 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Message
                </button>

                {formStatus && (
                  <div className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-400 text-center animate-pulse">
                    {formStatus}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* RIGHT COLUMN: Illustration */}
          <div className="flex justify-center items-center lg:sticky lg:top-24">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-linear-to-r from-[#3a86ff]/20 to-[#06ffa5]/20 blur-3xl rounded-full"></div>
              
              <img 
                src="/contact-illustration.png"
                alt="Contact Illustration"
                className="relative w-full max-w-lg mx-auto animate-[levitate_3s_ease-in-out_infinite] drop-shadow-2xl"
              />
            </div>
          </div>
        </div>

        
      </div>

      
    </section>
  );
}