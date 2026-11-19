import type { ReactNode } from 'react';
type CardProps = {
  title: string;
  icon: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  tone?: 'matcha' | 'strawberry' | 'linen';
};
export function Card({ title, icon, children, footer, tone = 'matcha' }: CardProps) {
  return (
    <article className={'card card--' + tone}>
      {icon}
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </article>
  );
}
