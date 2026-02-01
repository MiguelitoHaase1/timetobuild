# Visual Identity - Anthropic/Claude Inspired

**A warm, approachable design system inspired by Anthropic's visual identity. Light, friendly, and focused on clarity over complexity.**

## Design Philosophy

- **Warm, not cold**: Cream backgrounds instead of stark white or dark themes
- **Friendly, not corporate**: Organic elements, hand-drawn feel
- **Simple, not minimal**: Clear hierarchy without being sparse
- **Approachable, not intimidating**: This is for knowledge workers, not just developers

## Color Palette

### Primary Colors
- **Background Primary:** #FAF9F6 - Warm off-white/cream
- **Background Secondary:** #F0EFEB - Slightly darker cream for panels
- **Background Card:** #FFFFFF - Pure white for cards and elevated surfaces

### Text Colors
- **Text Primary:** #1A1A1A - Near-black for headings and body
- **Text Secondary:** #6B6B6B - Medium gray for supporting text
- **Text Muted:** #9B9B9B - Light gray for captions and hints

### Accent Colors
- **Coral (Primary Accent):** #D97757 - Anthropic's signature warm coral/terracotta
- **Coral Light:** rgba(217, 119, 87, 0.1) - For hover states and highlights
- **Sage:** #B8C4B8 - Soft green for secondary accents
- **Lavender:** #C5C1D6 - Soft purple for variety
- **Tan:** #D4C4B0 - Warm beige for backgrounds

### Border Colors
- **Border Light:** #E5E4E0 - Subtle borders
- **Border Medium:** #D1D0CC - More visible borders

## Typography

### Font Families
- **Headings:** 'Source Serif 4', Georgia, serif - Elegant, readable serif
- **Body/UI:** 'Inter', -apple-system, sans-serif - Clean, modern sans-serif
- **Code/Terminal:** 'SF Mono', 'Consolas', monospace

### Font Sizes
- **Display/H1:** 36px (serif, bold)
- **H2:** 24px (serif, semibold)
- **Body:** 17px (serif for content, sans for UI)
- **Small/UI:** 13px (sans-serif)
- **Caption:** 11-12px (sans-serif, uppercase for labels)

### Line Heights
- **Headings:** 1.2-1.3
- **Body text:** 1.7
- **UI elements:** 1.5-1.6

## Layout Principles

### Spacing
- **Base unit:** 4px
- **Small:** 8px
- **Medium:** 16px
- **Large:** 24px
- **XL:** 48px

### Border Radius
- **Small (buttons, inputs):** 8px
- **Medium (cards):** 12px
- **Large (panels):** 16px
- **Pills:** 20px

### Shadows
- Minimal use of shadows
- When used: `0 4px 12px rgba(0, 0, 0, 0.08)` for subtle elevation

## Component Patterns

### Buttons
- Solid coral (#D97757) for primary actions
- White background with light border for secondary
- Hover: darken primary, add coral border to secondary
- Border radius: 8px
- Padding: 10px 20px

### Cards
- White background
- 1px light border
- 16px border radius
- Subtle hover state (border color change or lift)

### Inputs
- White background
- Light border (#E5E4E0)
- 8px border radius
- Coral focus ring

### Chips/Tags
- Pill shape (20px radius)
- Light background default
- Coral background when active
- 1px border

## Iconography

### Style
- Simple, monoline icons
- Consistent stroke weight
- Avoid filled icons when possible
- Use text characters where appropriate (#, *, ~, >, @)

### Colors
- **Folders:** Coral accent
- **Files:** Text secondary
- **Markdown files:** Coral accent
- **Active states:** Coral

## Illustration Style

### Character (Octopus)
- Friendly, approachable
- Uses coral accent color
- Simple shapes, not overly detailed
- Expressive but not cartoonish

### General Illustrations
- Hand-drawn feel (like Anthropic's website)
- Organic, flowing lines
- Mix of filled and outlined elements
- Limited color palette (coral, black lines)

## Motion

### Transitions
- Duration: 150-200ms
- Easing: ease-out or ease-in-out
- Properties: opacity, transform, background-color, border-color

### Interactions
- Subtle hover lifts: `translateY(-1px)` or `translateY(-2px)`
- Scale on select: 1.02 maximum
- No jarring animations

## Terminal

### Colors
- Background: #1A1A1A (matches text-primary)
- Header: #2a2a2a
- Text: #e0e0e0
- Muted text: #a0a0a0
- Prompt/accent: Coral (#D97757)

### Window Chrome
- macOS-style dots (red, yellow, green)
- 12px top border radius
- Clean, minimal header

## Key Differences from VS Code Style

| Aspect | VS Code | This Design |
|--------|---------|-------------|
| Background | Dark (#1e1e1e) | Warm cream (#FAF9F6) |
| Accent | Blue | Coral (#D97757) |
| Typography | Monospace-heavy | Mixed serif/sans |
| Feel | Developer tool | Knowledge workspace |
| Borders | Sharp, visible | Soft, subtle |
| Icons | Technical | Friendly, organic |
