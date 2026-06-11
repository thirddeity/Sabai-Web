import type { TaskFilter, TaskPriority, TaskStatus } from "@/modules/tasks/types";

export const taskStatusLabels: Record<TaskStatus, string> = {
  todo: "ต้องทำ",
  waiting: "รอได้",
  done: "ทำเสร็จแล้ว",
};

export const taskStatusColors: Record<TaskStatus, string> = {
  todo: "orange",
  waiting: "blue",
  done: "green",
};

export const taskPriorityLabels: Record<TaskPriority, string> = {
  high: "สำคัญมาก",
  medium: "ปกติ",
  low: "รอได้",
};

export const taskPriorityColors: Record<TaskPriority, string> = {
  high: "volcano",
  medium: "green",
  low: "blue",
};

export const taskStatusOptions: Array<{ label: string; value: TaskStatus }> = [
  { value: "todo", label: taskStatusLabels.todo },
  { value: "waiting", label: taskStatusLabels.waiting },
  { value: "done", label: taskStatusLabels.done },
];

export const taskPriorityOptions: Array<{ label: string; value: TaskPriority }> = [
  { value: "high", label: taskPriorityLabels.high },
  { value: "medium", label: taskPriorityLabels.medium },
  { value: "low", label: taskPriorityLabels.low },
];

export const taskFilterLabels: Record<TaskFilter, string> = {
  all: "ทั้งหมด",
  todo: "ต้องทำ",
  waiting: "รอได้",
  high: "สำคัญ",
  done: "ทำเสร็จแล้ว",
};
