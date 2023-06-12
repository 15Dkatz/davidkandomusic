'use client';

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import { SEGMENT_TITLES_MAP } from './data';

export const NAV_TITLE_ID = "nav-title";

export default function NavTitle({ id, title }) {
  const segments = useSelectedLayoutSegments();
  const activeSegment = useSelectedLayoutSegment();

  if (segments.length === 0) {
    return title;
  }

  return (
    <div className="link decoration-4" id={NAV_TITLE_ID}>
      <Link href={`/record/${id}`}>{title}</Link>
      {
        segments.map(segment => {
          const isActive = activeSegment === segment;

          return (
            <span key={segment}>
              <span>{' > '}</span>
              <Link
                href={`/record/${id}/${segment}`}
                style={{ color: isActive ? 'black' : '' }}
              >
                {SEGMENT_TITLES_MAP[segment]}
              </Link>
            </span>
          )
        })
      }
    </div>
  )
}