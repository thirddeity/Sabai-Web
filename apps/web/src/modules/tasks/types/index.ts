export type TaskPriority = "high" | "medium";

export type TaskStatus = "todo" | "waiting" | "done";

export type TaskFilter = "all" | "todo" | "waiting" | "high" | "done";

export interface TaskItem {
  id: string;
  title: string;
  note: string;
  priority: TaskPriority;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}

export interface TaskDraft {
  title: string;
  note: string;
  priority: TaskPriority;
  status: TaskStatus;
}
