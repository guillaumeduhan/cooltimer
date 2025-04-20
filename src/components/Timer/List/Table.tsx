'use client';
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { TimerRecord, useTimer } from '../context';
import ListItem from "./Item";

dayjs.extend(relativeTime);

const ListTable = ({ records = [] }: any) => {
  const { formatTime, deleteById, updateRecordTag } = useTimer();
  return <div className="w-full overflow-y-auto">
    {records.length === 0 && <div className="w-full flex items-center justify-center">
      <div className="grid gap-2 text-center py-12">
        <div className="mx-auto">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24"><path fill="currentColor" d="m10.45 14.55l1.325 2.95q.075.15.225.15t.225-.15l1.325-2.95l2.95-1.325q.15-.075.15-.225t-.15-.225l-2.95-1.325l-1.325-2.95q-.075-.15-.225-.15t-.225.15l-1.325 2.95l-2.95 1.325q-.15.075-.15.225t.15.225l2.95 1.325ZM10 3q-.425 0-.712-.288T9 2q0-.425.288-.713T10 1h4q.425 0 .713.288T15 2q0 .425-.288.713T14 3h-4Zm2 19q-1.85 0-3.487-.713T5.65 19.35q-1.225-1.225-1.938-2.863T3 13q0-1.85.713-3.488T5.65 6.65q1.225-1.225 2.863-1.938T12 4q1.55 0 2.975.5t2.675 1.45l.7-.7q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-.7.7Q20 8.6 20.5 10.025T21 13q0 1.85-.713 3.488T18.35 19.35q-1.225 1.225-2.863 1.938T12 22Zm0-2q2.9 0 4.95-2.05T19 13q0-2.9-2.05-4.95T12 6Q9.1 6 7.05 8.05T5 13q0 2.9 2.05 4.95T12 20Zm0-7Z" /></svg>
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