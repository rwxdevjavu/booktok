import { motion, AnimatePresence } from "framer-motion";

export default function SharePopup({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl p-6 w-72 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-4 text-center">Share Quote</h2>
            <div className="flex flex-col gap-3">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
                Share on Twitter
              </button>
              <button className="px-4 py-2 bg-blue-700 text-white rounded-xl hover:bg-blue-800">
                Share on Facebook
              </button>
              <button className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600">
                Copy Link
              </button>
            </div>
            <button
              onClick={onClose}
              className="mt-4 w-full text-gray-500 hover:text-gray-700"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
