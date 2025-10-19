import type { Meta, StoryObj } from '@storybook/react'
import { FormField } from './FormField'
import { Input } from './Input'

const meta: Meta<typeof FormField> = { title: 'Core/FormField', component: FormField }
export default meta
type Story = StoryObj<typeof FormField>

export const WithInput: Story = {
  args: { label: 'Email', children: <Input placeholder='you@example.com' /> }
}
