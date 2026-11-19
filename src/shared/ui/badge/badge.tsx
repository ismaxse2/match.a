import type { ReactNode } from 'react';
type BadgeProps = {
  variant: 'sticker' | 'seal';
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};
export function Badge({ variant, icon, className = '', children }: BadgeProps) {
  return (
    <span className={variant + ' ' + className}>
      {icon}
      {children}
    </span>
  );
}
