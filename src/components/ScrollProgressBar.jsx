import React, { useEffect, useState } from 'react';

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate how far we've scrolled
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-130">
      <div 
        className="h-full bg-gradient-to-r from-purple-400 to-pink-600 "
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

export default ScrollProgressBar; 