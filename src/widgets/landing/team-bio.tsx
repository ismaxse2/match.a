'use client';

import { useId, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export function TeamBio({ name, bio }: { name: string; bio: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="team-details">
      <button
        type="button"
        aria-label={`Подробнее — ${name}`}
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen(!open)}
      >
        Подробнее <ChevronDown size={16} aria-hidden />
      </button>
      <div className="team-bio" id={id} data-open={open} inert={!open}>
        <div className="team-bio-inner">
          <p>{bio}</p>
        </div>
      </div>
    </div>
  );
}
