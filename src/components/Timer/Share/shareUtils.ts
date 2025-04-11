import { TimerRecord } from '../context';
import dayjs from 'dayjs';
import calendar from 'dayjs/plugin/calendar';
dayjs.extend(calendar);

export const shareTimerOnX = async (record: TimerRecord): Promise<void> => {
  try {
    // Check if time is 0
    if (record.time === 0) {
      alert("You can't share a 0 timer");
      return;
    }

    // Create the share URL
    // const timeAgo = dayjs(record.created_at).calendar(null, {
    //   sameDay: '[Today]',
    //   lastDay: '[Yesterday]',
    //   lastWeek: '[Last] dddd',
    //   sameElse: '[On] MMM D'
    // });
    // const tweetText = `${timeAgo}, I spent ${formatTime(record.time)} working — via cooltimer.app`;
    const tweetText = `${formatTime(record.time)} — via cooltimer.app`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweetText)}`;
    
    // Open in a popup window
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      shareUrl,
      'Share on X',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

export const shareTimerOnInstagram = async (record: TimerRecord): Promise<void> => {
  try {
    if (record.time === 0) {
      alert("You can't share a 0 timer");
      return;
    }

    const text = `${formatTime(record.time)}${record.tags?.[0] || ''} — via cooltimer.app`;
    const shareUrl = `https://www.instagram.com/`;
    
    // Note: Instagram doesn't have a direct sharing API, so we'll just open the main page
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      shareUrl,
      'Share on Instagram',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

export const shareTimerOnTelegram = async (record: TimerRecord): Promise<void> => {
  try {
    if (record.time === 0) {
      alert("You can't share a 0 timer");
      return;
    }

    const text = `${formatTime(record.time)}${record.tags?.[0] || ''} — via cooltimer.app`;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent('https://cooltimer.app')}&text=${encodeURIComponent(text)}`;
    
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      shareUrl,
      'Share on Telegram',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

export const shareTimerOnPeerlist = async (record: TimerRecord): Promise<void> => {
  try {
    if (record.time === 0) {
      alert("You can't share a 0 timer");
      return;
    }

    const text = `${formatTime(record.time)}${record.tags?.[0] || ''} — via cooltimer.app`;
    const shareUrl = `https://peerlist.io/`;
    
    // Note: Peerlist doesn't have a direct sharing API, so we'll just open the main page
    const width = 600;
    const height = 400;
    const left = (window.innerWidth - width) / 2;
    const top = (window.innerHeight - height) / 2;
    
    window.open(
      shareUrl,
      'Share on Peerlist',
      `width=${width},height=${height},left=${left},top=${top}`
    );
  } catch (error) {
    console.error('Error sharing:', error);
  }
};

const formatTime = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  // If there are no hours or minutes, just show seconds
  if (h === 0 && m === 0) {
    return `${s}sec`;
  }

  // If there are no hours, show minutes and seconds
  if (h === 0) {
    return `${m}m${s}sec`;
  }

  // Show full time with hours
  return `${h}h ${m}m ${s}sec`;
};

// Helper function to get OAuth token
async function getOAuthToken(): Promise<string> {
  // You'll need to implement OAuth 2.0 authentication
  // This is a placeholder - you'll need to replace with actual OAuth implementation
  const clientId = 'YOUR_CLIENT_ID';
  const clientSecret = 'YOUR_CLIENT_SECRET';
  
  const response = await fetch('https://api.twitter.com/oauth2/token', {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${btoa(`${clientId}:${clientSecret}`)}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials'
  });

  const data = await response.json();
  return data.access_token;
} 