"use client";
import React from 'react';
import { useTimer } from '../context';
import { shareTimerOnInstagram } from './shareUtils';

const Instagram = () => {
  const { time } = useTimer();

  const handleShare = async () => {
    try {
      await shareTimerOnInstagram({
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
      <circle cx="17" cy="7" r="1.5" fill="currentColor" fillOpacity="0">
        <animate fill="freeze" attributeName="fill-opacity" begin="1.3s" dur="0.15s" values="0;1"/>
      </circle>
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path strokeDasharray="72" strokeDashoffset="72" d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="72;0"/>
        </path>
        <path strokeDasharray="28" strokeDashoffset="28" d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.6s" values="28;0"/>
        </path>
      </g>
    </svg>
  );
};

export default Instagram; 