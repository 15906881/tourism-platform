import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button.js'

const meta: Meta<typeof Button> = {
  title: 'Core/Button',
  component: Button
}
export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = { args: { children: 'Click me' } }
export const Disabled: Story = { args: { children: 'Disabled', disabled: true } }
