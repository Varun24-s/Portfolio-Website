import React from 'react'
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

function Overlay() {

    const { scrollYProgress } = useScroll();

    // Even smoother spring physics with lower stiffness
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 50,    // Reduced for smoother movement
        damping: 15,      // Reduced for smoother transitions
        restDelta: 0.0001
    });

    // Extended animation ranges with more intermediate steps
    const scale = useTransform(smoothProgress,
        [0.05, 0.15, 0.25, 0.35, 0.45], // More gradual scaling points
        [1, 2.5, 4, 6, 8]  // More gradual scaling values
    );

    const opacity = useTransform(smoothProgress,
        [0.55, 0.65, 0.75], // Later fade out
        [1, 0.5, 0]  // Same opacity steps
    );

    return (
        <motion.div
            className="fixed top-0 left-0 w-full h-screen pointer-events-none z-[100]"
            style={{ opacity }}
        >
            <svg
                viewBox="0 0 800 600"
                preserveAspectRatio="xMidYMid slice"
                width="100%"
                height="100%"
                className="w-full h-full"
            >
                <defs>
                    {/* Define the gradient */}
                    <linearGradient id="bgGradient" x1="0%" y1="100%" x2="100%" y2="100%">
                        <stop offset="20%" style={{ stopColor: '#470341' }} />
                        <stop offset="100%" style={{ stopColor: '#1f011c' }} />
                    </linearGradient>

                    {/* Define the shadow filter */}
                    <filter id="textShadow" x="-20%" y="-20%" width="140%" height="140%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
                        <feOffset in="blur" dx="2" dy="2" result="offsetBlur" />
                        <feFlood floodColor="rgba(128,0,255,0.3)" result="glowColor" />
                        <feComposite in="glowColor" in2="offsetBlur" operator="in" result="softGlow" />
                        <feMerge>
                            <feMergeNode in="softGlow" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>

                    <mask id="textMask">
                        <rect width="800" height="600" fill="white" />
                        <motion.g
                            style={{
                                scale,
                                transformOrigin: "400px 300px",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                                restDelta: 0.0001
                            }}
                        >
                            <text
                                x="400"
                                y="300"
                                fontSize="150"
                                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black"
                                textAnchor="middle"
                                fill="black"
                                dominantBaseline="central"
                                fontFamily="Arial Black"
                                style={{
                                    letterSpacing: '-0.05em',
                                    fontWeight: 900,
                                    strokeWidth: '2px',
                                    stroke: 'black'
                                }}
                            >
                                &lt;Hello/&gt;
                            </text>
                        </motion.g>
                    </mask>
                </defs>

                {/* Background with gradient and mask */}
                <rect
                    width="800"
                    height="600"
                    fill="url(#bgGradient)"
                    mask="url(#textMask)"
                />

                {/* Text outline */}
                {/* <motion.g
                    style={{
                        scale,
                        transformOrigin: "400px 300px",
                    }}
                    transition={{
                        type: "spring",
                        stiffness: 50,
                        damping: 15,
                        restDelta: 0.0001
                    }}
                >
                    <text
                        x="400"
                        y="300"
                        fontSize="150"
                        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
                        textAnchor="middle"
                        fill="none"
                        stroke="white"
                        strokeWidth="1"
                        dominantBaseline="central"
                        fontFamily="Arial Black"
                        style={{
                            letterSpacing: '-0.05em'
                        }}
                        filter="url(#textShadow)"
                    >
                        &lt;Hello!/&gt;
                    </text>
                </motion.g> */}
            </svg>
        </motion.div>
    )
}

export default Overlay