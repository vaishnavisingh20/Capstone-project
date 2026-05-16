import { create } from "zustand";

type ColumnType = {
  title: string;
  tasks: string[];
};

type TaskStore = {
  columns: ColumnType[];

  addTask: (
    columnIndex: number,
    task: string
  ) => void;

  editTask: (
    columnIndex: number,
    taskIndex: number,
    updatedTask: string
  ) => void;

  deleteTask: (
    columnIndex: number,
    taskIndex: number
  ) => void;

  moveTask: (
    sourceColIndex: number,
    destColIndex: number,
    sourceTaskIndex: number,
    destTaskIndex: number
  ) => void;
};

export const useTaskStore =
  create<TaskStore>((set) => ({
    columns: [
      {
        title: "Todo",
        tasks: [
          "Design UI",
          "Create API Structure",
        ],
      },
      {
        title: "In Progress",
        tasks: [
          "Authentication System",
        ],
      },
      {
        title: "Completed",
        tasks: [
          "Project Setup",
        ],
      },
    ],

    addTask: (columnIndex, task) =>
      set((state) => {
        const updatedColumns = [
          ...state.columns,
        ];

        updatedColumns[columnIndex].tasks.push(
          task
        );

        return {
          columns: updatedColumns,
        };
      }),

    editTask: (
      columnIndex,
      taskIndex,
      updatedTask
    ) =>
      set((state) => {
        const updatedColumns = [
          ...state.columns,
        ];

        updatedColumns[columnIndex].tasks[
          taskIndex
        ] = updatedTask;

        return {
          columns: updatedColumns,
        };
      }),

    deleteTask: (columnIndex, taskIndex) =>
      set((state) => {
        const updatedColumns = [
          ...state.columns,
        ];

        updatedColumns[columnIndex].tasks.splice(
          taskIndex,
          1
        );

        return {
          columns: updatedColumns,
        };
      }),

    moveTask: (
      sourceColIndex,
      destColIndex,
      sourceTaskIndex,
      destTaskIndex
    ) =>
      set((state) => {
        const updatedColumns = [
          ...state.columns,
        ];

        const [movedTask] =
          updatedColumns[
            sourceColIndex
          ].tasks.splice(sourceTaskIndex, 1);

        updatedColumns[
          destColIndex
        ].tasks.splice(destTaskIndex, 0, movedTask);

        return {
          columns: updatedColumns,
        };
      }),
  }));