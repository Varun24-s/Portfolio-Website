import React from 'react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react';

function Navbar({ scrollProgress }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showName, setShowName] = useState(false);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const unsubscribe = scrollProgress.onChange(value => {
            if (value >= 0.85) {
                setShowName(true);
            } else {
                setShowName(false);
            }
        });
        return () => unsubscribe();
    }, [scrollProgress]);

    return (
        <>
            <nav className="fixed top-0 left-0 w-full z-50 bg-transparent backdrop-blur-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <div className="mt-2 items-center">
                            <a href="#home">
                                <span className="text-white text-2xl sm:text-3xl font-semibold">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl sm:text-5xl">V</span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0, x: 0 }}
                                        transition={{ duration: 0.5 }}
                                        className='-ml-1 text-2xl sm:text-3xl'
                                    >ARUN</motion.span>
                                </span>
                                <span className="text-white text-2xl sm:text-3xl font-semibold ml-2 sm:ml-5">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-4xl sm:text-5xl">S</span>
                                    <motion.span
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                    >HARMA</motion.span>
                                </span>
                            </a>
                        </div>

                        {/* Desktop menu */}
                        <div className="hidden mt-6 md:block">
                            <div className="ml-8 flex items-baseline space-x-4">
                                <a href="#home" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 px-3 py-2 rounded-md text-xl font-medium relative group">
                                    Home
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#about" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 px-3 py-2 rounded-md text-xl font-medium relative group">
                                    About
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#skills" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 px-3 py-2 rounded-md text-xl font-medium relative group">
                                    Skills
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#projects" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 px-3 py-2 rounded-md text-xl font-medium relative group">
                                    Projects
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#education" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 px-3 py-2 rounded-md text-xl font-medium relative group">
                                    Education
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <a href="#contact" className="text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r from-purple-400 to-pink-600 transition-all duration-300 px-3 py-2 rounded-md text-xl font-medium relative group">
                                    Contact
                                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                            </div>
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden left-0">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="text-white hover:text-purple-300 focus:outline-none p-2"
                                aria-label="Toggle menu"
                            >
                                <svg
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Mobile menu */}
                    <motion.div
                        className="md:hidden fixed top-0 right-0 w-full h-screen bg-black/95 backdrop-blur-md z-50 overflow-hidden"
                        initial={{ x: "100%" }}
                        animate={{
                            x: isMenuOpen ? 0 : "100%"
                        }}
                        transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30
                        }}
                    >
                        <div className="flex flex-col text-right justify-center min-h-screen">
                            <div className="absolute top-4 right-4 z-50">
                                <button
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-white hover:text-purple-300 focus:outline-none p-2"
                                    aria-label="Close menu"
                                >
                                    <svg
                                        className="h-8 w-8"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </div>

                            <nav className="flex flex-col items-end space-y-6 sm:space-y-8 w-full px-6 sm:px-12">
                                <motion.a
                                    href="#home"
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-3xl font-medium text-right hover:opacity-80 transition-opacity"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 50 }}
                                    transition={{ delay: 0.1 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Home
                                </motion.a>
                                <motion.a
                                    href="#about"
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-3xl font-medium text-right hover:opacity-80 transition-opacity"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 50 }}
                                    transition={{ delay: 0.2 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    About
                                </motion.a>
                                <motion.a
                                    href="#education"
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-3xl font-medium text-right hover:opacity-80 transition-opacity"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 50 }}
                                    transition={{ delay: 0.3 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Education
                                </motion.a>
                                <motion.a
                                    href="#projects"
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-3xl font-medium text-right hover:opacity-80 transition-opacity"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 50 }}
                                    transition={{ delay: 0.4 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Projects
                                </motion.a>
                                <motion.a
                                    href="#contact"
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-2xl sm:text-3xl font-medium text-right hover:opacity-80 transition-opacity"
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : 50 }}
                                    transition={{ delay: 0.5 }}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Contact
                                </motion.a>
                            </nav>
                        </div>
                    </motion.div>

                    {/* Overlay when mobile menu is open */}
                    {isMenuOpen && (
                        <motion.div
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            style={{ zIndex: -1 }}
                        />
                    )}
                </div>
            </nav>
        </>
    );
}

export default Navbar;