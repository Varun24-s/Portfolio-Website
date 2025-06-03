import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { SiReact, SiTailwindcss, SiJavascript, SiCss3, SiHtml5 } from 'react-icons/si';

const ProjectCard = ({ title, description, tech, github, demo, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-[#1a0b2e] rounded-xl p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-purple-900/20 h-full flex flex-col"
    >
      <div className="relative overflow-hidden rounded-lg mb-3 sm:mb-4 h-48 sm:h-52 md:h-56">
        <a href={demo} target="_blank" rel="noopener noreferrer">
          <img src={image} alt={title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </a>
      </div>
      <h3 className="text-xl sm:text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
        {title}
      </h3>
      <p className="text-sm sm:text-base text-gray-300 mb-3 sm:mb-4 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
        {tech.map((Icon, index) => (
          <Icon key={index} className="text-xl sm:text-2xl text-purple-400" />
        ))}
      </div>
      <div className="flex gap-3 sm:gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FiGithub className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-purple-400 transition-colors"
        >
          <FiExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
        </a>
      </div>
    </motion.div>
  );
};

function Projects() {
  const projects = [
    {
      title: "Todo App",
      description: "A modern todo application with features like Editing existing tasks, deleting tasks, and local storage persistence. Built with React and styled using Tailwind CSS.",
      tech: [SiReact, SiTailwindcss, SiJavascript],
      github: "https://github.com/Varun24-s/todo-app",
      demo: "http://todo-app-jade-chi-82.vercel.app/",
      image: "./todo-app.jpg"
    },
    {
      title: "Password Generator",
      description: "A secure password generator with customizable options for length, characters, and complexity. Features a strength indicator and copy-to-clipboard functionality.",
      tech: [SiReact, SiTailwindcss, SiJavascript],
      github: "https://github.com/Varun24-s/Password-Generator",
      demo: "https://passwordgenerator-two-kappa.vercel.app/",
      image: "./password-generator.png"
    },
    {
      title: "Tic Tac Toe",
      description: "An interactive Tic Tac Toe game with a clean UI, win detection. Play against a friend .",
      tech: [SiHtml5, SiCss3, SiJavascript],
      github: "https://github.com/Varun24-s/tic-tac-toe",
      demo: "https://varun24-s.github.io/tic-tac-toe/",
      image: "./tic-tac-toe.jpg"
    }
  ];

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const springConfig = { damping: 15, stiffness: 150 };
  const transform = useSpring(useTransform(scrollXProgress, [0, 1], [0, -100]), springConfig);

  return (
    <section id="projects" className="bg-[#0b0314] text-white py-8 sm:h-[80vh] relative z-0">
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-8 text-center"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Projects
          </span>
        </motion.h2>

        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="sm:hidden">
          <div className="overflow-x-auto pb-4" style={{ WebkitOverflowScrolling: 'touch' }}>
            <div className="flex gap-4 w-fit">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="min-w-[280px] w-[80vw]"
                >
                  <ProjectCard {...project} />
                </div>
              ))}
            </div>
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">Scroll horizontally to see more →</p>
        </div>

        <style jsx>{`
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-15 relative z-10">   
      </motion.div>
    </section>
  );
}

export default Projects; 