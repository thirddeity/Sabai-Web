import { Segmented, Typography } from "antd";

import type { TaskFilter } from "@/modules/tasks/types";
import type { TaskSummary } from "./TaskSummaryCards";
import { taskFilterLabels } from "./task-options";

export interface TaskFilterBarProps {
  filter: TaskFilter;
  summary: TaskSummary;
  onFilterChange: (value: string | number) => void;
}

const filterOrder: TaskFilter[] = ["all", "todo", "waiting", "high", "done"];

export function TaskFilterBar({ filter, summary, onFilterChange }: TaskFilterBarProps) {
  return (
    <div className="sabai-task-filter-bar">
      <div>
        <Typography.Text className="sabai-kicker">รายการงาน</Typography.Text>
        <Typography.Title level={3}>จัดการงานทั้งหมด</Typography.Title>
      </div>
      <Segmented
        value={filter}
        onChange={onFilterChange}
        options={filterOrder.map((value) => ({
          value,
          label: (
            <span className="sabai-task-filter-label">
              <span>{taskFilterLabels[value]}</span>
              <span className="sabai-task-filter-count">{summary[value]}</span>
            </span>
          ),
        }))}
      />
    </div>
  );
}
