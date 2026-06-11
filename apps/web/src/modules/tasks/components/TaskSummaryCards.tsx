import { Typography } from "antd";

export interface TaskSummary {
  all: number;
  done: number;
  high: number;
  todo: number;
  waiting: number;
}

export interface TaskSummaryCardsProps {
  summary: TaskSummary;
}

export function TaskSummaryCards({ summary }: TaskSummaryCardsProps) {
  return (
    <div className="sabai-task-summary-grid">
      <div className="sabai-task-summary-card sabai-task-summary-card-todo">
        <Typography.Text type="secondary">ต้องทำ</Typography.Text>
        <div className="sabai-task-summary-value">{summary.todo}</div>
      </div>
      <div className="sabai-task-summary-card sabai-task-summary-card-waiting">
        <Typography.Text type="secondary">รอได้</Typography.Text>
        <div className="sabai-task-summary-value">{summary.waiting}</div>
      </div>
      <div className="sabai-task-summary-card sabai-task-summary-card-high">
        <Typography.Text type="secondary">สำคัญ</Typography.Text>
        <div className="sabai-task-summary-value">{summary.high}</div>
      </div>
      <div className="sabai-task-summary-card sabai-task-summary-card-done">
        <Typography.Text type="secondary">ทำเสร็จแล้ว</Typography.Text>
        <div className="sabai-task-summary-value">{summary.done}</div>
      </div>
    </div>
  );
}
