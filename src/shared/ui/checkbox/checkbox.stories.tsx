import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { Checkbox } from './checkbox';

const meta = {
  component: Checkbox,
  title: 'UI/Checkbox',
  tags: ['autodocs'],
  args: { label: 'Согласен на обработку персональных данных', required: true },
} satisfies Meta<typeof Checkbox>;

export default meta;
export const Consent: StoryObj<typeof meta> = {
  play: async ({ canvas, userEvent }) => {
    const checkbox = canvas.getByRole('checkbox');
    await expect(checkbox).not.toBeChecked();
    await userEvent.click(canvas.getByText('Согласен на обработку персональных данных'));
    await expect(checkbox).toBeChecked();
  },
};
