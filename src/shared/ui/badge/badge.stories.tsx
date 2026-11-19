import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Asterisk } from 'lucide-react';

import { Badge } from './badge';
const meta = {
  component: Badge,
  title: 'UI/Badge',
  tags: ['autodocs'],
  args: { variant: 'sticker', children: 'IT’S MATCH!', icon: <Asterisk aria-hidden /> },
  argTypes: {
    variant: { control: 'radio', options: ['sticker', 'seal'] },
    icon: { control: false },
  },
} satisfies Meta<typeof Badge>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Sticker: Story = {};
export const EveryTime: Story = {
  args: {
    children: (
      <span>
        Каждый раз —<br />
        MATCH!
      </span>
    ),
    className: 'sticker--reverse',
  },
};
