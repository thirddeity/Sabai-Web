import { Button, Flex, Typography } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { Component } from "react";
import type { ChangeEvent } from "react";

import { TaskFilterBar } from "@/modules/tasks/components/TaskFilterBar";
import { TaskFormModal } from "@/modules/tasks/components/TaskFormModal";
import { TaskItemRow } from "@/modules/tasks/components/TaskItemRow";
import { TaskSummaryCards } from "@/modules/tasks/components/TaskSummaryCards";
import type { TaskSummary } from "@/modules/tasks/components/TaskSummaryCards";
import { EmptyState } from "@/ui/components/EmptyState";
import { GlassCard } from "@/ui/effects/GlassCard";
import type {
  TaskDraft,
  TaskFilter,
  TaskItem,
  TaskPriority,
  TaskStatus,
} from "@/modules/tasks/types";
import "../styles/index.css";

const emptyDraft: TaskDraft = {
  title: "",
  note: "",
  priority: "medium",
  status: "todo",
};

const starterTasks: TaskItem[] = [
  {
    id: "task-demo-1",
    title: "ต่ออายุบัตรประชาชนของแม่",
    note: "เตรียมเอกสารและเช็กวันว่างก่อนจองคิว",
    priority: "high",
    status: "todo",
    createdAt: "2026-06-11T08:00:00.000Z",
    updatedAt: "2026-06-11T08:00:00.000Z",
  },
  {
    id: "task-demo-2",
    title: "จ่ายค่าอินเทอร์เน็ตบ้าน",
    note: "เช็กยอดก่อนสิ้นเดือน",
    priority: "medium",
    status: "todo",
    createdAt: "2026-06-11T08:10:00.000Z",
    updatedAt: "2026-06-11T08:10:00.000Z",
  },
  {
    id: "task-demo-3",
    title: "จัดแฟ้มเอกสารประกัน",
    note: "แยกเอกสารที่หมดอายุแล้วออกจากแฟ้มหลัก",
    priority: "low",
    status: "waiting",
    createdAt: "2026-06-11T08:20:00.000Z",
    updatedAt: "2026-06-11T08:20:00.000Z",
  },
  {
    id: "task-demo-4",
    title: "บันทึกรายการซ่อมบ้านเดือนนี้",
    note: "เก็บใบเสร็จไว้ดูย้อนหลังตอนสรุปค่าใช้จ่าย",
    priority: "medium",
    status: "done",
    createdAt: "2026-06-11T08:30:00.000Z",
    updatedAt: "2026-06-11T08:30:00.000Z",
  },
];

interface TaskPageState {
  draft: TaskDraft;
  editingTaskId: string | null;
  filter: TaskFilter;
  isFormOpen: boolean;
  tasks: TaskItem[];
  titleError: string | null;
}

function isTaskFilter(value: string | number): value is TaskFilter {
  return (
    value === "all" ||
    value === "todo" ||
    value === "waiting" ||
    value === "high" ||
    value === "done"
  );
}

function getEmptyStateTitle(filter: TaskFilter) {
  if (filter === "todo") {
    return "ยังไม่มีงานที่ต้องทำ";
  }

  if (filter === "waiting") {
    return "ยังไม่มีงานที่รอได้";
  }

  if (filter === "high") {
    return "ยังไม่มีงานสำคัญ";
  }

  if (filter === "done") {
    return "ยังไม่มีงานที่ทำเสร็จแล้ว";
  }

  return "ยังไม่มีงานในรายการ";
}

export class TaskPage extends Component<Record<string, never>, TaskPageState> {
  state: TaskPageState = {
    draft: emptyDraft,
    editingTaskId: null,
    filter: "all",
    isFormOpen: false,
    tasks: starterTasks,
    titleError: null,
  };

  private getFilteredTasks() {
    const { filter, tasks } = this.state;

    if (filter === "todo") {
      return tasks.filter((task) => task.status === "todo");
    }

    if (filter === "waiting") {
      return tasks.filter((task) => task.status === "waiting");
    }

    if (filter === "done") {
      return tasks.filter((task) => task.status === "done");
    }

    if (filter === "high") {
      return tasks.filter((task) => task.priority === "high" && task.status !== "done");
    }

    return tasks;
  }

  private getSummary(): TaskSummary {
    const { tasks } = this.state;

    return {
      all: tasks.length,
      done: tasks.filter((task) => task.status === "done").length,
      high: tasks.filter((task) => task.priority === "high" && task.status !== "done").length,
      todo: tasks.filter((task) => task.status === "todo").length,
      waiting: tasks.filter((task) => task.status === "waiting").length,
    };
  }

  private handleOpenAddModal = () => {
    this.setState({
      draft: emptyDraft,
      editingTaskId: null,
      isFormOpen: true,
      titleError: null,
    });
  };

  private handleCancelForm = () => {
    this.setState({
      draft: emptyDraft,
      editingTaskId: null,
      isFormOpen: false,
      titleError: null,
    });
  };

  private handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({
      draft: {
        ...this.state.draft,
        title: event.target.value,
      },
      titleError: null,
    });
  };

  private handleNoteChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    this.setState({
      draft: {
        ...this.state.draft,
        note: event.target.value,
      },
    });
  };

  private handlePriorityChange = (priority: TaskPriority) => {
    this.setState({
      draft: {
        ...this.state.draft,
        priority,
      },
    });
  };

  private handleDraftStatusChange = (status: TaskStatus) => {
    this.setState({
      draft: {
        ...this.state.draft,
        status,
      },
    });
  };

  private handleFilterChange = (value: string | number) => {
    if (isTaskFilter(value)) {
      this.setState({ filter: value });
    }
  };

  private handleSubmitTask = () => {
    const { draft, editingTaskId, tasks } = this.state;
    const title = draft.title.trim();

    if (!title) {
      this.setState({ titleError: "กรุณาใส่ชื่องานก่อนบันทึก" });
      return;
    }

    const now = new Date().toISOString();

    if (editingTaskId) {
      this.setState({
        draft: emptyDraft,
        editingTaskId: null,
        isFormOpen: false,
        tasks: tasks.map((task) =>
          task.id === editingTaskId
            ? {
              ...task,
              title,
              note: draft.note.trim(),
              priority: draft.priority,
              status: draft.status,
              updatedAt: now,
            }
            : task,
        ),
        titleError: null,
      });
      return;
    }

    const nextTask: TaskItem = {
      id: `task-${Date.now()}`,
      title,
      note: draft.note.trim(),
      priority: draft.priority,
      status: draft.status,
      createdAt: now,
      updatedAt: now,
    };

    this.setState({
      draft: emptyDraft,
      filter: draft.status,
      isFormOpen: false,
      tasks: [nextTask, ...tasks],
      titleError: null,
    });
  };

  private handleStartEdit = (task: TaskItem) => {
    this.setState({
      draft: {
        title: task.title,
        note: task.note,
        priority: task.priority,
        status: task.status,
      },
      editingTaskId: task.id,
      isFormOpen: true,
      titleError: null,
    });
  };

  private handleTaskStatusChange = (taskId: string, status: TaskStatus) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId
          ? {
            ...task,
            status,
            updatedAt: new Date().toISOString(),
          }
          : task,
      ),
    });
  };

  private handleToggleDone = (taskId: string) => {
    this.setState({
      tasks: this.state.tasks.map((task) =>
        task.id === taskId
          ? {
            ...task,
            status: task.status === "done" ? "todo" : "done",
            updatedAt: new Date().toISOString(),
          }
          : task,
      ),
    });
  };

  private handleDeleteTask = (taskId: string) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== taskId),
    });
  };

  private renderTaskList() {
    const filteredTasks = this.getFilteredTasks();
    const { filter } = this.state;

    if (filteredTasks.length === 0) {
      return (
        <div className="sabai-task-empty">
          <EmptyState
            title={getEmptyStateTitle(filter)}
            description="กดเพิ่มงานเพื่อสร้างรายการใหม่ หรือเปลี่ยนตัวกรองเพื่อดูงานกลุ่มอื่น"
          />
        </div>
      );
    }

    return (
      <div className="sabai-task-list">
        {filteredTasks.map((task) => (
          <TaskItemRow
            key={task.id}
            task={task}
            onDelete={this.handleDeleteTask}
            onEdit={this.handleStartEdit}
            onStatusChange={this.handleTaskStatusChange}
            onToggleDone={this.handleToggleDone}
          />
        ))}
      </div>
    );
  }

  render() {
    const { draft, editingTaskId, filter, isFormOpen, titleError } = this.state;
    const summary = this.getSummary();

    return (
      <div className="sabai-task-page">
        <Flex className="sabai-task-header">
          <div>
            <Typography.Text className="sabai-kicker">งานที่ต้องทำ</Typography.Text>
            <Typography.Title level={1}>จัดการงานที่ต้องทำ</Typography.Title>
            <Typography.Paragraph type="secondary">
              รวมงานที่ต้องทำ งานที่รอได้ และงานที่ทำเสร็จแล้วไว้ในที่เดียว
            </Typography.Paragraph>
          </div>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={this.handleOpenAddModal}
          >
            เพิ่มงาน
          </Button>
        </Flex>
        <TaskSummaryCards summary={summary} />
        <GlassCard liftOnHover={false} className="sabai-task-panel">
          <TaskFilterBar
            filter={filter}
            summary={summary}
            onFilterChange={this.handleFilterChange}
          />
          {this.renderTaskList()}
        </GlassCard>
        <TaskFormModal
          draft={draft}
          open={isFormOpen}
          title={editingTaskId ? "แก้ไขงาน" : "เพิ่มงาน"}
          titleError={titleError}
          onCancel={this.handleCancelForm}
          onNoteChange={this.handleNoteChange}
          onOk={this.handleSubmitTask}
          onPriorityChange={this.handlePriorityChange}
          onStatusChange={this.handleDraftStatusChange}
          onTitleChange={this.handleTitleChange}
        />
      </div>
    );
  }
}
