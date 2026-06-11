# MVP

## MVP Goal

Build a personal digital assistant that helps a Thai user manage important documents, money records, schedules, reminders, tasks, and simple search in one web app.

The MVP must be useful before it is complete or advanced.

## Included Modules

### 1. Digital Vault

- Save important document metadata.
- Support file upload only when this module reaches the upload task.
- Store file metadata in PostgreSQL.
- Store real files in Cloudflare R2 when upload is implemented.
- Link every record to the current user.
- Avoid exposing raw storage paths.

### 2. Finance Tracker

- Track income.
- Track expenses.
- Track monthly or yearly subscriptions.
- Show simple summaries.
- Support reminders before expected payment dates.

### 3. Schedule & Reminder

- Add appointments.
- Add birthdays.
- Add important dates.
- Set simple date and time reminders.

### 4. Task Management / งานที่ต้องทำ

- Create tasks that Thai users understand as `งานที่ต้องทำ`.
- Add, edit, delete, and mark tasks as done.
- Set simple priority.
- Filter pending, important, completed, and all tasks.
- Show pending tasks clearly.

### 5. Home

- Show only important, easy-to-understand information.
- Include today's appointments.
- Include pending tasks.
- Include upcoming bills.
- Include documents near expiry.
- Include recent reminders.

### 6. Simple Search

- Start with simple module-level search.
- Do not build a complex search engine in the MVP.
- Global search can be considered after core modules are stable.

### 7. Simple In-app Reminder

- Start with reminders shown inside the app.
- Do not add Line OA, push notification, queues, or scheduled worker complexity in the MVP.

## Out of Scope

- AI assistant features.
- Payments or subscriptions for users.
- Team or organization workspace.
- Complex admin tools.
- Heavy analytics.
- Complex notification infrastructure.
- Self-hosted infrastructure.

## MVP Success Criteria

- One user can log in and manage their own data.
- Core modules are easy to understand.
- The UI is readable on mobile and desktop.
- Backend code is clear for a beginner to follow.
- TypeScript, lint, and build checks pass once app code exists.
