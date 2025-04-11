"use client";
import React from 'react';
import { useTimer } from '../context';
import { shareTimerOnX } from './shareUtils';

const X = () => {
  const { time } = useTimer();

  const handleShare = async () => {
    try {
      await shareTimerOnX({
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
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      className="text-woodsmoke-900 transition duration-300 hover:text-black dark:hover:text-white"
    >
      <g fill="currentColor">
        <path d="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z">
          <animate fill="freeze" attributeName="d" dur="0.4s" values="M1 2h2.5L3.5 2h-2.5zM5.5 2h2.5L7.2 2h-2.5z;M1 2h2.5L18.5 22h-2.5zM5.5 2h2.5L23 22h-2.5z"/>
        </path>
        <path d="M3 2h5v0h-5zM16 22h5v0h-5z">
          <animate fill="freeze" attributeName="d" begin="0.4s" dur="0.4s" values="M3 2h5v0h-5zM16 22h5v0h-5z;M3 2h5v2h-5zM16 22h5v-2h-5z"/>
        </path>
        <path d="M18.5 2h3.5L22 2h-3.5z">
          <animate fill="freeze" attributeName="d" begin="0.5s" dur="0.4s" values="M18.5 2h3.5L22 2h-3.5z;M18.5 2h3.5L5 22h-3.5z"/>
        </path>
      </g>
    </svg>
  );
};

export default X; 