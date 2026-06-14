import {
  CalendarOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  CreditCardOutlined,
  FileProtectOutlined,
  HomeOutlined,
  LockOutlined,
  SearchOutlined,
  SafetyCertificateOutlined,
  SmileOutlined,
} from "@ant-design/icons";
import type { ReactNode } from "react";

export interface LandingPreviewItem {
  label: string;
  value: string;
}

export interface LandingPreview {
  eyebrow: string;
  items: LandingPreviewItem[];
  title: string;
}

export interface LandingJourneyStep {
  accent: "morning" | "day" | "evening" | "night";
  description: string;
  icon: ReactNode;
  label: string;
  preview: LandingPreview;
  time: string;
  title: string;
}

export interface LandingInfoItem {
  description: string;
  icon: ReactNode;
  title: string;
}

export interface LandingShowcasePanel {
  accent: "tasks" | "schedule" | "finance" | "vault";
  description: string;
  icon: ReactNode;
  items: LandingPreviewItem[];
  title: string;
}

export const landingJourneySteps: LandingJourneyStep[] = [
  {
    accent: "morning",
    description:
      "เปิดดูงานที่ควรเริ่มก่อน พร้อมแยกเรื่องสำคัญออกจากเรื่องที่รอได้",
    icon: <CheckSquareOutlined />,
    label: "เช้า",
    preview: {
      eyebrow: "งานที่ต้องทำ",
      title: "วันนี้ควรเริ่มจากอะไร",
      items: [
        { label: "สำคัญ", value: "ต่ออายุบัตร" },
        { label: "รอได้", value: "จัดเอกสารบ้าน" },
      ],
    },
    time: "07:30",
    title: "รู้ทันทีว่าวันนี้ต้องจัดการอะไร",
  },
  {
    accent: "day",
    description:
      "ดูนัดหมาย วันสำคัญ และสิ่งที่ต้องเตือนให้ทันเวลาในระหว่างวัน",
    icon: <CalendarOutlined />,
    label: "กลางวัน",
    preview: {
      eyebrow: "นัดหมาย",
      title: "เตือนก่อนถึงเวลา",
      items: [
        { label: "วันนี้", value: "พบหมอฟัน" },
        { label: "พรุ่งนี้", value: "วันเกิดแม่" },
      ],
    },
    time: "12:00",
    title: "ไม่พลาดนัดและการเตือน",
  },
  {
    accent: "evening",
    description:
      "จดรายรับ รายจ่าย และบิลใกล้ครบกำหนดด้วยภาษาที่เข้าใจง่าย",
    icon: <CreditCardOutlined />,
    label: "เย็น",
    preview: {
      eyebrow: "การเงิน",
      title: "เห็นบิลที่ใกล้ถึงกำหนด",
      items: [
        { label: "รายจ่าย", value: "ค่าไฟ" },
        { label: "ใกล้ตัด", value: "สมาชิกเพลง" },
      ],
    },
    time: "18:30",
    title: "เห็นภาพเงินประจำวัน",
  },
  {
    accent: "night",
    description:
      "เก็บเอกสารสำคัญและดูเรื่องที่ควรเตรียมไว้ล่วงหน้าก่อนปิดวัน",
    icon: <FileProtectOutlined />,
    label: "ก่อนนอน",
    preview: {
      eyebrow: "เอกสารสำคัญ",
      title: "ไม่ลืมวันหมดอายุ",
      items: [
        { label: "เอกสาร", value: "ประกันรถ" },
        { label: "เตือน", value: "อีก 30 วัน" },
      ],
    },
    time: "21:00",
    title: "วางใจว่าเรื่องสำคัญไม่หาย",
  },
];

export const landingShowcasePanels: LandingShowcasePanel[] = [
  {
    accent: "tasks",
    description: "แยกงานสำคัญ งานค้าง และงานที่ทำเสร็จแล้วให้เห็นทันที",
    icon: <CheckCircleOutlined />,
    title: "งานวันนี้",
    items: [
      { label: "ต้องทำก่อน", value: "2 เรื่อง" },
      { label: "เสร็จแล้ว", value: "4 เรื่อง" },
    ],
  },
  {
    accent: "schedule",
    description: "รวมวันนัด วันเกิด และวันสำคัญไว้ในมุมเดียว",
    icon: <CalendarOutlined />,
    title: "นัดหมาย",
    items: [
      { label: "วันนี้", value: "1 นัด" },
      { label: "สัปดาห์นี้", value: "3 รายการ" },
    ],
  },
  {
    accent: "finance",
    description: "ดูรายจ่ายใกล้ครบกำหนดก่อนพลาดชำระ",
    icon: <CreditCardOutlined />,
    title: "การเงิน",
    items: [
      { label: "ใกล้ครบกำหนด", value: "ค่าไฟ" },
      { label: "เดือนนี้", value: "7 รายการ" },
    ],
  },
  {
    accent: "vault",
    description: "เตือนเอกสารใกล้หมดอายุและเก็บข้อมูลให้ค้นหาง่าย",
    icon: <FileProtectOutlined />,
    title: "เอกสาร",
    items: [
      { label: "ใกล้หมดอายุ", value: "ประกันรถ" },
      { label: "เก็บไว้", value: "12 ไฟล์" },
    ],
  },
];

export const landingClarityItems: LandingInfoItem[] = [
  {
    icon: <HomeOutlined />,
    title: "เก็บเรื่องสำคัญไว้ที่เดียว",
    description:
      "งาน นัดหมาย การเงิน และเอกสารอยู่ในพื้นที่เดียวที่กลับมาดูง่าย",
  },
  {
    icon: <SearchOutlined />,
    title: "เห็นสิ่งที่ควรทำวันนี้",
    description:
      "เปิดมาแล้วรู้ทันทีว่าเรื่องไหนต้องทำก่อน เรื่องไหนรอได้",
  },
  {
    icon: <SmileOutlined />,
    title: "อ่านง่ายสำหรับคนไทย",
    description:
      "ใช้คำไทยตรงไปตรงมา ปุ่มใหญ่พอ และไม่บังคับให้จำศัพท์เทคนิค",
  },
  {
    icon: <CheckSquareOutlined />,
    title: "เริ่มจากสิ่งจำเป็นก่อน",
    description:
      "เน้นงานที่ใช้ได้จริงในชีวิตประจำวัน แล้วค่อยขยายเมื่อระบบหลักชัดเจน",
  },
];

export const landingTrustItems: LandingInfoItem[] = [
  {
    icon: <SafetyCertificateOutlined />,
    title: "บอกชัดว่าช่วยเรื่องไหน",
    description:
      "อธิบายตรง ๆ ว่า Sabai ช่วยดูแลงาน นัดหมาย การเงิน และเอกสารสำคัญอย่างไร",
  },
  {
    icon: <LockOutlined />,
    title: "ข้อมูลสำคัญอยู่กับเจ้าของบัญชี",
    description:
      "ออกแบบให้เรื่องสำคัญเป็นข้อมูลของผู้ใช้แต่ละคน และเตรียมทางสำหรับความปลอดภัยที่มากขึ้น",
  },
  {
    icon: <HomeOutlined />,
    title: "ระบบเรียบง่าย ดูแลต่อได้",
    description:
      "เลือกแนวทางที่ไม่ทำให้การใช้งานหรือการดูแลแอปซับซ้อนเกินจำเป็น",
  },
];
