import { useCallback, useEffect, useRef, useState } from "react";

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

// const CHARS = "!@#$%^&*():{};|,.<>/?";
const CHARS = "!@#$%^&*():{};|,.<>/?";

interface Props {
  text?: string;
  firstMountDelay?: number;
  className?: string;
}

export const ScrambleText = ({
  text = "Placeholder",
  firstMountDelay = 0,
  className,
}: Props) => {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const [scrambleText, setScrambleText] = useState(text);

  const stopScramble = useCallback(() => {
    clearInterval(intervalRef.current || undefined);

    setScrambleText(text);
  }, [text]);

  const scramble = useCallback(() => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = text
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setScrambleText(scrambled);
      pos++;

      if (pos >= text.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  }, [text, stopScramble]);

  // Fire scramble on first mount with delay
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      scramble();
    }, firstMountDelay);

    // Cleanup the timeout and scramble interval
    return () => {
      clearTimeout(timeoutId);
      stopScramble();
    };
  }, [scramble, stopScramble, firstMountDelay]);

  return (
    <p
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={className}
      style={{
        textShadow: `
          -1px -1px 0 black,
          1px -1px 0 black,
          -1px 1px 0 black,
          1px 1px 0 black
        `,
      }}
    >
      {scrambleText}
    </p>
  );
};
