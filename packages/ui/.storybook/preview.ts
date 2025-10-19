import type { Preview } from '@storybook/react'
// import '../src/styles/a11y.css' // uncomment if you want to load your CSS

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: { expanded: true },
  },
}
export default preview
