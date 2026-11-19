import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Flower2 } from 'lucide-react';

import { Card } from './card';
const meta = {
  component: Card,
  title: 'UI/Card',
  tags: ['autodocs'],
  args: {
    tone: 'matcha',
    title: 'Бренды',
    icon: <Flower2 aria-hidden size={35} strokeWidth={1.2} />,
    children: 'БАДы и витамины, косметика, функциональное питание.',
    footer: (
      <>
        <b>Что вы получаете</b>
        <p>Партнёрства, коллаборации, амбассадоров, UGC, PR.</p>
      </>
    ),
  },
  argTypes: {
    tone: { control: 'radio', options: ['matcha', 'strawberry', 'linen'] },
    icon: { control: false },
    footer: { control: false },
  },
} satisfies Meta<typeof Card>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Audience: Story = {};
