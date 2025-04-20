import { useState } from "react";
import { useTimer } from "../context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface CreateTagFormProps {
  onClose: () => void;
}

const MAX_NAME_LENGTH = 33;

const CreateTagForm = ({ onClose }: CreateTagFormProps) => {
  const { createTag } = useTimer();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#000000");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim()) {
      createTag(name.slice(0, MAX_NAME_LENGTH), color);
      setName("");
      setColor("#000000");
      onClose();
    }
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    if (newName.length <= MAX_NAME_LENGTH) {
      setName(newName);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="flex items-center gap-4">
      <div className="grid gap-2">
        <div className="flex justify-between items-center">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <span className="text-xs text-woodsmoke-500 dark:text-woodsmoke-400">
            {name.length}/{MAX_NAME_LENGTH}
          </span>
        </div>
        <Input
          id="name"
          value={name}
          onChange={handleNameChange}
          placeholder="Enter tag name"
          required
          maxLength={MAX_NAME_LENGTH}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="color" className="text-sm font-medium">
          Color
        </label>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="w-8 h-8 rounded cursor-pointer"
          />
          <Input
            value={color}
            onChange={(e) => setColor(e.target.value)}
            className="flex-1"
          />
        </div>
      </div>
      </div>
      <div className="flex gap-2">
        <Button variant="outline" type="button" onClick={onClose}>
          Cancel
        </Button>
        <Button type="submit">Save</Button>
      </div>
    </form>
  );
};

export default CreateTagForm; 