import type { ComponentProps, ReactNode } from 'react';
type FormFieldProps = { label: ReactNode } & (
  ({ as?: 'input' } & ComponentProps<'input'>) | ({ as: 'textarea' } & ComponentProps<'textarea'>)
);
export function FormField({ label, as, ...props }: FormFieldProps) {
  return (
    <label className="form-field">
      {label}
      {as === 'textarea' ? (
        <textarea {...(props as ComponentProps<'textarea'>)} />
      ) : (
        <input {...(props as ComponentProps<'input'>)} />
      )}
    </label>
  );
}
