import { useState, useEffect, useRef } from "react";

const letters = "!@#$%^&*()_+-={}|/<>";

export default function ScrambleText({ text, intervalDelay = 10000 }) {
  const [displayedText, setDisplayedText] = useState(text);
  const intervalRef = useRef(null);
  const animationTimeoutRef = useRef(null);

  const startAnimation = () => {
    let iteration = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplayedText(prev =>
        prev
          .split("")
          .map((letter, index) => {
            if (text[index] === " ") {
              // Always show space
              return " ";
            }
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      iteration += 1 / 3;

      if (iteration >= text.length) {
        clearInterval(intervalRef.current);

        // Start animation again after a delay
        animationTimeoutRef.current = setTimeout(startAnimation, intervalDelay);
      }
    }, 20);
  };

  useEffect(() => {
    startAnimation();

    // Cleanup on unmount
    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(animationTimeoutRef.current);
    };
  }, [text, intervalDelay]);

  return (
    <h1 style={{ cursor: "pointer" }}>
      {displayedText}
    </h1>
  );
}
