'use client';

import { useSelectedLayoutSegments, usePathname } from 'next/navigation';
import LayoutStructure from 'components/layout-structure';
import SegmentBreadcrumbs from 'components/segment-breadcrumbs';
import { RECORDS_MAP, findIdByPathname, SEGMENT_TITLES_MAP } from './[id]/data';

export default function Layout({ children }) {
  // `useSelectedLayoutSegments` returns segments starting from the layer below it's called.
  // so call useSelectedLayoutSegments at the layout layer that represents where
  // the segments should begin, not necessarily in the component that uses the segments (SegmentBreadcrumbs)
  // which may be rendered at the edge page (where only one segment pertains)
  const segments = useSelectedLayoutSegments();
  console.log(`segments`, segments);
  const pathname = usePathname();
  console.log(`pathname`, pathname);
  const id = findIdByPathname(pathname);
  const { background } = RECORDS_MAP[id];

  return (
    <LayoutStructure
      title={
        <SegmentBreadcrumbs
          segments={segments}
          segmentTitlesMap={SEGMENT_TITLES_MAP}
          startingSegment="/record"
        />
      }
      background={background}
    >
      <div className="flex flex-col items-center">
        {children}
      </div>
    </LayoutStructure>
  )
}
