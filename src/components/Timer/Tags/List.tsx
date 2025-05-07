'use client';

import { Tag } from "./Tag";

const TagsList = ({record, small = false}: any) => {
    return <div className="flex items-center gap-1 text-sm transition-all duration-300 text-woodsmoke-500 gap-1">
        {record.tags && record.tags.map((tag, key) => <Tag key={key} {...{ tag, small }} />)}
    </div>;
}
export default TagsList;