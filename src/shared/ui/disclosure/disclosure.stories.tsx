import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { Disclosure } from './disclosure';
const meta = {
  component: Disclosure,
  title: 'UI/Disclosure',
  tags: ['autodocs'],
  args: {
    title: 'MATCH.A AUDIT',
    summary: 'Понимание, с кем и как взаимодействовать.',
    children: 'Анализируем ваш бренд, аудиторию, конкурентов и существующие коллаборации на рынке.',
  },
} satisfies Meta<typeof Disclosure>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Toggle: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const content = canvas.getByText(String(args.children));
    const trigger = canvas.getByText(args.summary).closest('summary');
    if (!trigger) {
      throw new Error('У строки отсутствует summary');
    }
    await userEvent.click(trigger);
    await expect(content).toBeVisible();
    await userEvent.click(trigger);
    await expect(content).not.toBeVisible();
  },
};
