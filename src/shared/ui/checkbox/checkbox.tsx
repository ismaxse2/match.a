'use client';

import { type ComponentProps, type ReactNode, useId } from 'react';

type CheckboxProps = Omit<ComponentProps<'input'>, 'type' | 'children'> & {
  label: ReactNode;
  description?: ReactNode;
};

export function Checkbox({ id, label, description, ...props }: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const descriptionId = description ? `${inputId}-description` : undefined;
  const describedBy = [props['aria-describedby'], descriptionId].filter(Boolean).join(' ');

  return (
    <div className="checkbox">
      <input {...props} id={inputId} type="checkbox" aria-describedby={describedBy || undefined} />
      <div>
        <label htmlFor={inputId}>{label}</label>
        {description && <div id={descriptionId}>{description}</div>}
      </div>
    </div>
  );
}
