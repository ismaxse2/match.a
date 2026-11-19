import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { expect } from 'storybook/test';

import { InquiryForm } from './inquiry-form';
const meta = { component: InquiryForm, title: 'Заявка/Форма' } satisfies Meta<typeof InquiryForm>;
export default meta;
type Story = StoryObj<typeof meta>;
export const LocalValidation: Story = {
  play: async ({ canvas, userEvent }) => {
    const submit = canvas.getByRole('button', { name: 'Отправить' });
    await userEvent.click(submit);
    await expect(canvas.getByLabelText('Имя')).toBeInvalid();
    await userEvent.type(canvas.getByLabelText('Имя'), 'Анна');
    await userEvent.type(canvas.getByLabelText('Бренд'), 'Тест');
    const contact = canvas.getByLabelText('Email или телефон');
    await userEvent.type(contact, 'abc');
    await expect(contact).toBeInvalid();
    await userEvent.clear(contact);
    await userEvent.type(contact, 'anna@example.com');
    await userEvent.click(submit);
    const consent = canvas.getByRole('checkbox', { name: /Согласен на передачу/ });
    await expect(consent).toBeInvalid();
    await expect(canvas.getByRole('status', { hidden: true })).toBeEmptyDOMElement();
    await expect(canvas.getByRole('link', { name: 'политику конфиденциальности' })).toHaveAttribute(
      'href',
      '/legal',
    );
    await userEvent.click(consent);
    await userEvent.click(submit);
    await expect(canvas.getByRole('status')).toHaveTextContent('Форма ещё не подключена');
  },
};
