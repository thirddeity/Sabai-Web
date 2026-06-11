import {
  Button,
  Checkbox,
  Flex,
  Form,
  Input,
  Modal,
  Popconfirm,
  Segmented,
  Select,
  Space,
  Tag,
  Typography,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  PlusOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Component } from "react";

import { EmptyState } from "@/ui/components/EmptyState";
import { GlassCard } from "@/ui/effects/GlassCard";
import type { TaskDraft, TaskFilter, TaskItem, TaskPriority } from "@/modules/tasks/types";
import "../styles/index.css";

const emptyDraft: TaskDraft = {
  title: "",
  note: "",
  priority: "medium",
};

const starterTasks: TaskItem[] = [
  {
    id: "task-demo-1",
    title: "ต่ออายุบัตรประชาชนของแม่",
    note: "เตรียมเอกสารและเช็กวันว่างก่อนจองคิว",
    priority: "high",
    done: false,
    createdAt: "2026-06-11T08:00:00.000Z",
    updatedAt: "2026-06-11T08:00:00.000Z",
  },
  {
    id: "task-demo-2",
    title: "จ่ายค่าอินเทอร์เน็ตบ้าน",
    note: "เช็กยอดก่อนสิ้นเดือน",
    priority: "medium",
    done: false,
    createdAt: "2026-06-11T08:10:00.000Z",
    updatedAt: "2026-06-11T08:10:00.000Z",
  },
  {
    id: "task-demo-3",
    title: "จัดแฟ้มเอกสารประกัน",
    note: "แยกเอกสารที่หมดอายุแล้วออกจากแฟ้มหลัก",
    priority: "low",
    done: true,
    createdAt: "2026-06-11T08:20:00.000Z",
    updatedAt: "2026-06-11T08:20:00.000Z",
  },
];

const priorityLabels: Record<TaskPriority, string> = {
  high: "สำคัญมาก",
  medium: "ปกติ",
  low: "รอได้",
};

const priorityColors: Record<TaskPriority, string> = {
  high: "volcano",
  medium: "green",
  low: "blue",
};

interface TaskPageState {
  addDraft: TaskDraft;
  editDraft: TaskDraft;
  editingTaskId: string | null;
  filter: TaskFilter;
  tasks: TaskItem[];
  titleError: string | null;
}

function isTaskFilter(value: string | number): value is TaskFilter {
  return value === "all" || value === "pending" || value === "done" || value === "high";
}

export class TaskPage extends Component<Record<string, never>, TaskPageState> {
  state: TaskPageState = {
    addDraft: emptyDraft,
    editDraft: emptyDraft,
    editingTaskId: null,
    filter: "pending",
    tasks: starterTasks,
    titleError: null,
  };

  getFilteredTasks() {
    const { filter, tasks } = this.state;

    if (filter === "pending") {
      return tasks.filter((task) => !task.done);
    }

    if (filter === "done") {
      return tasks.filter((task) => task.done);
    }

    if (filter === "high") {
      return tasks.filter((task) => task.priority === "high" && !task.done);
    }

    return tasks;
  }

  getSummary() {
    const { tasks } = this.state;

    return {
      all: tasks.length,
      done: tasks.filter((task) => task.done).length,
      pending: tasks.filter((task) => !task.done).length,
      high: tasks.filter((task) => task.priority === "high" && !task.done).length,
    };
  }

  handleAddTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      addDraft: {
        ...this.state.addDraft,
        title: event.target.value,
      },
      titleError: null,
    });
  };

  handleAddNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      addDraft: {
        ...this.state.addDraft,
        note: event.target.value,
      },
    });
  };

  handleAddPriorityChange = (priority: TaskPriority) => {
    this.setState({
      addDraft: {
        ...this.state.addDraft,
        priority,
      },
    });
  };

  handleEditTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      editDraft: {
        ...this.state.editDraft,
        title: event.target.value,
      },
      titleError: null,
    });
  };

  handleEditNoteChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      editDraft: {
        ...this.state.editDraft,
        note: event.target.value,
      },
    });
  };

  handleEditPriorityChange = (priority: TaskPriority) => {
    this.setState({
      editDraft: {
        ...this.state.editDraft,
        priority,
      },
    });
  };

  handleFilterChange = (value: string | number) => {
    if (isTaskFilter(value)) {
      this.setState({ filter: value });
    }
  };

  handleAddTask = () => {
    const title = this.state.addDraft.title.trim();

    if (!title) {
      this.setState({ titleError: "กรุณาใส่ชื่องานก่อนเพิ่มรายการ" });
      return;
    }

    const now = new Date().toISOString();
    const nextTask: TaskItem = {
      id: `task-${Date.now()}`,
      title,
      note: this.state.addDraft.note.trim(),
      priority: this.state.addDraft.priority,
      done: false,
      createdAt: now,
      updatedAt: now,
    };

    this.setState({
      addDraft: emptyDraft,
      filter: "pending",
      tasks: [nextTask, ...this.state.tasks],
      titleError: null,
    });
  };

  handleResetAddForm = () => {
    this.setState({
      addDraft: emptyDraft,
      titleError: null,
    });
  };

  handleStartEdit = (task: TaskItem) => {
    this.setState({
      editDraft: {
        title: task.title,
        note: task.note,
        priority: task.priority,
      },
      editingTaskId: task.id,
      titleError: null,
    });
  };

  handleCancelEdit = () => {
    this.setState({
      editDraft: emptyDraft,
      editingTaskId: null,
      titleError: null,
    });
  };

  handleSaveEdit = () => {
    const { editingTaskId, editDraft, tasks } = this.state;
    const title = editDraft.title.trim();

    if (!editingTaskId) {
      return;
    }

    if (!title) {
      this.setState({ titleError: "กรุณาใส่ชื่องานก่อนบันทึก" });
      return;
    }

    this.setState({
      editDraft: emptyDraft,
      editingTaskId: null,
      tasks: tasks.map((task) =>
        task.id === editingTaskId
          ? {
              ...task,
              title,
              note: editDraft.note.trim(),
              priority: editDraft.priority,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
      titleError: null,
    });
  };

  handleToggleDone = (taskId: string) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              done: !task.done,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    });
  };

  handleTaskPriorityChange = (taskId: string, priority: TaskPriority) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              priority,
              updatedAt: new Date().toISOString(),
            }
          : task,
      ),
    });
  };

  handleDeleteTask = (taskId: string) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  };

  renderSummary() {
    const summary = this.getSummary();

    return (
      <div className="sabai-task-summary-grid">
        <div className="sabai-task-summary-card">
          <Typography.Text type="secondary">งานค้าง</Typography.Text>
          <div className="sabai-task-summary-value">{summary.pending}</div>
        </div>
        <div className="sabai-task-summary-card">
          <Typography.Text type="secondary">สำคัญมาก</Typography.Text>
          <div className="sabai-task-summary-value">{summary.high}</div>
        </div>
        <div className="sabai-task-summary-card">
          <Typography.Text type="secondary">ทำเสร็จแล้ว</Typography.Text>
          <div className="sabai-task-summary-value">{summary.done}</div>
        </div>
      </div>
    );
  }

  renderAddForm() {
    const { addDraft, titleError } = this.state;

    return (
      <GlassCard liftOnHover={false} className="sabai-task-panel">
        <Flex vertical gap="middle">
          <div>
            <Typography.Text className="sabai-kicker">เพิ่มงาน</Typography.Text>
            <Typography.Title level={3}>งานใหม่ที่ต้องทำ</Typography.Title>
          </div>
          <Form layout="vertical">
            <Form.Item
              label="ชื่องาน"
              validateStatus={titleError ? "error" : undefined}
              help={titleError ?? undefined}
            >
              <Input
                size="large"
                value={addDraft.title}
                placeholder="เช่น ต่ออายุเอกสาร, จ่ายบิล, โทรนัดหมาย"
                onChange={this.handleAddTitleChange}
                onPressEnter={this.handleAddTask}
              />
            </Form.Item>
            <Form.Item label="รายละเอียดสั้น ๆ">
              <Input.TextArea
                value={addDraft.note}
                placeholder="ใส่รายละเอียดที่ช่วยให้จำได้ง่าย"
                autoSize={{ minRows: 3, maxRows: 5 }}
                onChange={this.handleAddNoteChange}
              />
            </Form.Item>
            <Form.Item label="ความสำคัญ">
              <Select<TaskPriority>
                size="large"
                value={addDraft.priority}
                onChange={this.handleAddPriorityChange}
                options={[
                  { value: "high", label: priorityLabels.high },
                  { value: "medium", label: priorityLabels.medium },
                  { value: "low", label: priorityLabels.low },
                ]}
              />
            </Form.Item>
            <div className="sabai-task-form-actions">
              <Button
                type="primary"
                size="large"
                icon={<PlusOutlined />}
                onClick={this.handleAddTask}
              >
                เพิ่มงาน
              </Button>
              <Button size="large" onClick={this.handleResetAddForm}>
                ล้างฟอร์ม
              </Button>
            </div>
          </Form>
        </Flex>
      </GlassCard>
    );
  }

  renderTaskList() {
    const filteredTasks = this.getFilteredTasks();
    const { filter } = this.state;

    return (
      <GlassCard liftOnHover={false} className="sabai-task-panel">
        <div className="sabai-task-toolbar">
          <div>
            <Typography.Text className="sabai-kicker">รายการงาน</Typography.Text>
            <Typography.Title level={3}>งานที่ต้องทำ</Typography.Title>
          </div>
          <Segmented
            value={filter}
            onChange={this.handleFilterChange}
            options={[
              { label: "งานค้าง", value: "pending" },
              { label: "สำคัญ", value: "high" },
              { label: "เสร็จแล้ว", value: "done" },
              { label: "ทั้งหมด", value: "all" },
            ]}
          />
        </div>
        {filteredTasks.length > 0 ? (
          <div className="sabai-task-list">
            {filteredTasks.map((task) => this.renderTaskItem(task))}
          </div>
        ) : (
          <div className="sabai-task-empty">
            <EmptyState
              title="ยังไม่มีงานในมุมนี้"
              description="ลองเพิ่มงานใหม่ หรือเปลี่ยนตัวกรองเพื่อดูรายการอื่น"
            />
          </div>
        )}
      </GlassCard>
    );
  }

  renderTaskItem(task: TaskItem) {
    const itemClassName = [
      "sabai-task-item",
      task.done ? "sabai-task-item-done" : "",
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <div key={task.id} className={itemClassName}>
        <Checkbox
          checked={task.done}
          aria-label={`ทำเสร็จแล้ว: ${task.title}`}
          onChange={() => this.handleToggleDone(task.id)}
        />
        <div>
          <div className="sabai-task-title">{task.title}</div>
          {task.note ? (
            <Typography.Text type="secondary" className="sabai-task-note">
              {task.note}
            </Typography.Text>
          ) : null}
          <Space wrap size={[8, 8]} className="mt-2">
            <Tag color={priorityColors[task.priority]}>
              {priorityLabels[task.priority]}
            </Tag>
            <Select<TaskPriority>
              size="small"
              value={task.priority}
              onChange={(priority) => this.handleTaskPriorityChange(task.id, priority)}
              options={[
                { value: "high", label: priorityLabels.high },
                { value: "medium", label: priorityLabels.medium },
                { value: "low", label: priorityLabels.low },
              ]}
            />
          </Space>
        </div>
        <div className="sabai-task-actions">
          <Button
            aria-label={`แก้ไข ${task.title}`}
            icon={<EditOutlined />}
            onClick={() => this.handleStartEdit(task)}
          />
          <Popconfirm
            title="ลบงานนี้?"
            description="รายการนี้จะหายจากหน้าตัวอย่างทันที"
            okText="ลบ"
            cancelText="ยกเลิก"
            onConfirm={() => this.handleDeleteTask(task.id)}
          >
            <Button
              danger
              aria-label={`ลบ ${task.title}`}
              icon={<DeleteOutlined />}
            />
          </Popconfirm>
        </div>
      </div>
    );
  }

  renderEditModal() {
    const { editDraft, editingTaskId, titleError } = this.state;

    return (
      <Modal
        title="แก้ไขงาน"
        open={!!editingTaskId}
        okText="บันทึก"
        cancelText="ยกเลิก"
        okButtonProps={{ icon: <SaveOutlined /> }}
        onOk={this.handleSaveEdit}
        onCancel={this.handleCancelEdit}
      >
        <Form layout="vertical">
          <Form.Item
            label="ชื่องาน"
            validateStatus={titleError ? "error" : undefined}
            help={titleError ?? undefined}
          >
            <Input
              value={editDraft.title}
              onChange={this.handleEditTitleChange}
              onPressEnter={this.handleSaveEdit}
            />
          </Form.Item>
          <Form.Item label="รายละเอียดสั้น ๆ">
            <Input.TextArea
              value={editDraft.note}
              autoSize={{ minRows: 3, maxRows: 5 }}
              onChange={this.handleEditNoteChange}
            />
          </Form.Item>
          <Form.Item label="ความสำคัญ">
            <Select<TaskPriority>
              value={editDraft.priority}
              onChange={this.handleEditPriorityChange}
              options={[
                { value: "high", label: priorityLabels.high },
                { value: "medium", label: priorityLabels.medium },
                { value: "low", label: priorityLabels.low },
              ]}
            />
          </Form.Item>
        </Form>
      </Modal>
    );
  }

  render() {
    return (
      <div className="sabai-task-page">
        <Flex className="sabai-task-header">
          <div>
            <Typography.Text className="sabai-kicker">งานที่ต้องทำ</Typography.Text>
            <Typography.Title level={1}>จัดการงานที่ต้องทำ</Typography.Title>
            <Typography.Paragraph type="secondary">
              รวมงานค้าง งานสำคัญ และสิ่งที่ทำเสร็จแล้วไว้ในหน้าเดียว
            </Typography.Paragraph>
          </div>
        </Flex>
        {this.renderSummary()}
        <div className="sabai-task-workspace">
          {this.renderAddForm()}
          {this.renderTaskList()}
        </div>
        {this.renderEditModal()}
      </div>
    );
  }
}
