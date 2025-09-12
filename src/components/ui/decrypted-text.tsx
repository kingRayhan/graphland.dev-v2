"use client";

import React, { useState, useEffect } from 'react';

interface DecryptedTextProps {
  text: string;
  className?: string;
  duration?: number;
  delay?: number;
  characters?: string;
}

const DecryptedText: React.FC<DecryptedTextProps> = ({
  text,
  className = '',
  duration = 2000,
  delay = 0,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isDecrypted, setIsDecrypted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let iteration = 0;
      const maxIterations = Math.floor(duration / 50); // 50ms intervals

      const interval = setInterval(() => {
        const progress = iteration / maxIterations;
        const decryptedLength = Math.floor(progress * text.length);

        let result = '';

        // Add decrypted characters
        result += text.substring(0, decryptedLength);

        // Add random characters for remaining positions
        for (let i = decryptedLength; i < text.length; i++) {
          if (text[i] === ' ') {
            result += ' ';
          } else {
            result += characters[Math.floor(Math.random() * characters.length)];
          }
        }

        setDisplayText(result);

        iteration++;

        if (iteration > maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsDecrypted(true);
        }
      }, 50);
    }, delay);

    return () => clearTimeout(timer);
  }, [text, duration, delay, characters]);

  return (
    <span className={`${className} ${isDecrypted ? 'decrypted' : 'decrypting'}`}>
      {displayText || text}
    </span>
  );
};

export default DecryptedText;
