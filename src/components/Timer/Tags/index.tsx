import { Plus, TagIcon } from "lucide-react";
import { useTimer } from "../context";
import { Tag } from "./Tag";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CreateTagForm from "./CreateTagForm";

const Tags = () => {
  const { tags, deleteTag } = useTimer();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return <div className="flex items-center gap-2">
    <Button variant="outline" onClick={() => setIsFormOpen(!isFormOpen)}>Tag</Button>
    {isFormOpen && <CreateTagForm onClose={() => setIsFormOpen(false)} />}
  </div>;
}; 

export default Tags;