import { Button, Segmented, Typography } from "antd";
import { PlusCircleOutlined } from "@ant-design/icons";

import type { TaskFilter } from "@/modules/tasks/types";
import type { TaskSummary } from "./TaskSummaryCards";
import { taskFilterLabels } from "./task-options";

export interface TaskFilterBarProps {
  filter: TaskFilter;
  summary: TaskSummary;
  onAddTask: () => void;
  onFilterChange: (value: string | number) => void;
}

const filterOrder: TaskFilter[] = ["all", "todo", "waiting", "high", "done"];

export function TaskFilterBar({
  filter,
  summary,
  onAddTask,
  onFilterChange,
}: TaskFilterBarProps) {
  return (
    <div className="sabai-task-filter-bar">
      <div>
        <Typography.Text className="sabai-kicker">รายการงาน</Typography.Text>
        <Typography.Title level={3}>จัดการงานทั้งหมด</Typography.Title>
      </div>
      <div className="sabai-task-filter-actions">
        <Segmented
          value={filter}
          onChange={onFilterChange}
          options={filterOrder.map((value) => ({
            value,
            label: (
              <span className="sabai-task-filter-label">
                <span className={`sabai-task-filter-dot sabai-task-filter-dot-${value}`} />
                <span>{taskFilterLabels[value]}</span>
                <span className="sabai-task-filter-count">{summary[value]}</span>
              </span>
            ),
          }))}
        />
        <Button
          variant="outlined"
          color="primary"
          size="large"
          icon={<PlusCircleOutlined />}
          onClick={onAddTask}
          className="lg:my-0! mt-4! shadow-none!"
        >
          เพิ่มงาน
        </Button>
      </div>
    </div>
  );
}
