import React from 'react';
import { motion } from 'framer-motion';

const AnimatedProfileImage = ({ imageSrc }) => {
  return (
    <motion.div 
      className="relative w-64 h-64 mx-auto my-8"
      animate={{ scale: 1 }} 
      transition={{
        type: "tween",
        duration: 1.5   // Smooth animation, no bounce or zoom
      }}
    >
      {/* Rotating gradient border */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      {/* Pulsing glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full bg-white/20 backdrop-blur-sm"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Image container */}
      <motion.div 
        className="absolute inset-[3px] rounded-full overflow-hidden bg-white"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={imageSrc}
          alt="Profile"
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
};

export default AnimatedProfileImage;
