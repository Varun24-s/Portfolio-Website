import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { appendToSheet } from '../utils/sheetUtils';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({
    isSubmitting: false,
    isSubmitted: false,
    error: null
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus({ isSubmitting: true, isSubmitted: false, error: null });

    try {
      const success = await appendToSheet(formData);
      if (success) {
        setSubmitStatus({ isSubmitting: false, isSubmitted: true, error: null });
        setFormData({ name: '', email: '', message: '' }); // Reset form
        setTimeout(() => {
          setSubmitStatus(prev => ({ ...prev, isSubmitted: false }));
        }, 5000); // Hide success message after 5 seconds
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus({
        isSubmitting: false,
        isSubmitted: false,
        error: 'Failed to submit form. Please try again later.'
      });
    }
  };

  return (
    <section id="contact" className="bg-transparent text-white py-10 relative z-0">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-8 sm:mb-12 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            Contact Me
          </span>
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm">
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                Let's Connect
              </h3>
              <div className="space-y-4 mt-10">
                <div className="flex items-center space-x-3 mt-5">
                  <a href="mailto:varunsharma2990@gmail.com" className='flex gap-3'>
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p className="text-sm sm:text-base text-gray-300">varunsharma2990@gmail.com</p>
                  </a>
                </div>
                <a href="tel:+919302361925" className='flex gap-3'>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-300">+91 9302361925</p>
                </div>
                </a>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <p className="text-sm sm:text-base text-gray-300">Bhopal, India</p>
                </div>
                <div className="flex mt-10 space-x-2 sm:space-x-6">
                  <a href="https://github.com/Varun24-s" target="_blank" rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" clipRule="evenodd" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/varun24-s/" target="_blank" rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors duration-300">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

              </div>
            </div>


          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white/5 rounded-lg p-4 sm:p-6 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                  required
                  disabled={submitStatus.isSubmitting}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400"
                  required
                  disabled={submitStatus.isSubmitting}
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  rows="4"
                  className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-purple-400 text-white placeholder-gray-400 resize-none"
                  required
                  disabled={submitStatus.isSubmitting}
                ></textarea>
              </div>

              {submitStatus.error && (
                <div className="text-red-500 text-sm">{submitStatus.error}</div>
              )}

              {submitStatus.isSubmitted && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}

              <button
                type="submit"
                disabled={submitStatus.isSubmitting}
                className={`w-full py-2 px-4 bg-gradient-to-r from-purple-400 to-pink-600 text-white rounded-lg transition-all duration-300 ${submitStatus.isSubmitting
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:from-purple-500 hover:to-pink-700 hover:scale-105'
                  }`}
              >
                {submitStatus.isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
      <motion.div 
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: '100%' }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-20 sm:mt-30">   
      </motion.div>
    </section>
  );
}

export default Contact; 