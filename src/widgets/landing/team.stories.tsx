import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { Team } from './sections';

const meta = {
  component: Team,
  title: 'Лендинг/Команда',
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Team>;
export default meta;
export const Profiles: StoryObj<typeof meta> = {
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByLabelText('Подробнее — Лиза Занкевич');
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(trigger);
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  },
};
