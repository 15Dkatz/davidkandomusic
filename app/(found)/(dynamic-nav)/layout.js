'use client';

import { useSelectedLayoutSegments, usePathname } from 'next/navigation';
import PageStructure from 'components/page-structure';
import NavTitle from './nav-title';
import { findIdByPathname, RECORDS_MAP, SEGMENT_TITLES_MAP } from './data';

export default function Layout({ children }) {
  const pathname = usePathname();
  const segments = useSelectedLayoutSegments();

  const id = findIdByPathname(pathname);

  const { title, background } = RECORDS_MAP[id];

  return (
    <PageStructure
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
    </PageStructure>
  )
}
