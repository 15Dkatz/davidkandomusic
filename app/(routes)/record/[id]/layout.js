'use client';

import { useSelectedLayoutSegment, useSelectedLayoutSegments } from 'next/navigation';
import Link from 'next/link';
import PageStructure from '../../page-structure';
import { RECORDS, RECORDS_MAP, SEGMENT_TITLES_MAP } from './data';

function NavTitle({ id, title, segments, activeSegment }) {
  console.log(`activeSegment`, activeSegment);

  if (segments.length === 0) {
    return title;
  }

  return (
    <div className="link underline-offset-1 decoration-4">
      <Link href={`/record/${id}`}>{title}</Link>
      {
        segments.map(segment => {
          const isActive = activeSegment === segment;

          console.log(`segment`, segment);
          console.log(`isActive`, isActive);

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

// TODO: Is there a helper function to generate the hrefs?
export default function Record({ params, children }) {
  const segments = useSelectedLayoutSegments();
  const activeSegment = useSelectedLayoutSegment();

  console.log(`segments`, segments);

  const { id } = params;
  const { title, pageBackground } = RECORDS_MAP[id];

  return (
    <PageStructure
      background={pageBackground}
      title={
        <NavTitle
          id={id}
          title={title}
          segments={segments}
          activeSegment={activeSegment}
        />
      }
    >
      {children}
    </PageStructure>
  )
}

// IMPORTANT: send non-generated pages in record/?
export const dynamicParams = false;

export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}