'use client';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useTimer } from "../context";
import ListTable from "./Table";

dayjs.extend(relativeTime);

const List = ({ open, setOpen }: any) => {
  const { records, formatTime } = useTimer();

  return <div className={`relative w-full h-full z-50 transition duration-300`}>
    {open && <div>
      <header className="text-black dark:text-white gap-4 px-6 py-4 border-b dark:border-woodsmoke-900 w-full lg:w-[900px] mb-2">
        <h2 className="font-[600]">Timers ({records.length || 0})</h2>
        <p className="text-woodsmoke-500">Saved locally on your computer.</p>
      </header>
      <main>
        <ListTable {...{ records }} />
      </main>
    </div>}
  </div>
};

export default List;