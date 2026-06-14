import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Flex, Typography } from "antd";
import { motion } from "framer-motion";
import { Link } from "react-router";

import { AppPath } from "@/router/paths";

import { landingShowcasePanels } from "./landing-content";

export function ProductShowcase() {
  return (
    <div className="sabai-showcase">
      <motion.div
        className="sabai-showcase-device"
        initial={{ rotateX: 8, rotateY: -10, y: 18 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.32 }}
        whileHover={{ rotateX: 4, rotateY: -4, y: -4 }}
        whileInView={{ rotateX: 0, rotateY: 0, y: 0 }}
      >
        <Flex vertical gap={18}>
          <Flex align="center" justify="space-between" gap={12}>
            <Flex vertical gap={2}>
              <Typography.Text className="sabai-showcase-eyebrow">
                ภาพรวมวันนี้
              </Typography.Text>
              <Typography.Title level={3}>
                เรื่องที่ควรดูแลก่อนเริ่มวัน
              </Typography.Title>
            </Flex>
            <span className="sabai-showcase-status">พร้อมใช้</span>
          </Flex>

          <div className="sabai-showcase-grid">
            {landingShowcasePanels.map((panel, index) => (
              <motion.div
                animate={{ y: [0, index % 2 === 0 ? -7 : 7, 0] }}
                className={`sabai-showcase-panel sabai-showcase-panel-${panel.accent}`}
                key={panel.title}
                transition={{
                  duration: 5.4 + index * 0.4,
                  ease: "easeInOut",
                  repeat: Infinity,
                }}
              >
                <Flex vertical gap={12}>
                  <Flex align="center" gap={10}>
                    <span className="sabai-showcase-icon">{panel.icon}</span>
                    <Typography.Text strong>{panel.title}</Typography.Text>
                  </Flex>
                  <Typography.Paragraph>{panel.description}</Typography.Paragraph>
                  <Flex vertical gap={8}>
                    {panel.items.map((item) => (
                      <Flex
                        align="center"
                        className="sabai-showcase-row"
                        gap={10}
                        justify="space-between"
                        key={`${panel.title}-${item.label}`}
                      >
                        <Typography.Text>{item.label}</Typography.Text>
                        <Typography.Text strong>{item.value}</Typography.Text>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </motion.div>
            ))}
          </div>

          <Flex align="center" gap={12} wrap="wrap">
            <Link to={AppPath.login}>
              <Button type="primary" icon={<ArrowRightOutlined />}>
                เริ่มจัดเรื่องของวันนี้
              </Button>
            </Link>
            <Typography.Text className="sabai-showcase-note">
              ตัวอย่างนี้สร้างจากหน้าตาจริงที่ตั้งใจให้ผู้ใช้เปิดมาแล้วเข้าใจทันที
            </Typography.Text>
          </Flex>
        </Flex>
      </motion.div>
    </div>
  );
}
