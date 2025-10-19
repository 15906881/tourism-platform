import type { Meta, StoryObj } from '@storybook/react'
import { DataTable } from './DataTable.js'

const meta: Meta<typeof DataTable> = { title: 'Core/DataTable', component: DataTable }
export default meta
type Story = StoryObj<typeof DataTable>

const rows = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
const columns = [{ key: 'id', header: 'ID' }, { key: 'name', header: 'Name' }]

export const Basic: Story = { args: { rows, columns } }
