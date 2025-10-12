# Theme System Documentation

The UI package includes 3 luxury color palettes: Gold, Rose, and Navy.

## Installation

Wrap your app with ThemeProvider and import the CSS.

## API

- ThemeProvider: Context provider component
- useTheme: Hook to access current theme and setter
- ThemeSwitcher: UI component with theme buttons
- ThemePreview: Component showing all color shades

## Theme Storage

Store tenant preferences as JSON:
{ "theme": "gold" }

## CSS Variables

Themes set --color-primary-50 through --color-primary-950 on document root.

## WCAG Compliance

All themes meet WCAG AA contrast standards.
