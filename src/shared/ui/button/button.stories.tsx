import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, fn } from 'storybook/test';

import { Button } from './button';
const meta = {
  component: Button,
  title: 'UI/Button',
  tags: ['autodocs'],
  args: { children: 'Отправить', variant: 'primary', size: 'default', onClick: fn() },
  argTypes: {
    variant: { control: 'radio', options: ['primary', 'outline'] },
    size: { control: 'radio', options: ['default', 'compact'] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Action: Story = {
  play: async ({ canvas, userEvent, args }) => {
    const button = canvas.getByRole('button');
    await expect(button).toHaveAttribute('type', 'button');
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
export const AsLink: Story = {
  args: {
    asChild: true,
    variant: 'outline',
    children: (
      <a href="#audit" onClick={(event) => event.preventDefault()}>
        Начать с аудита
      </a>
    ),
  },
  play: async ({ canvas, userEvent, args }) => {
    const link = canvas.getByRole('link', { name: 'Начать с аудита' });
    await expect(link).toHaveAttribute('href', '#audit');
    await userEvent.click(link);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  },
};
