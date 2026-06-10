export interface FeatureCardMock {
  title: string;
  subtitle: string;
  metric: string;
  tone: 'emerald' | 'mint' | 'sage' | 'leaf';
}

export interface SummaryCardMock {
  label: string;
  value: string;
  detail: string;
}

export const dashboardFeatures: FeatureCardMock[] = [
  {
    title: 'Digital Vault',
    subtitle: 'เอกสารสำคัญและข้อมูลส่วนตัว',
    metric: '12 รายการ',
    tone: 'emerald',
  },
  {
    title: 'Finance Tracker',
    subtitle: 'รายรับ รายจ่าย และบิลใกล้ตัด',
    metric: '3 บิล',
    tone: 'mint',
  },
  {
    title: 'Schedule & Reminder',
    subtitle: 'นัดหมาย วันสำคัญ และการเตือน',
    metric: '2 วันนี้',
    tone: 'sage',
  },
  {
    title: 'Task Management',
    subtitle: 'งานค้างและสิ่งที่ต้องทำต่อ',
    metric: '5 งาน',
    tone: 'leaf',
  },
];

export const todaySummaries: SummaryCardMock[] = [
  {
    label: 'นัดวันนี้',
    value: '2',
    detail: 'มีนัดสำคัญช่วงบ่าย',
  },
  {
    label: 'งานค้าง',
    value: '5',
    detail: 'งานด่วน 1 รายการ',
  },
  {
    label: 'บิลใกล้ตัด',
    value: '3',
    detail: 'ภายใน 7 วัน',
  },
  {
    label: 'เอกสารใกล้หมดอายุ',
    value: '1',
    detail: 'ตรวจสอบภายในเดือนนี้',
  },
];
