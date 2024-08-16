import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import "./cards.css";
import React from "react";
import Task from "./Tasks/Task";
import { Resizable } from "re-resizable";

function Cards({ tasks }) {
  return (
    <div className="cards">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => {
          return (
            <Resizable
              key={task.id}
              defaultSize={{
                width: 300,
                height: 50,
              }}
              style={{
                padding: 10,
                border: "1px solid #ccc",
                borderRadius: 5,
              }}
            >
              <Task id={task.id} title={task.title} />
            </Resizable>
          );
        })}
      </SortableContext>
    </div>
  );
}

export default Cards;
