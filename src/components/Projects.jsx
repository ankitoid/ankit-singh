import React from "react";
import { motion } from "framer-motion";
import homestay from "../assets/homestay.png";
import helloworld from "../assets/helloworld.png";
import taskmanager from "../assets/taskmanager.png";

const portfolioData = [
  {
    id: "1",
    src: homestay,
    title: "Excellence Study",
    description: "A full stack based web application to support authentic family to run their homestay by providing accommodation to students. ReactJS was used to create a fully responsive, single-page frontend. GraphQL is used to embed notes from Hashnode, and Next.js handles API routes.",
    link: "https://github.com/ankitoid/Excellence-Study"
  },
  {
    id: "2",
    src: helloworld,
    title: "Hello World!",
    description: "A full-stack web app that emulates core functionality of social media platforms. Features include user login/signup, post creation, liking posts, and following/unfollowing other users. React is used with Redux for state management, and JWT Token for authentication.",
    link: "https://github.com/ankitoid/Hello-World"
  },
  {
    id: "3",
    src: taskmanager,
    title: "Fitness Club",
    description: "A full-stack Fitness Club web application that empowers users with efficient fitness functionality. With comprehensive CRUD operations, users can create, view, update, and delete tasks, ensuring a seamless and organized GYM management experience.",
    link: "https://github.com/ankitoid/FitnessClub/tree/main"
  }
];

const MyPortfolio = () => {
  const goToGithub = () => {
    window.open("https://github.com/ankitoid", "_blank");
  };

  return (
    <section className="portfolio--section py-16 bg-gray-900 text-white max-w-7xl mx-auto" id="MyProjects">
      <div className="portfolio--container-box text-center mb-10">
        <h2 className="text-4xl font-bold">My Projects</h2>
        <p className="text-gray-400 mt-2">Explore my latest work in web development and software engineering.</p>
        <button className="btn-github mt-4 px-6 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition" onClick={goToGithub}>
          Visit My GitHub
        </button>
      </div>

      <motion.div 
        className="portfolio--section--container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {portfolioData.map((item, idx) => (
          <motion.div
            key={idx}
            className="portfolio--section--card bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
          >
            <div className="portfolio--section--img">
              <img src={item.src} alt={item.title} className="w-full h-48 object-cover" />
            </div>
            <div className="portfolio--section--card--content p-6">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{item.description}</p>
              <button
                className="go--to--github--button px-4 py-2 bg-blue-600 rounded-md text-white hover:bg-blue-700 transition"
                onClick={() => window.open(item.link, "_blank")}
              >
                View on GitHub
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default MyPortfolio;