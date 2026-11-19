import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect, waitFor } from 'storybook/test';

import { Header } from './hero';
const meta = {
  component: Header,
  title: 'Лендинг/Шапка',
  globals: { viewport: { value: 'mobile1' } },
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof Header>;
export default meta;
export const Mobile: StoryObj<typeof meta> = {
  play: async ({ canvas, userEvent }) => {
    const trigger = canvas.getByRole('button', { name: 'Открыть меню' });
    await userEvent.click(trigger);
    await waitFor(() =>
      expect(canvas.getByRole('navigation', { name: 'Мобильная навигация' })).toBeVisible(),
    );
    await userEvent.tab();
    await userEvent.keyboard('{Escape}');
    await expect(trigger).toHaveFocus();
    await expect(trigger).toHaveAttribute('aria-expanded', 'false');
  },
};
