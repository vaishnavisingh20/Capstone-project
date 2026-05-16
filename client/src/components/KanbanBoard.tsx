"use client";

import { useState } from "react";

import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import TaskModal from "./TaskModal";

import { useTaskStore } from "@/store/taskStore";

export default function KanbanBoard() {
  const [selectedTask, setSelectedTask] =
    useState<string | null>(null);

  const {
    columns,
    addTask,
    editTask,
    deleteTask,
    moveTask,
  } = useTaskStore();

  const onDragEnd = (result: any) => {
    if (!result.destination) return;

    moveTask(
      Number(result.source.droppableId),
      Number(result.destination.droppableId),
      result.source.index,
      result.destination.index
    );
  };

  return (
    <>
      <DragDropContext onDragEnd={onDragEnd}>
        
        <div className="overflow-x-auto">
          
          <div className="grid min-w-[900px] grid-cols-3 gap-6">
            
            {columns.map((column, columnIndex) => (
              <Droppable
                droppableId={String(columnIndex)}
                key={columnIndex}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
                  >
                    {/* Header */}
                    <div className="mb-5 flex items-center justify-between">
                      
                      <div>
                        <h2 className="text-xl font-bold text-white">
                          {column.title}
                        </h2>

                        <p className="mt-1 text-sm text-slate-400">
                          {column.tasks.length} tasks
                        </p>
                      </div>

                      <button
                        onClick={() => {
                          const task = prompt(
                            "Enter task name"
                          );

                          if (!task) return;

                          addTask(columnIndex, task);
                        }}
                        className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-2 text-sm font-medium text-white transition hover:scale-105"
                      >
                        + Add
                      </button>
                    </div>

                    {/* Tasks */}
                    <div className="space-y-4">
                      
                      {column.tasks.map(
                        (task, taskIndex) => (
                          <Draggable
                            draggableId={`${columnIndex}-${taskIndex}`}
                            index={taskIndex}
                            key={`${columnIndex}-${taskIndex}`}
                          >
                            {(provided) => (
                              <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                onClick={() =>
                                  setSelectedTask(task)
                                }
                                className="cursor-pointer rounded-2xl border border-white/10 bg-black/20 p-4 transition hover:scale-[1.02] hover:border-cyan-400/40 hover:bg-black/30"
                              >
                                <div className="flex items-start justify-between gap-3">
                                  
                                  <div>
                                    <h3 className="font-medium text-white">
                                      {task}
                                    </h3>

                                    <p className="mt-2 text-sm text-slate-400">
                                      Task #{taskIndex + 1}
                                    </p>
                                  </div>

                                  <div className="flex gap-2">
                                    
                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();

                                        const updatedTask =
                                          prompt(
                                            "Edit Task",
                                            task
                                          );

                                        if (
                                          !updatedTask
                                        )
                                          return;

                                        editTask(
                                          columnIndex,
                                          taskIndex,
                                          updatedTask
                                        );
                                      }}
                                      className="rounded-lg bg-yellow-500 px-2 py-1 text-xs font-medium text-black transition hover:bg-yellow-400"
                                    >
                                      Edit
                                    </button>

                                    <button
                                      onClick={(e) => {
                                        e.stopPropagation();

                                        deleteTask(
                                          columnIndex,
                                          taskIndex
                                        );
                                      }}
                                      className="rounded-lg bg-red-600 px-2 py-1 text-xs font-medium text-white transition hover:bg-red-500"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </div>
                              </div>
                            )}
                          </Draggable>
                        )
                      )}

                      {provided.placeholder}
                    </div>
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </div>
      </DragDropContext>

      {selectedTask && (
        <TaskModal
          task={selectedTask}
          onClose={() =>
            setSelectedTask(null)
          }
        />
      )}
    </>
  );
}