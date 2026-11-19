import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, within } from 'storybook/test';

import { Navigation } from './navigation';
const meta = {
  component: Navigation,
  title: 'UI/Navigation',
  tags: ['autodocs'],
  args: {
    'aria-label': 'Основная навигация',
    items: [
      { label: 'Продукты', href: '#products' },
      { label: 'Команда', href: '#team' },
      { label: 'Контакты', href: '#contacts' },
    ],
  },
} satisfies Meta<typeof Navigation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Header: Story = {
  play: async ({ canvas }) => {
    const nav = within(canvas.getByRole('navigation', { name: 'Основная навигация' }));
    await expect(nav.getByRole('link', { name: 'Команда' })).toHaveAttribute('href', '#team');
  },
};
