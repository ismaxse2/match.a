'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

import { Button } from '@/shared/ui/button/button';
import { Checkbox } from '@/shared/ui/checkbox/checkbox';
import { FormField } from '@/shared/ui/form-field/form-field';

export function InquiryForm() {
  const [status, setStatus] = useState('');
  return (
    <form
      className="inquiry"
      onInput={() => setStatus('')}
      onSubmit={(event) => {
        event.preventDefault();
        setStatus('Форма ещё не подключена');
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField label="Имя" autoComplete="given-name" required pattern=".*\S.*" />
        <FormField label="Бренд" autoComplete="organization" required pattern=".*\S.*" />
      </div>
      <FormField
        label="Email или телефон"
        required
        autoCapitalize="none"
        onChange={(event) => {
          const field = event.currentTarget;
          const value = field.value.trim();
          const phone =
            /^\+?[\d\s()-]+$/.test(value) && /^\d{7,15}$/.test(value.replace(/\D/g, ''));
          field.setCustomValidity(
            !value || phone || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
              ? ''
              : 'Укажите email или номер телефона.',
          );
        }}
      />
      <FormField
        as="textarea"
        label={
          <>
            Сообщение <span>(необязательно)</span>
          </>
        }
        rows={3}
        className="inquiry-message"
        onInput={({ currentTarget }) => {
          if (!CSS.supports('field-sizing', 'content')) {
            currentTarget.style.height = 'auto';
            currentTarget.style.height = `${currentTarget.scrollHeight + 2}px`;
          }
        }}
      />
      <Checkbox
        name="privacyConsent"
        required
        label={
          <>
            Согласен на передачу и обработку персональных данных и принимаю{' '}
            <a className="inquiry-policy" href="/legal">
              политику конфиденциальности
            </a>
            .
          </>
        }
      />
      <Button type="submit">
        Отправить <ArrowUpRight />
      </Button>
      <p role="status">{status}</p>
    </form>
  );
}
