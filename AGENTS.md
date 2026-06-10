# AGENTS.md

# กฎหลักของโปรเจค Sabai

ไฟล์นี้คือกฎหลักที่ AI/Codex ต้องอ่านและทำตามก่อนเริ่มงานทุกครั้ง

โปรเจคนี้คือเว็บแอป **เลขาส่วนตัวดิจิทัล / Personal Digital Assistant** สำหรับคนไทย ใช้งานง่าย เหมาะกับทุกวัย เน้นความเรียบง่าย ปลอดภัย และทำใช้เองก่อนด้วยงบน้อยมาก

Repository files คือแหล่งความจริงหลัก
ห้ามพึ่งความจำจากแชทเก่า

---

## 1. เป้าหมายของโปรเจค

สร้างเว็บแอปที่รวมเรื่องสำคัญของชีวิตไว้ที่เดียว เช่น

* เอกสารสำคัญ
* การเงินส่วนตัว
* ตารางนัดและการเตือน
* วางแผน
* ข้อมูลส่วนตัวที่ต้องค้นหาเร็ว

MVP ต้องเรียบง่าย ใช้งานได้จริงก่อน ไม่ทำให้ระบบซับซ้อนเกินจำเป็น

---

## 2. สิ่งที่อยู่นอกขอบเขต MVP

ห้ามเพิ่มสิ่งต่อไปนี้ใน MVP ถ้าไม่ได้สั่งชัดเจน:

* AI features
* Payment
* Team workspace
* Admin panel ซับซ้อน
* Enterprise architecture
* Analytics หนัก ๆ
* Microservices
* Redis
* Background queue
* Docker Compose
* Caddy
* VPS deployment
* Kubernetes
* Self-hosted infrastructure

Docker Compose และ Caddy เป็นตัวเลือกในอนาคตเท่านั้น ไม่ใช้ใน MVP

---

## 3. Tech Stack หลัก

ใช้ stack นี้เท่านั้น:

### Frontend

* React
* Vite
* React Router v7
* TypeScript
* Ant Design v6 หรือใหม่กว่า
* Tailwind CSS v4

### Backend

* Bun
* Hono
* TypeScript
* Zod
* Drizzle ORM
* Better Auth

### Database

* PostgreSQL ผ่าน managed provider เช่น Supabase Free หรือ Neon Free

### Storage

* Cloudflare R2 ใช้เฉพาะตอนทำฟีเจอร์อัปโหลดไฟล์ใน Digital Vault

### Deploy

* Cloudflare Pages / Workers

---

## 4. TypeScript Rules

* ใช้ TypeScript เท่านั้น
* ห้ามใช้ `any`
* ห้ามใช้ `as any`
* ห้ามใช้ untyped escape hatch ใน production code
* ต้องทำให้ typecheck ผ่านก่อนจบงาน
* ถ้าจำเป็นต้องใช้ type ซับซ้อน ให้สร้าง type/interface ให้ชัดเจน

---

## 5. React Component Rules

โปรเจคนี้เลือกใช้ **React Class Component เป็นหลัก** เพราะต้องการโค้ดที่อ่านเป็นระเบียบ เข้าใจ flow ง่าย และเหมาะกับเจ้าของโปรเจคที่ต้องดูแลต่อเอง

### ใช้ Class Component เป็น default สำหรับ

* Feature pages
* Components ที่มี state
* Components ที่มี behavior
* UI หลักของแต่ละ module
* ฟอร์มหลัก
* Dashboard cards
* List/detail pages

### อนุญาตให้ใช้ Function Component เฉพาะกรณีนี้

* Component เล็ก ๆ ที่เป็น presentational เท่านั้น
* Wrapper ที่จำเป็นต้องใช้ React hooks
* HOC เช่น `withRouter`, `withForm`, `withBreakpoint`
* Library API ที่บังคับให้ใช้ hooks
* Component ที่ใช้ hooks แล้วทำให้โค้ดง่ายกว่า class component อย่างชัดเจน

### Hooks Rules

* ห้ามกระจาย hook logic ไปทั่ว feature pages
* ถ้าจำเป็นต้องใช้ hooks ให้ห่อไว้ใน HOC หรือ wrapper เล็ก ๆ
* ถ้าใช้ `useForm()` ของ Ant Design ให้เรียกผ่าน shared HOC เท่านั้น
* ถ้าใช้ breakpoint ให้เรียกผ่าน shared `withBreakpoint` HOC
* ห้ามใช้ hooks โดยไม่จำเป็น

---

## 6. UI และ Styling Rules

ใช้ Ant Design เป็นระบบ UI หลัก
ใช้ Tailwind เฉพาะจุดเล็ก ๆ ที่ AntD ทำได้ไม่สะดวก

### Ant Design ต้องใช้ก่อนสำหรับ

* Layout
* Card
* Button
* Form
* Input
* Modal
* Drawer
* Table
* Flex
* Space
* Row
* Col
* Typography

### ใช้ Tailwind ได้เฉพาะกรณีนี้

* ปรับ width เฉพาะจุด
* `min-w-0`
* `max-w-[...]`
* custom shadow เฉพาะจุด
* สีเฉพาะจุดที่ไม่มีใน token
* responsive detail ที่ AntD ทำไม่สะดวก

### ห้ามทำ

* ห้ามสร้าง layout ซ้ำกับ AntD ด้วย Tailwind
* ห้ามใช้ Tailwind class ยาว ๆ แทน `Flex`, `Space`, `Row`, `Col`
* ห้าม override AntD ซ้ำ ๆ ในแต่ละ component
* ถ้า style ซ้ำหลายจุด ให้ย้ายไป theme token

### Theme Rules

* ตั้งค่าสี, radius, font, control height, padding หลักใน `theme.ts`
* ใช้ `ConfigProvider` เป็นตัวคุมหน้าตารวม
* หลีกเลี่ยง style กระจัดกระจายในแต่ละหน้า

---

## 7. Responsive Rules

เว็บต้องใช้ได้ดีทั้งมือถือและ PC

### ใช้ AntD ก่อน

* `Row`
* `Col`
* responsive props เช่น `xs`, `sm`, `md`, `lg`, `xl`
* `Grid.useBreakpoint()` ผ่าน HOC เท่านั้น

* `withBreakpoint` is the default path for responsive behavior that changes layout structure, shell visibility, or mobile/desktop rendering
* `Grid.useBreakpoint()` must only appear inside the shared `apps/web/src/hoc/withBreakpoint.tsx` wrapper
* CSS media queries are allowed only for small visual tweaks, spacing, or decorative adjustments, not for deciding whether a layout component renders

### Layout Shell Rule

* `apps/web/src/ui/layout/` components must treat responsive shell behavior as a `withBreakpoint` concern
* `FloatingTopNav`, `MobileBottomNav`, `PageContainer`, and similar shell components must receive breakpoint state through `withBreakpoint` when responsive logic is needed
* Do not duplicate top-nav / bottom-nav switching, shell visibility, or structural responsive logic in `styles.css`
* Bad: `@media (max-width: ...) { display: none; }` for deciding whether the top nav or bottom nav exists
* Good: `withBreakpoint(Component)` plus conditional render based on `screens`

### ต้องระวัง

* ห้ามเกิด horizontal scroll
* app shell ต้องใช้ความสูงเต็มจอ
* card ต้องอ่านง่ายบนมือถือ
* ปุ่มต้องใหญ่พอสำหรับผู้สูงอายุ
* ตัวอักษรต้องอ่านง่าย

---

## 8. Frontend Routing Rules

ใช้ React Router v7 เท่านั้น

* ใช้ `createBrowserRouter`
* import router APIs จาก `react-router`
* รวม route ทั้งหมดไว้ที่ `apps/web/src/router/index.tsx`
* ห้ามกระจาย route ไปตาม feature
* ใช้ object-based route config
* ห้ามใช้ `<Routes>` / `<Route>` JSX ใน `main.tsx`
* mount router ด้วย `<RouterProvider router={router} />`

### Route Guard

* ใช้ loader functions เป็น guard
* ห้ามใช้ HOC สำหรับ auth guard
* ห้าม redirect ด้วย `window.location`
* redirect path ต้องเก็บเป็น enum หรือ constant กลาง

---

## 9. Frontend Folder Structure

ใช้ feature-based structure

```txt
apps/web/src/
  main.tsx
  config.ts
  router/
    index.tsx
    middleware.ts
  layouts/
    login.tsx
    main.tsx
  configs/
    theme.ts
  hoc/
    withForm.tsx
    withRouter.tsx
    withBreakpoint.tsx
  modules/
    auth/
      api.ts
      components/
      styles/
      types/
      pages/
        index.tsx
    dashboard/
      api.ts
      components/
      styles/
      types/
      pages/
        index.tsx
    vault/
      api.ts
      components/
      styles/
      types/
      pages/
        index.tsx
        detail.tsx
  ui/
    components/
  utils/
```

### Module Rules

แต่ละ feature ต้องอยู่ใน:

```txt
apps/web/src/modules/[feature]/
```

ภายใน feature ให้มี:

```txt
api.ts
components/
styles/
types/
pages/
```

ห้ามสร้าง shared components ถ้ายังใช้แค่ feature เดียว
shared UI ใช้เฉพาะของที่ถูกใช้ซ้ำหลาย feature จริง ๆ

---

## 10. Import Rules

* ใช้ alias `@/*` สำหรับ import จาก `apps/web/src`
* ห้ามใช้ deep relative path เช่น `../../../utils`
* relative import ใช้ได้เฉพาะไฟล์ใกล้กันใน module เดียว
* ต้อง config alias ทั้งใน `vite.config.ts` และ `tsconfig.json`

ตัวอย่างที่ถูก:

```ts
import { formatDate } from "@/utils/date";
import { VaultCard } from "./components/VaultCard";
```

ตัวอย่างที่ห้าม:

```ts
import { formatDate } from "../../../utils/date";
```

---

## 11. Frontend API Rules

Frontend ต้องคุยกับ backend ผ่าน Hono RPC client

* ใช้ `hc<AppType>()`
* ห้ามเขียน fetch wrapper เองซ้ำ ๆ
* สร้าง shared client ที่ `apps/web/src/utils/api.ts`
* แต่ละ feature มี `api.ts` ของตัวเอง
* pages/components ห้ามเรียก shared client ตรง ๆ
* pages/components ต้องเรียกผ่าน feature-local `api.ts`

โครงที่ต้องการ:

```txt
apps/web/src/utils/api.ts
apps/web/src/modules/[feature]/api.ts
```

---

## 12. Backend Philosophy

เจ้าของโปรเจคไม่มีพื้นฐาน backend มากนัก
ดังนั้น backend ต้องง่าย ชัดเจน และอธิบายได้

* ห้าม over-engineer
* ห้ามเพิ่ม infra เกินจำเป็น
* ห้ามเพิ่ม service ที่ต้องดูแลเองถ้าไม่จำเป็น
* ใช้ managed service ก่อน
* เขียนโค้ดตรงไปตรงมา
* แยกไฟล์ตามหน้าที่ให้ชัด

---

## 13. Backend Folder Structure

แต่ละ backend feature ใช้โครงนี้:

```txt
apps/api/src/modules/[feature]/
  routes.ts
  schema.ts
  service.ts
  repository.ts
  types.ts
```

ความหมาย:

* `routes.ts` = Hono endpoints เท่านั้น
* `schema.ts` = Zod validation
* `service.ts` = business logic
* `repository.ts` = Drizzle database queries
* `types.ts` = shared feature types ถ้าจำเป็น

ห้ามใส่ database query จำนวนมากไว้ใน route handler

---

## 14. API Rules

ทุก API endpoint ต้องทำสิ่งนี้:

1. Validate input ด้วย Zod
2. ตรวจ auth ถ้า endpoint นั้นต้อง login
3. เข้าถึงเฉพาะข้อมูลของ user ปัจจุบัน
4. return JSON ที่เรียบง่าย
5. ไม่มี hidden side effects
6. error message ต้องเข้าใจง่าย

---

## 15. Database Rules

ใช้ Drizzle ORM เท่านั้น
ใช้ `drizzle-kit` สำหรับ migrations

ทุกตารางที่เป็นข้อมูลของ user ต้องมี:

* `id`
* `userId`
* `createdAt`
* `updatedAt` ถ้าจำเป็น

ห้ามสร้าง table ซับซ้อนก่อนจำเป็น

MVP เริ่มจาก domain เหล่านี้:

* auth/user
* dashboard
* vault
* finance
* reminders
* tasks

---

## 16. Auth Rules

ใช้ Better Auth เท่านั้น

MVP ให้ auth เรียบง่ายก่อน
Line Login และ phone OTP เป็น product goal แต่ทำหลังจาก basic auth foundation เสถียรแล้ว

ห้ามสร้าง custom auth system เองตั้งแต่ศูนย์

---

## 17. File Storage Rules

ใช้ Cloudflare R2 เฉพาะตอนทำ Digital Vault file upload

ถ้ายังไม่ได้ทำ vault upload ห้าม setup R2 ก่อน

สำหรับไฟล์สำคัญ:

* เก็บ metadata ใน PostgreSQL
* เก็บไฟล์จริงใน R2
* ทุกไฟล์ต้องผูกกับ `userId`
* ห้าม expose raw storage path ตรง ๆ
* ต้องใช้ signed URL หรือ controlled download endpoint

---

## 18. Security Rules

ข้อมูลสำคัญต้องระวังเป็นพิเศษ

สำหรับ Vault:

* ข้อมูลอ่อนไหวต้องมี PIN/verification ชั้นที่สองในอนาคต
* ข้อมูลลับต้องเข้ารหัสก่อนเก็บเมื่อ implement จริง
* ห้ามเก็บ secret เป็น plain text
* validate request body, params, query ด้วย Zod ทุกครั้ง
* user ต้องเห็นและควบคุมข้อมูลตัวเองได้

---

## 19. MVP Feature Scope

MVP มี 4 module หลัก:

### 1. Digital Vault

* เก็บเอกสารสำคัญ
* เก็บ metadata ของเอกสาร
* ตั้งวันหมดอายุ
* เตือนล่วงหน้า
* PIN ชั้นที่สองสำหรับข้อมูลอ่อนไหวในอนาคต

### 2. Finance Tracker

* รายรับ
* รายจ่าย
* subscription รายเดือน/รายปี
* เตือนก่อนตัดเงิน
* สรุปยอดแบบง่าย

### 3. Schedule & Reminder

* นัดหมาย
* วันเกิด
* วันสำคัญ
* ตั้งเตือนตามวันเวลา

### 4. Task Management

* todo list
* mark done
* priority ที่ผู้ใช้เลือกเอง

---

## 20. Dashboard Rules

Dashboard ต้องแสดงเฉพาะสิ่งที่สำคัญและเข้าใจง่าย เช่น

* นัดวันนี้
* งานค้าง
* บิลใกล้ตัด
* เอกสารใกล้หมดอายุ
* รายการเตือนล่าสุด

ห้ามทำ dashboard ซับซ้อนแบบ enterprise

---

## 21. Search Rules

Search ควรเป็น global search ในอนาคต

MVP แรกอาจเริ่มจาก search ภายในแต่ละ module ก่อน
อย่าทำ search engine ซับซ้อนตั้งแต่แรก

---

## 22. Notification Rules

MVP ให้เริ่มจาก in-app reminder ก่อน

Line OA หรือ Push Notification ทำทีหลังเมื่อระบบหลักนิ่งแล้ว

ห้ามเริ่มจากระบบ notification ซับซ้อน

---

## 23. Progress Tracking Rules

ก่อนเริ่มทุก task ต้องอ่านไฟล์เหล่านี้:

1. `PROJECT.md`
2. `MVP.md`
3. `TECH_STACK.md`
4. `ARCHITECTURE.md`
5. `ROADMAP.md`
6. `PROGRESS.md`
7. `DECISIONS.md`

ก่อนเขียนโค้ด ต้องสรุป:

* ตอนนี้โปรเจคอยู่สถานะไหน
* task ถัดไปคืออะไร
* จะสร้าง/แก้ไฟล์ไหน
* อะไรอยู่นอก scope

ก่อนจบ task ต้องอัปเดต:

* `PROGRESS.md`
* `ROADMAP.md`
* `DECISIONS.md` ถ้ามีการตัดสินใจใหม่

---

## 24. Task Rules for Codex

หนึ่ง task ต้องมีเป้าหมายเดียวเท่านั้น

ตัวอย่างที่ถูก:

* สร้าง app scaffold
* เพิ่ม database schema
* เพิ่ม auth foundation
* เพิ่ม dashboard shell
* เพิ่ม task module
* เพิ่ม vault metadata module

ตัวอย่างที่ห้าม:

* ทำทั้งแอปให้เสร็จ
* ทำ auth + dashboard + database + deploy พร้อมกัน
* refactor ทั้งโปรเจคโดยไม่มีขอบเขต
* เพิ่ม package ใหม่โดยไม่อธิบายเหตุผล

---

## 25. Finish Checklist

ก่อนจบทุก task ต้องทำ:

```txt
bun run typecheck
bun run lint
bun run build
```

ถ้า command fail ต้องแก้ก่อนสรุปงาน

ตอนสรุปงาน ต้องบอก:

1. ทำอะไรไป
2. แก้ไฟล์ไหนบ้าง
3. รัน command อะไร
4. ผลลัพธ์ command เป็นอย่างไร
5. มี known issues อะไร
6. task ถัดไปที่แนะนำคืออะไร

---

## 26. Dependency Rules

ห้ามเพิ่ม package ใหม่ถ้าไม่จำเป็น

ถ้าจำเป็นต้องเพิ่ม ต้องอธิบาย:

* package คืออะไร
* ใช้ทำอะไร
* ทำไมของเดิมไม่พอ
* มีผลต่อ bundle/backend complexity ยังไง

---

## 27. Final Principle

ทำให้เล็กก่อน
ทำให้ใช้ได้จริงก่อน
ทำให้เข้าใจง่ายก่อน
ค่อยขยายทีหลัง

ห้ามสร้างระบบใหญ่เกินกว่าที่ MVP ต้องใช้

## AntD Visual Enhancement Rules

Ant Design เป็น UI system หลักของโปรเจค

อนุญาตให้ตกแต่ง AntD components ให้สวยขึ้นด้วย:
- glassmorphism
- gradient background
- soft shadow
- subtle glow
- smooth transition
- lightweight motion
- page/card entrance animation

ให้ใช้วิธีนี้ก่อนนำ external UI library เข้ามา

### Allowed

ใช้ AntD component เป็นฐาน แล้วห่อด้วย visual wrapper เช่น:

- GlassCard
- MotionCard
- GradientBackground
- PageContainer
- GlowOrb
- LoginVisualShell

### Folder

เก็บ visual enhancement components ไว้ที่:

apps/web/src/ui/effects/

เก็บ layout visual shell ไว้ที่:

apps/web/src/ui/layout/

### Motion

ถ้าต้องใช้ animation ให้ใช้ `framer-motion` เท่านั้นใน MVP

ใช้ motion ได้กับ:
- card hover
- page entrance
- login panel entrance
- dashboard card entrance
- empty state animation

ห้ามใช้ animation หนักเกินไป หรือ animation ที่รบกวนผู้สูงอายุ

### CSS Rules

ห้าม override `.ant-*` โดยตรงแบบ global

ห้ามเขียน:

.ant-card { ... }
.ant-btn { ... }

ให้ใช้ class เฉพาะของโปรเจคแทน เช่น:

.sabai-glass-card
.sabai-page-bg
.sabai-motion-card

ถ้า style ใช้ซ้ำหลายที่ ให้ทำเป็น shared component ไม่ copy CSS ซ้ำ

### Priority

ลำดับการตกแต่ง UI:

1. AntD theme token
2. AntD component props
3. project visual wrapper
4. feature-local CSS
5. external UI component เป็นตัวเลือกสุดท้าย

### Final Rule

ทำให้ AntD สวยขึ้นก่อน
อย่ารีบเอา component ข้างนอกมาปน ถ้า AntD + visual wrapper ทำได้
