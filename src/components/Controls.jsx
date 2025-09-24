export default function Controls({ onPrev, onNext, autoPlay, toggleAutoPlay }) {
  return (
    <div className="flex gap-4 mt-6 flex-wrap justify-center">
      <button onClick={onPrev} className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">
        Prev
      </button>
      <button onClick={toggleAutoPlay} className="px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600">
        {autoPlay ? "Pause" : "Play"}
      </button>
      <button onClick={onNext} className="px-4 py-2 bg-gray-200 rounded-xl hover:bg-gray-300">
        Next
      </button>
    </div>
  );
}
