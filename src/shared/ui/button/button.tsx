import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps, HTMLAttributes, ReactElement } from 'react';
type ButtonProps = { variant?: 'primary' | 'outline'; size?: 'default' | 'compact' } & (
  | ({ asChild?: false } & ComponentProps<'button'>)
  | ({ asChild: true; children: ReactElement } & HTMLAttributes<HTMLElement>)
);
export function Button({
  variant = 'primary',
  size = 'default',
  className = '',
  asChild,
  ...props
}: ButtonProps) {
  const classes = ['button', 'button--' + variant, 'button--' + size, className].join(' ');
  if (asChild) {
    return <Slot {...props} className={classes} />;
  }
  return <button type="button" {...props} className={classes} />;
}
