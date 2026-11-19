import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Asterisk } from 'lucide-react';

import { ListItem } from './list-item';
const meta = {
  component: ListItem,
  title: 'UI/ListItem',
  tags: ['autodocs'],
  args: {
    title: 'Узкая специализация.',
    description: 'Работаем только с wellness-рынком и глубоко понимаем его специфику.',
    icon: <Asterisk aria-hidden />,
  },
  decorators: [
    (Story) => (
      <ul className="reasons">
        <Story />
      </ul>
    ),
  ],
} satisfies Meta<typeof ListItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Reason: Story = {};
