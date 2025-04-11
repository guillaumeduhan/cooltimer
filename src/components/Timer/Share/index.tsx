"use client";
import React from 'react';
import { TimerRecord } from '../context';
import X from './X';
// import Instagram from './Instagram';
// import Telegram from './Telegram';
// import Peerlist from './Peerlist';

interface ShareProps {
  record: TimerRecord;
}

const Share = ({ record }: ShareProps) => {
  return (
    <div className="flex gap-2 items-center cursor-pointer">
      <X record={record} />
      {/* <Instagram />
      <Telegram />
      <Peerlist /> */}
    </div>
  );
};

export default Share; 