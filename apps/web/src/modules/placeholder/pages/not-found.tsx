import { Component } from "react";

import { ModulePlaceholderPage } from "@/modules/placeholder/pages";

export class NotFoundPage extends Component {
  render() {
    return (
      <ModulePlaceholderPage
        title="ไม่พบหน้านี้"
        description="ลิงก์นี้ไม่มีอยู่หรือถูกย้ายไปแล้ว กลับไปที่หน้าหลักเพื่อเริ่มต่อได้เลย"
      />
    );
  }
}
