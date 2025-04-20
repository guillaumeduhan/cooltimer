import { useState } from "react";
import { Tag as TagType, useTimer } from "../context";
import { Tag } from "./Tag";
import { ChevronDown, TagIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SelectTagProps {
  onSelect: (tag: TagType) => void;
  selectedTags: TagType[];
}

const SelectTag = ({ onSelect, selectedTags = [] }: SelectTagProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { tags } = useTimer();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 rounded-md bg-transparent text-sm dark:text-white w-full"
      >
        {selectedTags.length > 0 ? (
          <div className="flex gap-[3px] w-full">
            {selectedTags.slice(0, 1).map((tag) => (
              <Tag key={tag.id} tag={tag} small />
            ))}
            {selectedTags.length > 2 && (
              <span className="flex items-center justify-center rounded-full border border-woodsmoke-900 text-xs px-2 py-1">
                +{selectedTags.length - 2}
              </span>
            )}
          </div>
        ) : (
          <div className="font-[600] flex items-center gap-1 text-sm items-center justify-center rounded px-2 py-1 dark:bg-black">
            <TagIcon size={14} />
            <span>Tags</span>
          </div>
        )}
      </button>

      {/* {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white dark:bg-woodsmoke-950 rounded-md shadow-lg border dark:border-woodsmoke-700 max-h-60 overflow-auto">
          {tags.length > 0 ? (
            tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => onSelect(tag)}
                className="w-full px-3 py-2 text-left transition-colors"
              >
                <Tag tag={tag} />
              </button>
            ))
          ) : (
            <div className="px-3 py-2 text-woodsmoke-500 dark:text-woodsmoke-400">
              Aucun tag disponible
            </div>
          )}
        </div>
      )} */}
    </div>
  );
};

export default SelectTag;