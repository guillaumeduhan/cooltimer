'use client';

import { useTimer } from "@/components/Timer/context";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";
import CreateTagForm from "@/components/Timer/Tags/CreateTagForm";
import { Tag } from "@/components/Timer/Tags/Tag";

export default function TagsPage() {
  const { tags, deleteTag } = useTimer();
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <div className="container mx-auto grid gap-8 py-8 max-w-[900px] px-2">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Tags {tags.length > 0 ? `(${tags.length})` : '0'}</h1>
        <Button
          variant="outline"
          onClick={() => setIsFormOpen(!isFormOpen)}
        >
          <Plus size={16} className="mr-2" />
          {isFormOpen ? 'Close' : 'New Tag'}
        </Button>
      </div>

      {isFormOpen && <CreateTagForm onClose={() => setIsFormOpen(false)} />}

      <div className="grid gap-4">
        {tags.length > 0 ? (
          tags.map((tag) => (
            <div
              key={tag.id}
              className="flex items-center gap-2"
            >
              <Tag tag={tag} onDelete={deleteTag} />
              <div className="text-sm text-woodsmoke-500 dark:text-woodsmoke-400">
                Created {new Date(tag.created_at).toLocaleDateString()}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8">
            <p className="text-woodsmoke-500 dark:text-woodsmoke-400">
              You have no tags yet. Create your first tag to get started!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
