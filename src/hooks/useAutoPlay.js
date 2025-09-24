import { useEffect } from "react";

export default function useAutoPlay(autoPlay, callback, delay) {
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(callback, delay);
    return () => clearInterval(timer);
  }, [autoPlay, callback, delay]);
}
