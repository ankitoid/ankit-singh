import React from "react";
import { useInView, useTyping } from "../hooks";
import { SiLinkedin, SiGithub, SiLeetcode, SiGeeksforgeeks } from "react-icons/si";
import heroImg from "../assets/ankitimg.jpg"; // your actual image

const Hero = () => {
  const typed = useTyping(["Full Stack Developer", "MERN Stack Engineer", "DevOps Enthusiast", "Problem Solver"]);
  const [ref, inView] = useInView(0.05);

  return (
    <section id="heroSection" className="hero grid-bg noise" ref={ref}>
      {/* Glow orbs */}
      <div className="glow-orb" style={{ width:500, height:500, background:"radial-gradient(var(--glow),transparent 70%)", top:"-10%", left:"5%", opacity:0.6 }} />
      <div className="glow-orb" style={{ width:300, height:300, background:"radial-gradient(color-mix(in srgb, var(--accent2) 30%, transparent),transparent 70%)", bottom:"15%", right:"10%", opacity:0.5 }} />

      <div className="hero-content">
        {/* LEFT — Text */}
        <div>
          <div className={`hero-eyebrow fade-up ${inView ? "visible" : ""}`}>
            Available for Work
          </div>
          <h1 className={`hero-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
            Ankit Singh<br /><span>Ghosh</span>
          </h1>
          <div className={`hero-typing fade-up fade-up-d2 ${inView ? "visible" : ""}`}>
            {typed}
          </div>
          <p className={`hero-bio fade-up fade-up-d3 ${inView ? "visible" : ""}`}>
            Software Developer at GlobalXperts crafting high-performance full-stack apps and DevOps pipelines. Passionate about clean code, scalable architecture, and elegant UI.
          </p>

          {/* Socials */}
          <div className={`hero-socials fade-up fade-up-d3 ${inView ? "visible" : ""}`}>
            <a href="https://www.linkedin.com/in/ankitoid/" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
              <SiLinkedin size={18} />
            </a>
            <a href="https://github.com/ankitoid/" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
              <SiGithub size={18} />
            </a>
            <a href="https://leetcode.com/ankitoid/" target="_blank" rel="noreferrer" className="social-icon" title="LeetCode">
              <SiLeetcode size={18} />
            </a>
            <a href="https://www.geeksforgeeks.org/user/ankitoid/" target="_blank" rel="noreferrer" className="social-icon" title="GeeksForGeeks">
              <SiGeeksforgeeks size={18} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div className={`hero-btns fade-up fade-up-d4 ${inView ? "visible" : ""}`}>
            <button
              className="btn-primary"
              onClick={() => window.open("https://drive.google.com/file/d/1AKDE65IXTJmkKnBJX7B3h0IzopUkyyzR/view?usp=sharing", "_blank")}
            >
              ↓ Download Resume
            </button>
            <button
              className="btn-ghost"
              onClick={() => document.getElementById("MyProjects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Projects →
            </button>
          </div>
        </div>

        {/* RIGHT — Animated image ring */}
        <div className={`hero-img-wrap fade-up fade-up-d2 ${inView ? "visible" : ""}`}>
          <div className="hero-img-ring">
            <div className="hero-img-inner">
              <img src={heroImg} alt="Ankit Singh Ghosh" />
            </div>
          </div>
          <div className="hero-stat-card top-right">
            <div className="hero-stat-num">1+</div>
            <div className="hero-stat-label">Years of Experience</div>
          </div>
          <div className="hero-stat-card bottom-left">
            <div className="hero-stat-num">15+</div>
            <div className="hero-stat-label">Tech Stack Expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;