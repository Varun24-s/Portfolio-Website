import React from 'react';
import { motion } from 'framer-motion';

function About() {
  return (
    <>
      {/* Mobile version - no animations */}
      <section className="sm:hidden bg-transparent text-white mt-75 py-4 relative z-[100]">
        <div className="container mx-auto px-4 mb-10">
          <h2 className="text-3xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </span>
          </h2>

          <div className="grid grid-cols-1 gap-6">
            {/* Left column - Text content */}
            <div className="space-y-4">
              <p className="text-base text-gray-300 leading-relaxed">
                Greetings!
                I am Varun Sharma, a first year student at Maulana Azad National Institute of Technology pursuing a B.Tech in Computer Science in Engineering. My passion lies in exploring new technologies and acquiring new skills. I have a particular interest in web development and programming. Additionally , I work with C++ programming.<br/><br/>
                I am dedicated to mastering Data Structures and Algorithms (DSA) with C++, regularly practicing on LeetCode to sharpen my problem-solving skills.<br/><br/>
                Along with technical skills, I have a profound passion for music and poetry. I am confident, possess strong communication abilities, and maintain a persistent attitude.<br/><br/>
                As a dedicated student, I strive to work hard and consistently, aiming to balance my academic responsibilities with extracurricular activities. I am looking forward to my overall growth and development in the coming years.
              </p>
            </div>

            {/* Right column - Additional info */}
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-4 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  What I Do
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">Build responsive and interactive web applications</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">Optimize applications for maximum speed and scalability</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <svg className="w-5 h-5 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-300">I am a quick learner and I am always looking to improve my skills</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className='text-gray-300 font-semibold italic ml-2 text-center text-xl mt-20'>
                  "Crafting beautiful code is my passion, <br/>solving problems is my mission."
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-20"></div>
      </section>

      {/* Desktop version - with animations */}
      <section className="hidden sm:block bg-transparent text-white py-4 h-[70vh] md:-mt-0.5 relative z-0">
        <div className="container mx-auto px-4 mb-20">
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              About Me
            </span>
          </h2>

          <div className="grid grid-cols-2 gap-8">
            {/* Left column - Text content */}
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                Greetings!
                I am Varun Sharma, a first year student at Maulana Azad National Institute of Technology pursuing a B.Tech in Computer Science in Engineering. My passion lies in exploring new technologies and acquiring new skills. I have a particular interest in web development and programming. Additionally , I work with C++ programming.<br/><br/>
                I am dedicated to mastering Data Structures and Algorithms (DSA) with C++, regularly practicing on LeetCode to sharpen my problem-solving skills.<br/><br/>
                Along with technical skills, I have a profound passion for music and poetry. I am confident, possess strong communication abilities, and maintain a persistent attitude.<br/><br/>
                As a dedicated student, I strive to work hard and consistently, aiming to balance my academic responsibilities with extracurricular activities. I am looking forward to my overall growth and development in the coming years.
              </p>
            </div>

            {/* Right column - Additional info */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  What I Do
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-300">Build responsive and interactive web applications</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-300">Optimize applications for maximum speed and scalability</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-purple-400 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base text-gray-300">I am a quick learner and I am always looking to improve my skills</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className='text-gray-300 font-semibold italic ml-2 text-center text-2xl mt-40'>
                  "Crafting beautiful code is my passion, <br/>solving problems is my mission."
                </p>
              </div>
            </div>
          </div>
        </div>
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: '100%' }}
          transition={{ duration: 0.5}}
          viewport={{ once: true }}
          className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-30 ">   
        </motion.div>
      </section>
    </>
  );
}

export default About; 