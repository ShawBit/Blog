"use client";
import { useEffect, useState } from "react";

export default function TypingEffect({ fullText }: { fullText: string }) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = fullText.substring(
        0,
        text.length + (isDeleting ? -1 : 1),
      );
      setText(currentText);

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }

      setTypingSpeed(isDeleting ? 50 : 150);
    };

    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [text, isDeleting, typingSpeed, loopNum]);

  return (
    <h1 className="text-4xl font-bold">
      {text}
      <span className="animate-blink">|</span>
    </h1>
  );
}
