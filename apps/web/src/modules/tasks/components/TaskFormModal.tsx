import { Form, Input, Modal, Select } from "antd";

import type { TaskDraft, TaskPriority, TaskStatus } from "@/modules/tasks/types";
import { taskPriorityOptions, taskStatusOptions } from "./task-options";

export interface TaskFormModalProps {
  draft: TaskDraft;
  open: boolean;
  title: string;
  titleError: string | null;
  onCancel: () => void;
  onNoteChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onOk: () => void;
  onPriorityChange: (priority: TaskPriority) => void;
  onStatusChange: (status: TaskStatus) => void;
  onTitleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TaskFormModal({
  draft,
  open,
  title,
  titleError,
  onCancel,
  onNoteChange,
  onOk,
  onPriorityChange,
  onStatusChange,
  onTitleChange,
}: TaskFormModalProps) {
  return (
    <Modal
      title={title}
      open={open}
      okText="บันทึก"
      cancelText="ยกเลิก"
      onOk={onOk}
      onCancel={onCancel}
      destroyOnHidden
    >
      <Form layout="vertical" className="sabai-task-modal-form">
        <Form.Item
          label="ชื่องาน"
          validateStatus={titleError ? "error" : undefined}
          help={titleError ?? undefined}
        >
          <Input
            size="large"
            value={draft.title}
            placeholder="เช่น ต่ออายุเอกสาร, จ่ายบิล, โทรนัดหมาย"
            onChange={onTitleChange}
            onPressEnter={onOk}
          />
        </Form.Item>
        <Form.Item label="รายละเอียดสั้น ๆ">
          <Input.TextArea
            value={draft.note}
            placeholder="ใส่รายละเอียดที่ช่วยให้จำได้ง่าย"
            autoSize={{ minRows: 3, maxRows: 5 }}
            onChange={onNoteChange}
          />
        </Form.Item>
        <div className="sabai-task-modal-grid">
          <Form.Item label="สถานะ">
            <Select<TaskStatus>
              size="large"
              value={draft.status}
              onChange={onStatusChange}
              options={taskStatusOptions}
            />
          </Form.Item>
          <Form.Item label="ความสำคัญ">
            <Select<TaskPriority>
              size="large"
              value={draft.priority}
              onChange={onPriorityChange}
              options={taskPriorityOptions}
            />
          </Form.Item>
        </div>
      </Form>
    </Modal>
  );
}
