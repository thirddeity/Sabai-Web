import { ArrowDownOutlined, LoginOutlined } from "@ant-design/icons";
import { Button, Col, Flex, Row, Typography } from "antd";
import { Component } from "react";
import { Link } from "react-router";

import logoImageUrl from "@/assets/logo.png";
import heroImageUrl from "@/modules/landing/assets/day-journey-hero.jpg";
import { InfoCard } from "@/modules/landing/components/InfoCard";
import {
  landingClarityItems,
  landingJourneySteps,
  landingTrustItems,
} from "@/modules/landing/components/landing-content";
import { JourneyStepCard } from "@/modules/landing/components/JourneyStepCard";
import { MotionReveal } from "@/modules/landing/components/MotionReveal";
import { ProductShowcase } from "@/modules/landing/components/ProductShowcase";
import { AppPath } from "@/router/paths";

import "@/modules/landing/styles/index.css";

export class LandingPage extends Component {
  render() {
    return (
      <main className="sabai-landing-page">
        <section className="sabai-landing-hero pb-8">
          <img
            className="sabai-landing-hero-image"
            src={heroImageUrl}
            alt="ภาพประกอบการจัดการเรื่องสำคัญในหนึ่งวันกับ Sabai"
          />
          <div className="sabai-landing-hero-overlay" />

          <Flex
            align="center"
            justify="space-between"
            className="sabai-landing-nav"
          >
            <Link to={AppPath.landing} className="sabai-landing-brand">
              <img src={logoImageUrl} alt="Sabai" />
              <span>Sabai</span>
            </Link>
            <Flex align="center" gap={10}>
              <Button href="#showcase" type="text">
                ดูตัวอย่าง
              </Button>
              <Link to={AppPath.login}>
                <Button type="primary">เข้าสู่ระบบ</Button>
              </Link>
            </Flex>
          </Flex>

          <MotionReveal className="sabai-landing-hero-copy">
            <Flex vertical gap={22}>
              <div className="sabai-landing-logo-seal">
                <img src={logoImageUrl} alt="โลโก้ Sabai" />
              </div>
              <Typography.Text className="sabai-landing-kicker">
                เลขาส่วนตัวดิจิทัลสำหรับชีวิตประจำวัน
              </Typography.Text>
              <Typography.Title>
                วันนี้ต้องดูอะไร Sabai ช่วยจัดให้
              </Typography.Title>
              <Typography.Paragraph>
                รวมงาน นัดหมาย การเงิน และเอกสารสำคัญไว้ในที่เดียว เพื่อให้คุณเปิดมาแล้วรู้ทันทีว่าเรื่องไหนควรดูแลก่อน
              </Typography.Paragraph>
              <Flex
                align="center"
                gap={12}
                wrap="wrap"
                className="sabai-landing-hero-actions"
              >
                <Link to={AppPath.login}>
                  <Button size="large" type="primary" icon={<LoginOutlined />}>
                    เริ่มจัดเรื่องสำคัญ
                  </Button>
                </Link>
                <Button
                  href="#showcase"
                  size="large"
                  icon={<ArrowDownOutlined />}
                >
                  ดูตัวอย่างการใช้งาน
                </Button>
              </Flex>
            </Flex>
          </MotionReveal>
        </section>

        <section id="showcase" className="sabai-landing-section">
          <MotionReveal>
            <Row gutter={[28, 28]} align="middle">
              <Col xs={24} lg={9}>
                <Flex vertical gap={12} className="sabai-landing-section-head">
                  <Typography.Text className="sabai-landing-kicker">
                    เห็นภาพก่อนเริ่มใช้
                  </Typography.Text>
                  <Typography.Title level={2}>
                    เปิดหน้าเดียว แล้วเห็นเรื่องที่ควรดูแลวันนี้
                  </Typography.Title>
                  <Typography.Paragraph>
                    ส่วนนี้ทำหน้าที่เหมือนตัวอย่างสินค้าแบบโต้ตอบได้ ผู้ใช้จึงเข้าใจทันทีว่า Sabai ช่วยจัดชีวิตประจำวันอย่างไร โดยไม่ต้องอ่านข้อความยาว
                  </Typography.Paragraph>
                </Flex>
              </Col>
              <Col xs={24} lg={15}>
                <ProductShowcase />
              </Col>
            </Row>
          </MotionReveal>
        </section>

        <section id="daily-flow" className="sabai-landing-section">
          <MotionReveal>
            <Flex vertical gap={8} className="sabai-landing-section-head">
              <Typography.Text className="sabai-landing-kicker">
                ชีวิตวันนี้แบบทีละขั้น
              </Typography.Text>
              <Typography.Title level={2}>
                ตั้งแต่เช้าจนก่อนนอน Sabai ช่วยเตือนสิ่งที่ควรดูต่อ
              </Typography.Title>
              <Typography.Paragraph>
                เล่าแอปผ่านจังหวะชีวิตจริงของผู้ใช้ พร้อมตัวอย่างเล็ก ๆ ว่าแต่ละช่วงช่วยดูแลเรื่องไหน
              </Typography.Paragraph>
            </Flex>
          </MotionReveal>
          <div className="sabai-landing-timeline">
            <Row gutter={[16, 16]}>
              {landingJourneySteps.map((step) => (
                <Col key={step.time} xs={24} md={12} xl={6}>
                  <JourneyStepCard step={step} />
                </Col>
              ))}
            </Row>
          </div>
        </section>

        <section className="sabai-landing-section sabai-landing-preview-band">
          <MotionReveal>
            <Row gutter={[20, 20]} align="middle">
              <Col xs={24} lg={9}>
                <Flex vertical gap={12}>
                  <Typography.Text className="sabai-landing-kicker">
                    ชัดเจนก่อนสวยเสมอ
                  </Typography.Text>
                  <Typography.Title level={2}>
                    หน้าแรกต้องบอกได้ทันทีว่า Sabai ช่วยอะไร
                  </Typography.Title>
                  <Typography.Paragraph>
                    เนื้อหาส่วนนี้ช่วยให้ผู้ใช้เข้าใจคุณค่าของแอปก่อนกดเข้าสู่ระบบ ทั้งภาษา วิธีจัดข้อมูล และสิ่งที่ควรเห็นในชีวิตประจำวัน
                  </Typography.Paragraph>
                </Flex>
              </Col>
              <Col xs={24} lg={15}>
                <Row gutter={[14, 14]}>
                  {landingClarityItems.map((item) => (
                    <Col key={item.title} xs={24} sm={12}>
                      <InfoCard
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </MotionReveal>
        </section>

        <section className="sabai-landing-section sabai-landing-trust-band">
          <MotionReveal>
            <Row gutter={[20, 20]} align="middle">
              <Col xs={24} lg={10}>
                <Flex vertical gap={12}>
                  <Typography.Text className="sabai-landing-kicker">
                    ไว้ใจได้เพราะออกแบบอย่างตรงไปตรงมา
                  </Typography.Text>
                  <Typography.Title level={2}>
                    เห็นเรื่องสำคัญชัดขึ้น โดยไม่เพิ่มความยุ่งยากให้ชีวิต
                  </Typography.Title>
                  <Typography.Paragraph>
                    Sabai ตั้งใจช่วยให้คุณดูแลงาน นัดหมาย การเงิน และเอกสารได้ง่ายขึ้น ทุกข้อความบนหน้าแรกจึงพูดเฉพาะสิ่งที่ระบบช่วยได้จริง และใช้ภาษาที่คนทั่วไปเข้าใจทันที
                  </Typography.Paragraph>
                </Flex>
              </Col>
              <Col xs={24} lg={14}>
                <Row gutter={[14, 14]}>
                  {landingTrustItems.map((item) => (
                    <Col key={item.title} xs={24} sm={8}>
                      <InfoCard
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                      />
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </MotionReveal>
        </section>

        <section
          className="sabai-landing-section sabai-landing-final-cta"
          style={{
            backgroundImage: `linear-gradient(110deg, rgba(22, 45, 37, 0.9), rgba(36, 92, 72, 0.72)), url(${heroImageUrl})`,
          }}
        >
          <MotionReveal>
            <Flex vertical gap={16} className="sabai-landing-final-copy">
              <Typography.Text className="sabai-landing-kicker">
                พร้อมเริ่มจากวันนี้
              </Typography.Text>
              <Typography.Title level={2}>
                ให้ Sabai ช่วยจำเรื่องสำคัญแทนการกระจายไว้หลายที่
              </Typography.Title>
              <Typography.Paragraph className="text-gray-300!">
                เริ่มจากงาน นัดหมาย การเงิน และเอกสารที่คุณต้องดูแลบ่อยที่สุด แล้วค่อยเพิ่มรายละเอียดเมื่อพร้อม
              </Typography.Paragraph>
              <Flex
                align="center"
                gap={12}
                wrap="wrap"
                className="sabai-landing-final-actions"
              >
                <Link to={AppPath.login}>
                  <Button size="large" type="primary" icon={<LoginOutlined />}>
                    เข้าสู่ระบบและเริ่มจัดการ
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </MotionReveal>
        </section>
      </main>
    );
  }
}
