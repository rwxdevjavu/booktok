import { motion } from "framer-motion";

export default function QuoteCard({ quote }) {
  return (
    <motion.div
      key={quote.text}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col justify-between w-full h-full"
    >
      <div>
        <p className="text-lg sm:text-xl italic mb-4">“{quote.text}”</p>
        <p className="text-sm font-semibold">— {quote.author}</p>
        <p className="text-xs text-gray-500">{quote.book}</p>
      </div>
    </motion.div>
  );
}
