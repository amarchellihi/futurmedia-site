'use client';
import React, { useRef, useState } from 'react';
import { Volume2, VolumeX, Maximize2 } from 'lucide-react';

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = () => {
    const video = videoRef.current;
    if (video) {
      video.muted = !video.muted;
      setIsMuted(video.muted);
    }
  };  

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (video && video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video && (video as any).webkitEnterFullscreen) {
      // For Safari on iOS
      (video as any).webkitEnterFullscreen();
    }
  };

  return (
    <section className="relative w-full mt-10 sm:px-10 py-10 overflow-hidden">
      {/* Gradient Border Wrapper */}
      <div className="relative w-full max-w-6xl mx-auto rounded-3xl p-[2px] bg-gradient-to-br from-[#ff2aad] via-[#7c1dcf] to-[#a020f0] shadow-xl">
        
        {/* Video Container */}
        <div className="relative overflow-hidden rounded-3xl bg-black w-full">
          {/* Video */}
          <video
            ref={videoRef}
            className="w-full h-auto object-contain"
            src="/FutureMediaNew.mp4"
            autoPlay
            loop
            muted
            controlsList="nodownload"
            playsInline
          />

          {/* Overlay Layer */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/60 rounded-3xl z-10" />

          {/* Sound Toggle */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition"
          >
            {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
          </button>

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="absolute bottom-4 right-16 z-20 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full backdrop-blur-md transition"
          >
            <Maximize2 size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
