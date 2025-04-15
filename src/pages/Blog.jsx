import React from "react";
import TechBlog from "../assets/Resources/techBlog.jpg";
import Tutorial from "../assets/Resources/tutorial.jpg";
import interviewPrep from "../assets/Resources/interviewImg.jpg";

const Blog = () => {
  const blogs = [
    {
      title: "Tech Blog",
      description: "Explore my latest tech blogs on Front-End, DevOps.",
      link: "https://studyespace.vercel.app/blog",
      image: TechBlog,
      bg: "bg-blue-600",
    },
    {
      title: "Tutorials",
      description: "Step-by-step guides on modern web development.",
      link: "https://studyespace.vercel.app/courses",
      image: Tutorial,
      bg: "bg-green-600",
    },
    {
      title: "Interview Practice",
      description: "Crack coding interviews with my practice questions.",
      link: "https://studyespace.vercel.app/About-Us",
      image: interviewPrep,
      bg: "bg-yellow-600",
    }, {
      title: "Job Opportunities",
      description: "Found your dream job with my curated list of opportunities.",
      link: "https://studyespace.vercel.app/Job-Opportunities",
      image: interviewPrep,
      bg: "bg-red-600",
    },
  ];
  return (
    <section className="bg-[#111010] text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 relative inline-block before:absolute before:-inset-2 before:bg-gradient-to-r before:from-blue-400 before:to-purple-600 before:-z-10 before:rounded-lg">
          My Blog & Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-100 hover:shadow-2xl"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0  bg-opacity-50 group-hover:bg-opacity-30 transition duration-500"></div>
              </div>
              <div className={`p-6 ${blog.bg} text-white`}>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {blog.title}
                </h3>
                <p className="text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                  {blog.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
