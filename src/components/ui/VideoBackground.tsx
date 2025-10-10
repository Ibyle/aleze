import React from 'react';
import { motion } from 'framer-motion';
interface VideoBackgroundProps {
  videoSrc: string;
  overlayColor?: string;
  children: React.ReactNode;
  height?: string;
}
export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  overlayColor = 'rgba(0, 0, 0, 0.6)',
  children,
  height = '100vh'
}) => {
  return <div className="relative w-full overflow-hidden" style={{
    height
  }}>
      {/* Video Background */}
      <video autoPlay muted loop playsInline className="absolute top-0 left-0 w-full h-full object-cover">
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full" style={{
      backgroundColor: overlayColor
    }} />
      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center">
        {children}
      </div>
    </div>;
};