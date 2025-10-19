import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge.js'

const meta: Meta<typeof Badge> = { title: 'Core/Badge', component: Badge }
export default meta
type Story = StoryObj<typeof Badge>

export const Info: Story = { args: { children: 'Info' } }
