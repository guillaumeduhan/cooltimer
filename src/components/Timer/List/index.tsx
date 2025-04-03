'use client';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTimer } from "../context";
import ListTable from "./Table";

dayjs.extend(relativeTime);

const List = () => {
  const { records, formatTime } = useTimer();

  return <div className={`relative w-full h-full z-50 transition duration-300`}>
    <header className="px-6 py-4 border-b dark:border-woodsmoke-900 w-[900px] mb-2">
      <h2 className="font-[600]">Timers</h2>
      <p className="text-woodsmoke-500">These events are currently saved locally on your computer.</p>
    </header>
    <main>
      <ListTable {...{ records }} />
    </main>
  </div>
};

export default List;