'use client';

import { useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import { SEGMENT_TITLES_MAP } from './segment-data-map';

export const NAV_TITLE_ID = "nav-title";

export default function NavTitle({ title, skipInitial }) {
  const segments = useSelectedLayoutSegments();
  // console.log(`segments`, segments);

  if (segments.length === 0) {
    return title;
  }

  const segmentsToRender = skipInitial && segments.length > 0
    ? segments.slice(1, segments.length)
    : segments;
  // console.log(`segmentsToRender`, segmentsToRender);

  return (
    <div className="link decoration-4" id={NAV_TITLE_ID}>
      {
        segmentsToRender.map((segment, i) => {
          const href = segments.slice(0, skipInitial ? i+2 : i+1).join('/');
          const isLastSegment = i === segmentsToRender.length - 1;
          console.log(`href`, href);

          return (
            <span key={segment}>
              <Link
                href={href}
                style={{ color: isLastSegment ? 'black' : '' }}
              >
                {SEGMENT_TITLES_MAP[segment]}
              </Link>
              {isLastSegment ? <></> : <span>{' > '}</span>}
            </span>
          )
        })
      }
    </div>
  )
}