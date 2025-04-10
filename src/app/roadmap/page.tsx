'use client';
import Social from '@/components/Timer/Social';
import dayjs from 'dayjs';
import Link from 'next/link';
export default function RoadmapPage() {
  const items = [
    {
      date: "Soon",
      version: 'X.X.X',
      description: ["Analytics implementation."]
    }, 
    {
      date: "Soon",
      version: 'X.X.X',
      description: ["Tags implementation."]
    },
    {
      date: "10th April, 2025",
      version: '0.1.2',
      description: ["Added space bar toggle timer @moodsprojects", "Feedback form", "Discord & Telegram link."]
    },
    {
      date: "5th April, 2025",
      version: '0.1.1',
      description: ["Increase global size, responsive improved."]
    },
    {
      date: "4th April, 2025",
      version: '0.1.0',
      description: ["Official launch of the timer. Thanks for your support."]
    }
  ].sort((a, b) => dayjs(b.date, 'DD/MM/YYYY').unix() - dayjs(a.date, 'DD/MM/YYYY').unix());

  const renderParagraphWithMentions = (text, idx) => {
    const parts = text.replace(/[.!]$/, '').split(/(\s+)/); // keep spaces
  
    return (
      <p key={idx} className="mb-2 text-woodsmoke-500">
        {parts.map((part, i) => {
          if (part.match(/^@[\w]+$/)) {
            return (
              <Link
                href={`https://x.com/${part.slice(1)}?utm_source=cooltimer.app`}
                target="_blank"
                rel="noopener noreferrer"
                key={`mention-${idx}-${i}`}
                className="user-highlight inline"
              >
                {part}
              </Link>
            );
          }
          return <span key={`text-${idx}-${i}`}>{part}</span>;
        })}
      </p>
    );
  };

  return <div className="container max-w-[900px] grid gap-8 mx-auto">
    <div className="grid gap-4 items-start">
      {items.map((item, index) => (
        <div key={index} className="items-start gap-2 px-4 lg:grid lg:grid-cols-12 border-b dark:border-woodsmoke-900 pb-4">
          <div className="lg:col-span-2 whitespace-nowrap flex items-center justify-start">
            <span className={`${item.date === 'Soon' ? 'font-[600] text-purple-500 bg-purple-900/20 border border-purple-600/50 block px-2 text-sm rounded-lg' : ''}`}>{item.date}</span>
          </div>
          <span className="lg:col-span-1 whitespace-nowrap">v{item.version}</span>
          <div className="lg:col-span-8 text-woodsmoke-500">
            {item.description.map((line, idx) => renderParagraphWithMentions(line, idx))}
          </div>
        </div>
      ))}
    </div>
    <Social />
  </div>
}