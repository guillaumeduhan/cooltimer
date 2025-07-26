'use client';
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTimer } from "../context";
import ListTable from "./Table";
import { Button } from "@/components/ui/button";

dayjs.extend(relativeTime);
dayjs.extend(duration);

const List = () => {
  const { records, downloadAllTimers } = useTimer();


  const totalSeconds = records.reduce((acc: number, record: any) => acc + record.time, 0);
  const totalDuration = dayjs.duration(totalSeconds, 'seconds');

  const hours = Math.floor(totalDuration.asHours());
  const minutes = totalDuration.minutes();
  const seconds = totalDuration.seconds();

  const formattedTotalTime =
    totalSeconds === 0
      ? `You haven't tracked any time yet.`
      : hours >= 1
        ? `${hours}h${minutes}min so far.`
        : `${minutes}min${seconds}sec tracked so far.`;

  return <div className={`relative w-full h-full z-50 transition duration-300`}>
    <div>
      <header className="flex items-center justify-between p-4 border-b border-woodsmoke-800 mb-4">
        <div>
          <h2 className="font-[600]">
            Timers ({records.length || 0})
          </h2>
          <p className="text-woodsmoke-500">{formattedTotalTime}</p>
        </div>
        <Button variant="outline" onClick={downloadAllTimers}>Export as JSON</Button>
      </header>
      <main>
        <ListTable {...{ records }} />
      </main>
    </div>
  </div>
};

export default List;
