import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <section id="education" className="bg-[#0b0314] md:mt-35 text-white py-5 relative z-0">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-5xl font-bold mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Education
          </span>
        </h2>
        
        <div className="max-w-6xl mx-auto mt-15">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* College Photo Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                {/* Replace the img src with your college photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                 <img src="./manit.avif" alt="" />
                </div>
              </div>
            </motion.div>

            {/* Education Details Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  MAULANA AZAD NATIONAL INSTITUTE OF TECHNOLOGY
                </h3>
                <p className="text-lg text-gray-300 mb-2">Bachelor of Technology in Computer Science and Engineering</p>
                <p className="text-sm text-gray-400">2024 - 2028</p>
                <div className="mt-4">
                  
                </div>
              </div>

              <div className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                <h2 className="text-xl font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Achievements
                </h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>Scored 99.49%ile in JEE Mains 2024</li>
                    <li>Qualified JEE Advanced 2024</li>
                    <li>89.2% in 12th M.P. Board</li>
                    <li>95% in 10th CBSE Board</li>
                  </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        transition={{ duration: 2 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-16 sm:mt-20 relative z-10">   
      </motion.div>
    </section>
  );
}

export default Education; 