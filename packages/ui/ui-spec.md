# Weblynk UI Component Specification

## Overview
Design system for tourism platform with luxury aesthetic and accessibility focus.

## Button
**Purpose**: Interactive elements for user actions

**Props**:
- `variant`: 'primary' | 'secondary' | 'ghost'
- `size`: 'sm' | 'md' | 'lg'
- `disabled`: boolean
- `onClick`: () => void

**Do**:
- Use primary for main CTAs
- Use secondary for alternative actions
- Keep button text concise (2-3 words)

**Don't**:
- Use as navigation (use Link instead)
- Override colors arbitrarily
- Disable without clear reason

**Accessibility**:
- Proper ARIA labels for screen readers
- Visible focus states
- Sufficient color contrast
- Keyboard navigation support

## Card
**Purpose**: Container for related content

**Props**:
- `elevation`: 'sm' | 'md' | 'lg'
- `padding`: 'sm' | 'md' | 'lg'
- `interactive`: boolean

**Do**:
- Group related content logically
- Use consistent internal spacing
- Maintain visual hierarchy
- Add hover states for interactive cards

**Don't**:
- Nest cards excessively
- Overcrowd with content
- Use for simple text blocks

**Accessibility**:
- Semantic HTML structure
- Proper heading hierarchy
- Screen reader announcements for interactive states

## Form Components
**Purpose**: Data input, selection, and validation

**Components**: Input, Select, Textarea, FormField, Checkbox, Radio

**Props**:
- `label`: string (required)
- `error`: string
- `required`: boolean
- `placeholder`: string
- `helperText`: string

**Do**:
- Provide clear labels
- Show validation states
- Use appropriate input types
- Group related fields

**Don't**:
- Rely on placeholder as label
- Hide validation until submit
- Use without proper labels

**Accessibility**:
- Label associations with `htmlFor`/`id`
- Error message announcements
- Required field indicators
- Keyboard navigation and focus management

## Table
**Purpose**: Display structured tabular data

**Props**:
- `columns`: Column[] (with key, header, render)
- `data`: any[]
- `sortable`: boolean
- `striped`: boolean

**Do**:
- Use for true tabular data only
- Provide sorting when helpful
- Keep headers clear and concise
- Use pagination for large datasets

**Don't**:
- Use for layout purposes
- Overload with too many columns
- Skip accessibility attributes

**Accessibility**:
- Proper table semantics (`<table>`, `<thead>`, `<tbody>`)
- Row and column header associations
- Screen reader captions and summaries
- Keyboard navigation for sortable columns

## Badge
**Purpose**: Status indicators, labels, and counters

**Props**:
- `variant`: 'default' | 'success' | 'warning' | 'error' | 'info'
- `size`: 'sm' | 'md'
- `pill`: boolean

**Do**:
- Use for status updates and labels
- Keep text very short (1-2 words)
- Choose appropriate color variants
- Use pill shape for counts

**Don't**:
- Use for important information
- Override semantic colors
- Make too large or prominent

**Accessibility**:
- Color not the only status indicator
- Proper contrast ratios
- Screen reader announcements for status changes
- ARIA labels for non-text badges

## Design Tokens Usage
All components use the centralized design tokens from `@weblynk/tokens`:

- **Colors**: Semantic aliases (--fg, --bg, --brand, etc.)
- **Spacing**: 4px increment scale (--space-1 to --space-8)
- **Typography**: Type scale (--type-xs to --type-4xl)
- **Border Radius**: Consistent radii (--radius-sm, --radius-md, --radius-lg)

## Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance
- Tree-shakeable components
- Lazy loading support
- Minimal bundle impact
