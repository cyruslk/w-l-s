import React, { useState, useEffect } from 'react';

const Typewriter = ({ sentences, typingSpeed = 150, pauseTime = 1000 }) => {
  const [displayedSentences, setDisplayedSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState('');
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isResetting, setIsResetting] = useState(false);

  useEffect(() => {
    if (isTyping) {
      if (charIndex < sentences[sentenceIndex].length) {
        const timeout = setTimeout(() => {
          setCurrentSentence(prev => prev + sentences[sentenceIndex][charIndex]);
          setCharIndex(prev => prev + 1);
        }, typingSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsTyping(false);
        setTimeout(() => {
          setDisplayedSentences(prev => [...prev, currentSentence]);
          setCurrentSentence('');
          setCharIndex(0);
          setSentenceIndex(prev => (prev + 1) % sentences.length);

          // Check if it’s the last sentence
          if (sentenceIndex === sentences.length - 1) {
            setIsResetting(true);
          } else {
            setIsTyping(true);
          }
        }, pauseTime);
      }
    }

    if (isResetting) {
      const resetTimeout = setTimeout(() => {
        setDisplayedSentences([]);
        setSentenceIndex(0);
        setCharIndex(0);
        setIsResetting(false);
        setIsTyping(true);
      }, pauseTime);
      return () => clearTimeout(resetTimeout);
    }

  }, [charIndex, isTyping, sentenceIndex, sentences, typingSpeed, pauseTime, currentSentence, isResetting]);

  return (
    <div className="typewriter-container">
      {displayedSentences.map((sentence, index) => (
        <p key={index} className="typewriter-text">
          {sentence}
        </p>
      ))}
      <p className="typewriter-text">
        {currentSentence}
        <span className="typewriter-cursor">|</span>
      </p>
    </div>
  );
};

export default Typewriter;