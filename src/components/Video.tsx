import React, { useState } from 'react';
import { Play } from 'lucide-react';
import Player from '../assets/Player.png';

interface VideoSectionProps {
  thumbnailUrl?: string;
  videoUrl?: string;
  isYouTube?: boolean;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  thumbnailUrl = Player,
  videoUrl = 'https://www.youtube.com/watch?v=CxZI6R1VKJY',
  isYouTube = true
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Convert YouTube URL to embed URL
  const getEmbedUrl = (url: string) => {
    if (!isYouTube) return url;
    
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('/').pop();
    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full  bg-gradient-to-br from-teal-50 to-blue-50 flex items-center justify-center  ">
      <div className=" w-full ">
        <div className="relative  overflow-hidden ">
          {!isPlaying ? (
            <>
              {/* Thumbnail Image */}
              <div className="relative w-full aspect-video bg-gray-900">
                <img
                  src={thumbnailUrl}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Play Button */}
              <button
                onClick={handlePlayClick}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-6 transition-all duration-300 hover:scale-110 shadow-xl z-10"
                aria-label="Play video"
              >
                <Play className="w-12 h-12 text-teal-600 fill-teal-600" />
              </button>
            </>
          ) : (
            /* Video Player - Replaces thumbnail in same position */
            <div className="relative aspect-video bg-black">
              {isYouTube ? (
                <iframe
                  className="w-full h-full"
                  src={getEmbedUrl(videoUrl)}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="w-full h-full"
                  controls
                  autoPlay
                  src={videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoSection;