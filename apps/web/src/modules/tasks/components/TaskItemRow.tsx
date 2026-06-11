import { Button, Checkbox, Flex, Grid, Popconfirm, Space, Tag, Typography } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

import type { TaskItem } from "@/modules/tasks/types";
import {
  taskPriorityColors,
  taskPriorityLabels,
  taskStatusColors,
  taskStatusLabels,
} from "./task-options";

export interface TaskItemRowProps {
  task: TaskItem;
  onDelete: (taskId: string) => void;
  onEdit: (task: TaskItem) => void;
  onToggleDone: (taskId: string) => void;
}

export function TaskItemRow({
  task,
  onDelete,
  onEdit,
  onToggleDone,
}: TaskItemRowProps) {
  const isDone = task.status === "done";
  const itemClassName = [
    "sabai-task-item",
    `sabai-task-item-${task.status}`,
    task.priority === "high" && !isDone ? "sabai-task-item-high" : "",
    isDone ? "sabai-task-item-done" : "",
  ]
    .filter(Boolean)
    .join(" ");
  const isLg = Grid.useBreakpoint().lg;

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
        <Flex justify="space-between" align="center">
        </Flex>
        <Space wrap size={[8, 8]} className="sabai-task-tags">
          <Tag
            color={taskStatusColors[task.status]}
            className={`sabai-task-status-tag sabai-task-status-tag-${task.status}`}
          >
            {taskStatusLabels[task.status]}
          </Tag>
          <Typography.Text type={taskPriorityColors[task.priority]} className="font-bold text-sm!">
            {taskPriorityLabels[task.priority]}
          </Typography.Text>
        </Space>
      </div>
      <Flex justify="flex-end" align="center">
        <Space size={6}>
          <Button
            size={isLg ? "medium" : "small"}
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
              size={isLg ? "medium" : "small"}
              danger
              aria-label={`ลบ ${task.title}`}
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </Space>
      </Flex>
    </div>
  );
}
