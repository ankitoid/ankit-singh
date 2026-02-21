import React from "react";
import { useInView } from "../hooks";
import TechBlog from "../assets/Resources/techBlog.jpg";
import Tutorial from "../assets/Resources/tutorial.jpg";
import interviewPrep from "../assets/Resources/interviewImg.jpg";

const BLOGS = [
  {
    src: TechBlog,
    title: "Tech Blog",
    desc: "Deep dives into Front-End patterns, DevOps pipelines, and modern web architecture.",
    link: "https://studyespace.vercel.app/blog",
    bar: "linear-gradient(90deg,#3b82f6,#6366f1)",
  },
  {
    src: Tutorial,
    title: "Tutorials",
    desc: "Step-by-step guides on modern web development — from React hooks to Kubernetes.",
    link: "https://studyespace.vercel.app/courses",
    bar: "linear-gradient(90deg,#10b981,#06b6d4)",
  },
  {
    src: interviewPrep,
    title: "Interview Prep",
    desc: "Curated coding problems and system design resources to crack top-tier interviews.",
    link: "https://studyespace.vercel.app/About-Us",
    bar: "linear-gradient(90deg,#f59e0b,#ef4444)",
  },
  {
    src: interviewPrep,
    title: "Job Board",
    desc: "Curated list of tech opportunities for developers — from startups to FAANG.",
    link: "https://studyespace.vercel.app/Job-Opportunities",
    bar: "linear-gradient(90deg,#ec4899,#8b5cf6)",
  },
];

const Blog = () => {
  const [ref, inView] = useInView();

  return (
    <section className="section" ref={ref}>
      <div className="section-inner">
        <div className={`section-label fade-up ${inView ? "visible" : ""}`}>Content</div>
        <h2 className={`section-title fade-up fade-up-d1 ${inView ? "visible" : ""}`}>
          Blog &amp; <span>Resources</span>
        </h2>

        <div className="blog-grid">
          {BLOGS.map((b, i) => (
            <a
              key={i}
              href={b.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`blog-card fade-up fade-up-d${i + 1} ${inView ? "visible" : ""}`}
            >
              <div className="blog-img">
                <img src={b.src} alt={b.title} />
              </div>
              <div className="blog-color-bar" style={{ background: b.bar }} />
              <div className="blog-body">
                <div className="blog-title">{b.title}</div>
                <div className="blog-desc">{b.desc}</div>
                <div className="blog-link">Read more →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;