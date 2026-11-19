import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { FormField } from './form-field';
const meta = { component: FormField, title: 'UI/FormField', tags: ['autodocs'] } satisfies Meta<
  typeof FormField
>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Name: Story = {
  args: { label: 'Имя', required: true },
  play: async ({ canvas, userEvent }) => {
    const input = canvas.getByLabelText('Имя');
    await expect(input).toBeInvalid();
    await userEvent.type(input, 'Анна');
    await expect(input).toBeValid();
  },
};
export const Message: Story = {
  args: { label: 'Сообщение (необязательно)', as: 'textarea', rows: 3 },
  play: async ({ canvas, userEvent }) => {
    const field = canvas.getByRole('textbox');
    await userEvent.type(field, 'Первая строка{Enter}Вторая строка');
    await expect(field).toHaveValue('Первая строка\nВторая строка');
  },
};
