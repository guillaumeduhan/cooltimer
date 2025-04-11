"use client";
import React from 'react';
import { useTimer } from '../context';
import { shareTimerOnPeerlist } from './shareUtils';

const Peerlist = () => {
  const { time } = useTimer();

  const handleShare = async () => {
    try {
      await shareTimerOnPeerlist({
        id: 'temp-id',
        time,
        created_at: new Date(),
        tags: []
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <svg 
      onClick={handleShare}
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      className="text-woodsmoke-900 transition duration-300 hover:text-black dark:hover:text-white"
    >
      {/* Add Peerlist SVG here */}
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" fill="none"/>
    </svg>
  );
};

export default Peerlist; 