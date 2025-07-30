"use client";
import { useEffect, useState } from 'react';

const Suggestions = () => {
  const suggestions = [
    "Press <span class='key'>Space</span> key to start/stop",
    "Press <span class='key' >S</span> to save the timer",
    "Press <span class='key' >T</span> to reset the timer",
    "Press <span class='key' >P</span> to pause/resume"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [showSuggestions, setShowSuggestions] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('showSuggestions');
      return saved ? JSON.parse(saved) : true;
    }
    return true;
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('showSuggestions', JSON.stringify(showSuggestions));
    }
  }, [showSuggestions]);

  useEffect(() => {
    if (!showSuggestions) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % suggestions.length);
        setFade(true);
      }, 750);
    }, 3000);

    return () => clearInterval(interval);
  }, [showSuggestions]);

  if (!showSuggestions) return null;

  return (
    <div className="relative group grid items-center justify-center gap-2 cursor-pointer text-xs ">
      <div
        className={`text-woodsmoke-800 w-full text-center transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
        dangerouslySetInnerHTML={{
          __html: suggestions[currentIndex].replace(/<k>(.*?)<\/k>/g, '<span class="inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-medium border border-woodsmoke-200 rounded-md bg-woodsmoke-50 text-woodsmoke-800">$1</span>')
        }}
      />
      <button
        onClick={() => setShowSuggestions(false)}
        className="opacity-0 group-hover:opacity-100 p-1 rounded-full transition-colors"
        aria-label="Close suggestions"
      >
        Hide Suggestions
      </button>
    </div>
  );
};

export default Suggestions;
