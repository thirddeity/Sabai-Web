import { Col, Row, Typography } from "antd";

import taskSummaryDone from "@/modules/tasks/assets/tick.png";
import taskSummaryHigh from "@/modules/tasks/assets/priority.png";
import taskSummaryTodo from "@/modules/tasks/assets/check-list.png";
import taskSummaryWaiting from "@/modules/tasks/assets/processing.png";

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

interface TaskSummaryCardConfig {
  art: string;
  label: string;
  valueKey: keyof Pick<TaskSummary, "done" | "high" | "todo" | "waiting">;
  color: string;
}

const summaryCards: TaskSummaryCardConfig[] = [
  {
    art: taskSummaryTodo,
    label: "ต้องทำ",
    valueKey: "todo",
    color: "text-blue-500!",
  },
  {
    art: taskSummaryWaiting,
    label: "รอได้",
    valueKey: "waiting",
    color: "text-orange-500!",
  },
  {
    art: taskSummaryHigh,
    label: "สำคัญ",
    valueKey: "high",
    color: "text-red-500!",
  },
  {
    art: taskSummaryDone,
    label: "ทำเสร็จแล้ว",
    valueKey: "done",
    color: "text-green-500!",
  },
];

export function TaskSummaryCards({ summary }: TaskSummaryCardsProps) {
  return (
    <Row gutter={[12, 12]}>
      {summaryCards.map((card) => (
        <Col key={card.valueKey} xs={12} sm={12} lg={6}>
          <div className="sabai-task-summary-card">
            <div>
              <Typography.Text type="secondary" className={card.color}>
                {card.label}
              </Typography.Text>
              <Typography.Title level={2} className={card.color}>
                {summary[card.valueKey]}
              </Typography.Title>
            </div>
            <img
              src={card.art}
              alt=""
              className="w-16 h-16"
              aria-hidden="true"
            />
          </div>
        </Col>
      ))}
    </Row>
  );
}
