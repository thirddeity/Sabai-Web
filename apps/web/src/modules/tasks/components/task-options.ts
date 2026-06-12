import type { TaskFilter, TaskPriority, TaskStatus } from "@/modules/tasks/types";
import type { BaseType } from "antd/lib/typography/Base";

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
  medium: "ปกติ",
  high: "สำคัญมาก",
};

export const taskPriorityColors: Record<TaskPriority, BaseType> = {
  medium: "success",
  high: "danger",
};

export const taskStatusOptions: Array<{ label: string; value: TaskStatus }> = [
  { value: "todo", label: taskStatusLabels.todo },
  { value: "waiting", label: taskStatusLabels.waiting },
  { value: "done", label: taskStatusLabels.done },
];

export const taskPriorityOptions: Array<{ label: string; value: TaskPriority }> = [
  { value: "medium", label: taskPriorityLabels.medium },
  { value: "high", label: taskPriorityLabels.high },
];

export const taskFilterLabels: Record<TaskFilter, string> = {
  all: "ทั้งหมด",
  todo: "ต้องทำ",
  waiting: "รอได้",
  high: "สำคัญ",
  done: "ทำเสร็จแล้ว",
};
