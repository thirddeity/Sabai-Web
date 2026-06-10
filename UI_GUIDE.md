# Sabai UI Guide

## Visual Direction

Sabai uses the **Sabai Life Console** direction: a personal life control center and digital life hub, not a business admin dashboard.

The UI should feel:

- Calm and premium.
- Friendly for older users.
- Clear before decorative.
- Soft green, mint, and emerald.
- Lightly glassy, never transparent enough to reduce readability.
- Personal, warm, and life-focused.

Do not use a left sidebar or admin-dashboard layout.

## Layout Direction

- Use Bento Grid as the main dashboard layout.
- Use Floating Top Navigation on desktop.
- Use Bottom Pill Navigation on mobile.
- The first screen after login is a Life Hub.
- The Life Hub starts with a greeting hero: "วันนี้มีอะไรสำคัญบ้าง".
- Include a large global search pill.
- Include a soft life visual card in the hero so the dashboard feels warm and personal.
- Include a short priority strip named "สิ่งที่ควรดูวันนี้".
- Show 4 feature cards:
  - เอกสารสำคัญ
  - การเงิน
  - นัดหมายและเตือน
  - งานที่ต้องทำ
- Show today summary cards:
  - นัดวันนี้
  - งานค้าง
  - บิลใกล้ตัด
  - เอกสารใกล้หมดอายุ

## Thai Wording Rules

- Use clear Thai labels for primary navigation and section headings.
- Keep `Sabai` as the brand name, but avoid English labels for everyday actions.
- Prefer concrete words such as `หน้าแรก`, `ค้นหา`, `วันนี้`, `เมนู`, `เรื่องสำคัญของฉัน`, and `สรุปวันนี้`.
- Avoid abstract template words such as `Life Hub`, `Modules`, `Today Summary`, `Hub`, and `More` in visible primary UI.
- Placeholder text must clearly say when a screen uses mock data or is not connected to a real feature yet.

## Core Tokens

- Primary color: soft emerald.
- Background: light mint green gradient.
- Card surface: clear glass with mostly translucent white and only a light green tint.
- Border: translucent white or mint.
- Shadow: soft green shadow.
- Warm accent: soft amber `#d99b4a` and peach glass tint for selected calls to action.
- Radius: balanced and friendly, not overly round.
- Balanced radius scale:
  - Cards: about `16px`.
  - Inputs and buttons: about `12px`.
  - Floating navigation: about `20px`.
  - Mobile bottom navigation: about `22px`.
  - Search pill: about `14px`.
- Font size: readable by default.
- Button height: large enough for comfortable tapping.

## Clear Glass + Warm Accent

- Use clear glass surfaces first, then add color as a soft tint.
- Keep card opacity readable: glass should feel lighter, but text contrast must stay strong.
- Use warm amber and peach only as accents for important actions or variety inside feature cards.
- Avoid making every dashboard card green; mix emerald, amber, sky-mint, and soft lilac-sage tints.
- Prefer a subtle border glow over a heavy hover shadow.
- Hover lift should stay around `-2px` and should not make cards feel jumpy.

## Component Rules

- Ant Design remains the primary UI system.
- Use Ant Design tokens first.
- Use shared Sabai wrappers for visual polish:
  - `PageContainer`
  - `GlassCard`
  - `MotionCard`
  - `GradientBackground`
  - `GlowOrb`
  - `FeatureCard`
  - `StatCard`
  - `FloatingTopNav`
  - `MobileBottomNav`
  - `EmptyState`
- Use Tailwind only for small spacing or responsive details.
- Use project CSS classes with the `sabai-` prefix.
- Do not override global `.ant-*` selectors.

## Motion Rules

- Prefer CSS transitions.
- Use small hover lift on cards.
- Use gentle entrance animation for page and card surfaces.
- Avoid motion that distracts or affects readability.
- Do not add animation libraries for this phase.

## Accessibility Rules

- Text must remain high contrast on glass surfaces.
- Do not use neon colors.
- Do not make cards too transparent.
- Avoid cramped spacing.
- Buttons and inputs should be comfortable on mobile.
- Check responsive behavior on mobile and desktop before finishing UI work.
