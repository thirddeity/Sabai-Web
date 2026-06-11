import { Button, Checkbox, Popconfirm, Select, Space, Tag, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import type { TaskItem, TaskStatus } from "@/modules/tasks/types";
import {
  taskPriorityColors,
  taskPriorityLabels,
  taskStatusColors,
  taskStatusLabels,
  taskStatusOptions,
} from "./task-options";

export interface TaskItemRowProps {
  task: TaskItem;
  onDelete: (taskId: string) => void;
  onEdit: (task: TaskItem) => void;
  onStatusChange: (taskId: string, status: TaskStatus) => void;
  onToggleDone: (taskId: string) => void;
}

export function TaskItemRow({
  task,
  onDelete,
  onEdit,
  onStatusChange,
  onToggleDone,
}: TaskItemRowProps) {
  const isDone = task.status === "done";
  const itemClassName = [
    "sabai-task-item",
    task.priority === "high" && !isDone ? "sabai-task-item-high" : "",
    isDone ? "sabai-task-item-done" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={itemClassName}>
      <Checkbox
        checked={isDone}
        aria-label={`ทำเสร็จแล้ว: ${task.title}`}
        onChange={() => onToggleDone(task.id)}
      />
      <div className="sabai-task-main">
        <div className="sabai-task-title">{task.title}</div>
        {task.note ? (
          <Typography.Text type="secondary" className="sabai-task-note">
            {task.note}
          </Typography.Text>
        ) : null}
        <Space wrap size={[8, 8]} className="sabai-task-tags">
          <Tag color={taskStatusColors[task.status]} className="sabai-task-status-tag">
            {taskStatusLabels[task.status]}
          </Tag>
          <Tag color={taskPriorityColors[task.priority]}>
            {taskPriorityLabels[task.priority]}
          </Tag>
        </Space>
      </div>
      <div className="sabai-task-row-controls">
        <Select<TaskStatus>
          aria-label={`เปลี่ยนสถานะ ${task.title}`}
          className="sabai-task-status-select"
          value={task.status}
          onChange={(status) => onStatusChange(task.id, status)}
          options={taskStatusOptions}
        />
        <div className="sabai-task-actions">
          <Button
            aria-label={`แก้ไข ${task.title}`}
            icon={<EditOutlined />}
            onClick={() => onEdit(task)}
          />
          <Popconfirm
            title="ลบงานนี้?"
            description="รายการนี้จะหายจากหน้าตัวอย่างทันที"
            okText="ลบ"
            cancelText="ยกเลิก"
            onConfirm={() => onDelete(task.id)}
          >
            <Button
              danger
              aria-label={`ลบ ${task.title}`}
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </div>
      </div>
    </div>
  );
}
