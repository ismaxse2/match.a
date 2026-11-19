import type { Meta, StoryObj } from '@storybook/nextjs-vite';

import { Logo } from './logo';
const meta = {
  component: Logo,
  title: 'UI/Logo',
  tags: ['autodocs'],
  args: { variant: 'compact' },
  argTypes: { variant: { control: 'radio', options: ['compact', 'display'] } },
} satisfies Meta<typeof Logo>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
