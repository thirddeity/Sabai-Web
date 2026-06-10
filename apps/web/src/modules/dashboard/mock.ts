export interface FeatureCardMock {
  title: string;
  subtitle: string;
  metric: string;
  tone: 'emerald' | 'amber' | 'sky' | 'lilac';
  cue: string;
}

export interface SummaryCardMock {
  label: string;
  value: string;
  detail: string;
}

export interface PriorityItemMock {
  label: string;
  detail: string;
  tone: 'emerald' | 'amber' | 'sky';
}

export const dashboardFeatures: FeatureCardMock[] = [
  {
    title: 'เอกสารสำคัญ',
    subtitle: 'เก็บและดูแลเอกสารส่วนตัวที่ต้องไม่ลืม',
    metric: '12 รายการ',
    tone: 'emerald',
    cue: 'เอกสาร',
  },
  {
    title: 'การเงิน',
    subtitle: 'ดูรายรับ รายจ่าย และบิลที่ใกล้ถึงกำหนด',
    metric: '3 บิล',
    tone: 'amber',
    cue: 'เงิน',
  },
  {
    title: 'นัดหมายและเตือน',
    subtitle: 'รวมวันสำคัญ นัดหมาย และสิ่งที่ต้องเตือน',
    metric: '2 วันนี้',
    tone: 'sky',
    cue: 'นัด',
  },
  {
    title: 'งานที่ต้องทำ',
    subtitle: 'ติดตามงานค้างและสิ่งที่ควรจัดการต่อ',
    metric: '5 งาน',
    tone: 'lilac',
    cue: 'งาน',
  },
];

export const priorityItems: PriorityItemMock[] = [
  {
    label: 'นัดบ่ายนี้',
    detail: 'มี 2 รายการที่ควรเตรียมตัว',
    tone: 'sky',
  },
  {
    label: 'บิลใกล้ครบกำหนด',
    detail: 'มี 3 บิลภายใน 7 วัน',
    tone: 'amber',
  },
  {
    label: 'เอกสารใกล้หมดอายุ',
    detail: 'มี 1 รายการที่ควรตรวจสอบ',
    tone: 'emerald',
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
