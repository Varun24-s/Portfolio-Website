import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { FaReact, FaHtml5, FaCss3Alt, FaJs } from 'react-icons/fa';
import { SiCplusplus, SiC } from 'react-icons/si';
import { BiCodeAlt } from 'react-icons/bi';

function Skills() {
  const skillCategories = [
    {
      title: "Development Skills",
      skills: [
        { name: "React", icon: <FaReact className="text-[#61DAFB]" />, level: 70 },
        { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" />, level: 85 },
        { name: "HTML5", icon: <FaHtml5 className="text-[#E34F26]" />, level: 95 },
        { name: "CSS3", icon: <FaCss3Alt className="text-[#1572B6]" />, level: 90 },
      ]
    },
    {
      title: "Programming Languages",
      skills: [
        { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: 80 },
        { name: "C", icon: <SiC className="text-[#A8B9CC]" />, level: 70 },
      ]
    },
    {
      title: "Problem Solving",
      skills: [
        { name: "Data Structures", icon: <BiCodeAlt className="text-purple-400" />, level: 50 },
        { name: "Algorithms", icon: <BiCodeAlt className="text-purple-400" />, level: 50 },
      ]
    }
  ];

  const containerRef = useRef(null);
  const x = useMotionValue(0);
  const { scrollXProgress } = useScroll({ container: containerRef });
  const springConfig = { damping: 15, stiffness: 150 };
  const transform = useSpring(useTransform(scrollXProgress, [0, 1], [0, -100]), springConfig);

  return (
    <section id="skills" className="bg-[#0b0314] text-white md:mt-55 py-8 sm:h-[80vh] relative z-0">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold mb-8 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Skills
          </span>
        </h2>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                {category.title}
              </h3>
              <div className="space-y-4 sm:space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex items-center gap-2">
                      <motion.span 
                        className="text-xl sm:text-2xl"
                        whileHover={{ scale: 1.2 }}
                      >
                        {skill.icon}
                      </motion.span>
                      <span className="text-gray-300">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-purple-400 to-pink-600"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider View */}
        <div className="md:hidden overflow-hidden mb-12">
          <motion.div
            ref={containerRef}
            className="flex gap-6 cursor-grab active:cursor-grabbing overflow-x-scroll scrollbar-hide pb-4"
            drag="x"
            dragConstraints={{ left: -(skillCategories.length * 300), right: 0 }}
            style={{ x }}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                className="bg-white/5 rounded-lg p-4 min-w-[300px] w-[85vw] max-w-[360px] backdrop-blur-sm flex-shrink-0"
                style={{ x: transform }}
              >
                <h3 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <motion.span 
                          className="text-xl"
                          whileHover={{ scale: 1.2 }}
                        >
                          {skill.icon}
                        </motion.span>
                        <span className="text-gray-300">{skill.name}</span>
                      </div>
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: skillIndex * 0.1 }}
                          className="h-full bg-gradient-to-r from-purple-400 to-pink-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-center text-gray-400 text-sm mt-4">Swipe to see more →</p>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-25 sm:mt-16 relative z-10">   
      </motion.div>
    </section>
  );
}

export default Skills;