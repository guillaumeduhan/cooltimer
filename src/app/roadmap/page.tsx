'use client';
import dayjs from 'dayjs';
import Link from 'next/link';
export default function RoadmapPage() {
  const items = [
    {
      date: "Soon",
      version: 'X.X.X',
      description: "Analytics implementation."
    }, 
    {
      date: "Soon",
      version: 'X.X.X',
      description: "Tags implementation."
    },
    {
      date: "10th April, 2025",
      version: '0.1.2',
      description: "Feedback form, dark mode, and space bar toggle timer @moodsprojects."
    },
    {
      date: "5th April, 2025",
      version: '0.1.1',
      description: "Increase global size, responsive improved."
    },
    {
      date: "4th April, 2025",
      version: '0.1.0',
      description: "Official launch of the timer. Thanks for your support."
    }
  ].sort((a, b) => dayjs(b.date, 'DD/MM/YYYY').unix() - dayjs(a.date, 'DD/MM/YYYY').unix());

  return <div className="container max-w-[900px] grid gap-8 mx-auto">
    <div className="grid gap-4 items-start">
      {items.map((item, index) => (
        <div key={index} className="items-start gap-2 px-4 lg:grid lg:grid-cols-12 border-b dark:border-woodsmoke-900 pb-4">
          <div className="lg:col-span-2 whitespace-nowrap flex items-center justify-start">
            <span className={`${item.date === 'Soon' ? 'font-[600] text-purple-500 bg-purple-900/20 border border-purple-600/50 block px-2 text-sm rounded-lg' : ''}`}>{item.date}</span>
          </div>
          <span className="lg:col-span-1 whitespace-nowrap">v{item.version}</span>
          <div className="lg:col-span-8 text-woodsmoke-500">
            <p className='flex items-center gap-1'>{item.description.replace(/[.!]$/, '').split(' ').map((word, i) => (word.startsWith('@') ? <Link href={`https://twitter.com/${word.slice(1)}`} target="_blank" key={i} className="user-highlight">{word} </Link> : word + ' '))}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
}