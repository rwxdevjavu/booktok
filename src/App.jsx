import { useState, useCallback } from "react";
import { AnimatePresence } from "framer-motion";

import quotes from "./data/quotes";
import useAutoPlay from "./hooks/useAutoPlay";
import QuoteCard from "./components/QuoteCard";
import Actions from "./components/Actions";
import Controls from "./components/Controls";
import SharePopup from "./components/sharePopup";

export default function App() {
  const [index, setIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  const [liked, setLiked] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % quotes.length);
    setLiked(false);
  }, []);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + quotes.length) % quotes.length);
    setLiked(false);
  }, []);

  useAutoPlay(autoPlay, next, 4000);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl min-h-[50vh] sm:min-h-[16rem] flex flex-col items-center justify-center relative px-2">
        <AnimatePresence mode="wait">
          <QuoteCard quote={quotes[index]} />
        </AnimatePresence>
        <Actions
          liked={liked}
          onLike={() => setLiked((prev) => !prev)}
          onShare={() => setIsShareOpen(true)}
        />
      </div>

      <Controls
        onPrev={prev}
        onNext={next}
        autoPlay={autoPlay}
        toggleAutoPlay={() => setAutoPlay((a) => !a)}
      />
      
      <SharePopup isOpen={isShareOpen} onClose={() => setIsShareOpen(false)} />
    </div>
  );
}
