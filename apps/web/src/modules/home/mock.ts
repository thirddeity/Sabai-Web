import { AppPath } from "@/router/paths";

export interface FeatureCardMock {
  title: string;
  subtitle: string;
  path: string;
  tone: "emerald" | "amber" | "sky" | "lilac";
  cue: string;
}

export const homeFeatures: FeatureCardMock[] = [
  {
    title: "เอกสารสำคัญ",
    subtitle: "เก็บและดูแลเอกสารส่วนตัวที่ต้องไม่ลืม",
    path: AppPath.vault,
    tone: "emerald",
    cue: "เอกสาร",
  },
  {
    title: "การเงิน",
    subtitle: "ดูรายรับ รายจ่าย และบิลที่ใกล้ถึงกำหนด",
    path: AppPath.finance,
    tone: "amber",
    cue: "เงิน",
  },
  {
    title: "นัดหมายและเตือน",
    subtitle: "รวมวันสำคัญ นัดหมาย และสิ่งที่ต้องเตือน",
    path: AppPath.reminders,
    tone: "sky",
    cue: "นัด",
  },
  {
    title: "งานที่ต้องทำ",
    subtitle: "เพิ่มงาน ติ๊กเสร็จ และจัดความสำคัญของงานประจำวัน",
    path: AppPath.tasks,
    tone: "lilac",
    cue: "งาน",
  },
];
