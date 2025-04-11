"use client";
import React from 'react';
import { useTimer } from '../context';
import { shareTimerOnTelegram } from './shareUtils';

const Telegram = () => {
  const { time } = useTimer();

  const handleShare = async () => {
    try {
      await shareTimerOnTelegram({
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
      <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
        <path strokeDasharray="20" strokeDashoffset="20" d="M21 5l-2.5 15M21 5l-12 8.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="20;0"/>
        </path>
        <path strokeDasharray="24" strokeDashoffset="24" d="M21 5l-19 7.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="24;0"/>
        </path>
        <path strokeDasharray="14" strokeDashoffset="14" d="M18.5 20l-9.5 -6.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="14;0"/>
        </path>
        <path strokeDasharray="10" strokeDashoffset="10" d="M2 12.5l7 1">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.4s" dur="0.3s" values="10;0"/>
        </path>
        <path strokeDasharray="8" strokeDashoffset="8" d="M12 16l-3 3M9 13.5l0 5.5">
          <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.3s" values="8;0"/>
        </path>
      </g>
    </svg>
  );
};

export default Telegram; 