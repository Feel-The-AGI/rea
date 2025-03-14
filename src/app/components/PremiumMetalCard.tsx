"use client";

import React, { useState, useEffect } from 'react';

interface PremiumMetalCardProps {
  frontContent: React.ReactNode;
  backContent?: React.ReactNode;
  className?: string;
  autoRotateInterval?: number; // in milliseconds
}

const PremiumMetalCard: React.FC<PremiumMetalCardProps> = ({ 
  frontContent, 
  backContent,
  className = "",
  autoRotateInterval = 3000 // default to 3 seconds
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto-rotate every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, autoRotateInterval);
    
    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, [autoRotateInterval]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div 
      className={`premium-metal-card-container relative h-full w-full cursor-pointer ${className}`}
      onClick={handleFlip}
    >
      <div className={`premium-metal-card relative w-full h-full transition-all duration-700 transform-gpu preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front of Card */}
        <div className="premium-metal-card-front absolute inset-0 backface-hidden">
          <div className="premium-metal-gradient p-8 rounded-[30px] shadow-premium h-full w-full">
            <div className="relative h-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/20 to-[#8599AC]/20 z-10 metal-texture"></div>
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                {frontContent}
              </div>
              <div className="absolute inset-0 z-30 metal-shine pointer-events-none"></div>
            </div>
          </div>
        </div>
        
        {/* Back of Card */}
        <div className="premium-metal-card-back absolute inset-0 backface-hidden rotate-y-180">
          <div className="premium-metal-gradient-reversed p-8 rounded-[30px] shadow-premium h-full w-full">
            <div className="relative h-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#8599AC]/20 to-[#D4AF37]/20 z-10 metal-texture-reversed"></div>
              <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
                {backContent || frontContent}
              </div>
              <div className="absolute inset-0 z-30 metal-shine pointer-events-none"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumMetalCard;
