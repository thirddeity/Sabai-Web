export type TaskPriority = "high" | "medium" | "low";

export type TaskFilter = "all" | "pending" | "done" | "high";

export interface TaskItem {
  id: string;
  title: string;
  note: string;
  priority: TaskPriority;
  done: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface TaskDraft {
  title: string;
  note: string;
  priority: TaskPriority;
}
