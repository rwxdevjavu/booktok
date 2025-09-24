import { Heart, Share2 } from "lucide-react";

export default function Actions({ liked, onLike, onShare }) {
  return (
    <div className="flex justify-center gap-6 mt-4">
      <button
        onClick={onLike}
        className="flex items-center gap-1 text-pink-500 hover:scale-110 transition-transform"
      >
        <Heart fill={liked ? "#ec4899" : "none"} /> {liked ? "Liked" : "Like"}
      </button>
      <button
        onClick={onShare}
        className="flex items-center gap-1 text-blue-500 hover:scale-110 transition-transform"
      >
        <Share2 /> Share
      </button>
    </div>
  );
}
