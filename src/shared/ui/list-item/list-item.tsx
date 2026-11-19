import type { ReactNode } from 'react';
export function ListItem({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: ReactNode;
}) {
  return (
    <li className="list-item">
      {icon}
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </li>
  );
}
