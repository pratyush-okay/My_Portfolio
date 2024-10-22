import React from 'react';
import { motion } from 'framer-motion';

const TypewriterEffect = () => {
  // Split the text into words first, then characters
  const text = "Hello, I'm Pratyush Panda";
  const words = text.split(" ").map(word => ({
    text: word,
    className: "text-black-900"
  }));

  return (
    <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center p-4">
      <motion.div className="inline">
        {words.map((word, wordIdx) => (
          <React.Fragment key={`word-${wordIdx}`}>
            <span className="inline-block">
              {word.text.split("").map((char, charIdx) => (
                <motion.span
                  initial={{ opacity: 0, display: 'none' }}
                  animate={{ opacity: 1, display: 'inline-block' }}
                  transition={{
                    duration: 0.3,
                    // Calculate delay based on total characters processed
                    delay: (text.split(" ").slice(0, wordIdx).join(" ").length + charIdx) * 0.1,
                    ease: "easeInOut",
                  }}
                  key={`char-${charIdx}`}
                  className={`${word.className} tracking-wider`}
                >
                  {char}
                </motion.span>
              ))}
            </span>
            {/* Add space between words, but not after the last word */}
            {wordIdx < words.length - 1 && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.3,
                  delay: (text.split(" ").slice(0, wordIdx + 1).join(" ").length - 1) * 0.1,
                }}
                className="inline-block w-2 sm:w-4" // Adjustable space width for responsiveness
              >
                &nbsp;
              </motion.span>
            )}
          </React.Fragment>
        ))}
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="inline-block rounded-sm w-[2px] sm:w-[3px] lg:w-[4px] h-6 sm:h-10 md:h-12 lg:h-14 xl:h-16 bg-blue-500 ml-2"
      />
    </div>
  );
};

export default TypewriterEffect;
