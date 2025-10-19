import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card.js'

const meta: Meta<typeof Card> = { title: 'Core/Card', component: Card }
export default meta
type Story = StoryObj<typeof Card>

export const Basic: Story = { args: { children: 'Card content' } }
