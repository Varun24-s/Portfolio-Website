import React from 'react'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

function Hero({ scrollProgress, isNormalView }) {
    const [showName, setShowName] = useState(false);

    useEffect(() => {
        if (isNormalView) {
            setShowName(true);
            return;
        }

        const unsubscribe = scrollProgress.onChange(value => {
            if (value >= 0.6) {
                setShowName(true);
            } else {
                setShowName(false);
            }
        });
        return () => unsubscribe();
    }, [scrollProgress, isNormalView]);

    return (
        <section id="home" className="min-h-screen w-full bg-[#0b0314] py-8 sm:py-16 mt-16 sm:mt-20">
            <div className="container mx-auto px-4 h-full flex items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-1 items-center w-full">
                    {/* Left side - Text content */}
                    <div className="space-y-4 sm:space-y-6 sm:mt-20 ml-4 sm:ml-12 order-2 md:order-1">
                        <a href="https://en.wikipedia.org/wiki/Bhopal" target="_blank" 
                           className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-800 text-base sm:text-lg">BHOPAL, MADHYA PRADESH</a>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
                            <span className="text-white">Hi, I'm </span>
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 ${showName ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-500 text-4xl sm:text-5xl md:text-7xl tracking-wider`}>
                                V
                            </span>
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 ${showName ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-500 delay-100 -ml-2.5`}>
                                a
                            </span>
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 ${showName ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-500 delay-200`}>
                                r
                            </span>
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 ${showName ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-500 delay-300`}>
                                u
                            </span>
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-800 ${showName ? 'opacity-100' : 'opacity-0'
                                } transition-opacity duration-500 delay-400`}>
                                n
                            </span>
                        </h1>
                        <div className="space-y-3 sm:space-y-4 flex flex-col items-start">
                            <a href="https://en.wikipedia.org/wiki/Web_developer" className={`text-lg sm:text-xl md:text-2xl text-white ${showName ? 'opacity-100' : 'opacity-0'} duration-500`}>
                                WEB &nbsp;DEVELOPER
                            </a>
                            
                            {/* Download resume button positioned right under WEB DEVELOPER */}
                            <a href="https://drive.google.com/file/d/1qmtpVuFzfiyFYpr0l8_P4x4hsJzVcxuL/view?usp=drivesdk" 
                               target="_blank"
                               className="inline-block">
                                <button className={`text-white mt-2 bg-gradient-to-r cursor-pointer from-purple-400 to-pink-600 hover:from-purple-500 hover:to-pink-700 px-4 sm:px-6 py-2 sm:py-3 rounded-md text-base sm:text-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2 ${showName ? 'opacity-100' : 'opacity-0'} duration-500`}>
                                    Download Resume
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="flex justify-center md:justify-end md:mr-15 order-1 md:order-2 mb-8 md:mb-0 mt-12 md:mt-0">
                        <div className="relative w-48 h-48 hover:scale-105 transition-all duration-300 md:w-100 md:h-100">
                            <div className="absolute inset-0 bg-gradient-to-r transition-all duration-300 from-purple-400 to-pink-600 rounded-2xl blur-xl opacity-30 -z-10"></div>
                            <div className={`rounded-2xl w-full h-full shadow-3xl ring-4 ring-purple-500/20 ${showName ? 'rotate-0' : '-rotate-20 opacity-0'} duration-500`}>
                                <img
                                    src="./heroImage.jpeg"
                                    alt="Varun's profile"
                                    className="rounded-2xl object-cover object-bottom hover:scale-105 transition-all duration-300 w-full h-full"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <motion.div 
                initial={{ opacity: 0, width: 0 }}
                whileInView={{ opacity: 1, width: '100%' }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="h-1 bg-gradient-to-r from-purple-400 to-pink-600 mt-20 sm:mt-25">
            </motion.div>
        </section>
    )
}

export default Hero