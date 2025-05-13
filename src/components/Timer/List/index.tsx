'use client';
import dayjs from "dayjs";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTimer } from "../context";
import ListTable from "./Table";

dayjs.extend(relativeTime);
dayjs.extend(duration);

const List = ({ open, setOpen }: any) => {
  const { records } = useTimer();

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
    {open && <div>
      <header className="text-black dark:text-white gap-4 px-6 py-4 border-b dark:border-woodsmoke-800 w-full lg:w-[900px] mb-2">
        <h2 className="font-[600]">
          Timers ({records.length || 0})
        </h2>
        <p className="text-woodsmoke-500">{formattedTotalTime}</p>
      </header>
      <main className="min-h-screen">
        <ListTable {...{ records }} />
      </main>
    </div>}
  </div>
};

export default List;
