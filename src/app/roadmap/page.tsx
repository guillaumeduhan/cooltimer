'use client';
import dayjs from 'dayjs';
export default function RoadmapPage() {
  const items = [
    {
      date: "Soon",
      version: '0.3.0',
      description: "Analytics implementation."
    },
    {
      date: "Soon",
      version: '0.2.0',
      description: "Tags implementation."
    },
    {
      date: "4th April, 2025",
      version: '0.1.0',
      description: "Official launch of the timer. Thanks for your support."
    }
  ].sort((a, b) => dayjs(b.date, 'DD/MM/YYYY').unix() - dayjs(a.date, 'DD/MM/YYYY').unix());

  return <div className="container max-w-[900px] grid gap-8 mx-auto">
    <div className="grid gap-4">
      {items.map((item, index) => (
        <div key={index} className="gap-2 px-4 lg:grid lg:grid-cols-12 border-b dark:border-woodsmoke-900 pb-4">
          <div className="lg:col-span-2 whitespace-nowrap flex items-center justify-start">
            <span className={`${item.date === 'Soon' ? 'font-[600] text-purple-500 bg-purple-900/20 border border-purple-600/50 block px-2 text-sm rounded-lg' : ''}`}>{item.date}</span>
          </div>
          <span className="lg:col-span-1 whitespace-nowrap">v{item.version}</span>
          <p className="lg:col-span-8 text-woodsmoke-500">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
}