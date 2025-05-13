import { X } from "lucide-react";
import { Tag as TagType } from "../context";

interface TagProps {
  tag: TagType;
  onDelete?: (id: string) => void;
  className?: string;
  small?: boolean;
}

export const Tag = ({ tag, onDelete, className = "", small = false }: TagProps) => {
  return (
    <div 
      className={`cursor-pointer dark:text-white font-[600] items-center gap-1 rounded-md capitalize ${className} ${small ? "text-[14px]" : "text-[16px]"} px-2 py-[2px]`}
      style={{ backgroundColor: tag.color + "20", border: `1px solid ${tag.color}` }}
    >
      <span>{tag.name}</span>
      {onDelete && (
        <button
          onClick={() => onDelete(tag.id)}
          className="hover:opacity-70 transition-opacity"
        >
          <X size={14} />
        </button>
      )}
    </div>
  );
}; 