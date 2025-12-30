import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { ReactNode } from "react";
import { Raleway } from "next/font/google";
import Particles from "../portfolio-react/Particles";
import BackToTop from "../components/BackToTop";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Dewansh Warjurkar",
  description: "Web Developer Portfolio of Dewansh Warjurkar",
  icons: {
    icon: "https://avatars.githubusercontent.com/u/163340981?s=400&u=d0177588b3f69a45542156cf79387a389851cc00&v=4",
  },
};


type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${raleway.className} scroll-smooth`}>
      <body className="relative bg-[#000d1b] text-[#ffe6c7] overflow-x-hidden">
        <Particles
          particleColors={['#fff', '#fff']}
          particleCount={300}
          particleSpread={14}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
