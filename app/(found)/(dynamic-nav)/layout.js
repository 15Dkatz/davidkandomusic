'use client';

import { useSelectedLayoutSegments, usePathname } from 'next/navigation';
import LayoutStructure from 'components/layout-structure';
import NavTitle from './nav-title';
import { findIdByPathname, RECORDS_MAP, SEGMENT_TITLES_MAP } from './data';

export default function Layout({ children }) {
  const pathname = usePathname();
  // returns segments on the whole url, starting from the layer that this is called.
  // so call useSelectedLayoutSegments at the layout layer that represents where
  // the segments should begin, not necessarily in the component that uses the segments (NavTitle)
  // which may be rendered at the edge page (where only one segment pertains)
  const segments = useSelectedLayoutSegments();

  const id = findIdByPathname(pathname);

  const { title, background } = RECORDS_MAP[id];

  return (
    <LayoutStructure
      title={
        <NavTitle
          skipInitial
          initialTitle={title}
          segments={segments}
          segmentTitlesMap={SEGMENT_TITLES_MAP}
        />
      }
      background={background}
    >
      {children}
    </LayoutStructure>
  )
}
