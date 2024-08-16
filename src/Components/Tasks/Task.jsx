import { useSortable } from "@dnd-kit/sortable";
import "./Tasks.css";
import React from "react";
import { CSS } from "@dnd-kit/utilities";

function Task({ id, title }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id });
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="tasks"
    >
      <span>🛍️</span>

      {title}
    </div>
  );
}

export default Task;
