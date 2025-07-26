'use client';
import Logo from "@/components/Logo";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { TimerRecord, useTimer } from '../context';
import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Tags from "../Tags";
import { Tag } from "../Tags/Tag";
import TagsList from "../Tags/List";

dayjs.extend(relativeTime);

const ListItem = ({ record }: { record: TimerRecord }) => {
    const { formatTime, deleteById, updateRecordTag } = useTimer();
    const timeAgo = dayjs(record.created_at).fromNow();
    const [open, setOpen] = useState(false);

    useEffect(() => {
      console.log(record)
    }, [record])

    return <li key={record.id} className="group flex items-center border-l-4 border-transparent hover:border-woodsmoke-800 gap-2 px-4 min-h-12 items-center cursor-pointer transition duration-300 hover:bg-woodsmoke-100 dark:hover:bg-woodsmoke-700/25">
    <div className="min-w-[120px] font-[500] text-sm text-woodsmoke-500 whitespace-nowrap truncate">{timeAgo}</div>
    <div className="grow whitespace-nowrap">
      <TagsList {...{
        record,
        small: true
      }} />
    </div>
    <div className="flex gap-2 items-center justify-end w-full whitespace-nowrap">
      <div className="hidden group-hover:flex"
        onClick={() => deleteById(record.id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ff0000" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm5-7.1l1.9 1.9q.275.275.7.275t.7-.275t.275-.7t-.275-.7l-1.9-1.9l1.9-1.9q.275-.275.275-.7t-.275-.7t-.7-.275t-.7.275L12 11.1l-1.9-1.9q-.275-.275-.7-.275t-.7.275t-.275.7t.275.7l1.9 1.9l-1.9 1.9q-.275.275-.275.7t.275.7t.7.275t.7-.275z"/></svg>
      </div>
      {formatTime(record.time, false)}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="flex items-center gap-1 hidden group-hover:flex px-2 py-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><g className="open-in-new-tab-outline"><g fill="currentColor" fillRule="evenodd" className="Vector" clipRule="evenodd"><path d="M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-5.263a1 1 0 1 1 2 0V19a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h5.017a1 1 0 1 1 0 2z"/><path d="M21.411 2.572a.963.963 0 0 1 0 1.36l-8.772 8.786a.96.96 0 0 1-1.358 0a.963.963 0 0 1 0-1.36l8.773-8.786a.96.96 0 0 1 1.357 0"/><path d="M21.04 2c.53 0 .96.43.96.962V8c0 .531-.47 1-1 1s-1-.469-1-1V4h-4c-.53 0-1-.469-1-1s.43-1 .96-1z"/></g></g></svg>
            </Button>
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogTitle className="text-lg font-semibold">{formatTime(record.time, false)}</DialogTitle>
          <p className="text-woodsmoke-600 text-sm">Created {timeAgo}</p>
          <TagsList {...{
            record
          }} />
        </DialogContent>
      </Dialog>
    </div>
    {/* Move to popup */}
    {/* <div className="flex gap-2 items-center justify-end w-full whitespace-nowrap">
      <div className="hidden group-hover:flex items-center gap-1">
        <X record={record} />
      </div>
    </div> */}
  </li>;
}

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