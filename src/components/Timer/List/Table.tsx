'use client';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { TimerRecord, useTimer } from '../context';
import ListItem from "./Item";
import Logo from "@/components/Logo";

dayjs.extend(relativeTime);

const ListTable = ({ records = [] }: any) => {
  const { formatTime, deleteById, updateRecordTag } = useTimer();
  return <div className="w-full overflow-y-auto">
    {records.length === 0 && <div className="w-full flex items-center justify-center">
      <div className="grid gap-2 text-center py-12">
        <div className="mx-auto">
          <Logo size={48} />
        </div>
        <div>
          <p className="font-[600]">You have no record yet!</p>
          <p className="font-[400] text-woodsmoke-500">You can start a timer now.</p>
        </div>
      </div>
    </div>
    }
    {records.length > 0 && <ul className="grid gap-1 overflow-y-auto">
      {records.sort((a: TimerRecord, b: TimerRecord) => dayjs(b.created_at).diff(dayjs(a.created_at), 'second')).map((record: TimerRecord) => <ListItem key={record.id} record={record} />)}
    </ul>
    }
  </div>
};
export default ListTable;