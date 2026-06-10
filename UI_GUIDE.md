# Sabai UI Guide

## Visual Direction

Sabai uses a calm glassmorphism style that feels modern, clean, soft, and easy to read for Thai users of many ages.

The UI should feel:

- Calm and premium.
- Friendly for older users.
- Clear before decorative.
- Soft green, mint, and emerald.
- Lightly glassy, never transparent enough to reduce readability.

## Core Tokens

- Primary color: soft emerald.
- Background: light mint green gradient.
- Card surface: translucent white and green.
- Border: translucent white or mint.
- Shadow: soft green shadow.
- Radius: large and friendly.
- Font size: readable by default.
- Button height: large enough for comfortable tapping.

## Component Rules

- Ant Design remains the primary UI system.
- Use Ant Design tokens first.
- Use shared Sabai wrappers for visual polish:
  - `PageContainer`
  - `GlassCard`
  - `MotionCard`
  - `GradientBackground`
  - `GlowOrb`
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
