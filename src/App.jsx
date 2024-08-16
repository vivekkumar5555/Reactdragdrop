import { closestCorners, DndContext } from "@dnd-kit/core";
import "./App.css";
import React, { useState } from "react";
import Cards from "./Components/Cards";
import { arrayMove } from "@dnd-kit/sortable";
import Input from "./Components/input/Input";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Laptop Drag & Drop" },
    { id: 2, title: "Smart Phone Drag & Drop" },
    { id: 3, title: "Smart TV Drag & Drop" },
  ]);
  const addTasks = (title) => {
    setTasks((tasks) => [...tasks, { id: tasks.length + 1, title }]);
  };

  const getTaskPos = (id) => tasks.findIndex((task) => task.id === id);

  const handleDragEnd = (e) => {
    const { active, over } = e;
    if (!over || active.id === over.id) return;

    const originalPos = getTaskPos(active.id);
    const newPos = getTaskPos(over.id);

    if (originalPos === -1 || newPos === -1) return;

    setTasks((tasks) => arrayMove(tasks, originalPos, newPos));
  };

  return (
    <div className="App">
      <h1>Drag&Drop</h1>
      <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
        <Input onSubmit={addTasks} />
        <Cards tasks={tasks} />
      </DndContext>
    </div>
  );
}

export default App;
