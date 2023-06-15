'use client';

import { useRef, useEffect, useState } from 'react';
import { notFound } from 'next/navigation';
import { useScrollIntoView } from 'app/hooks';
import { RECORDS, RECORDS_MAP } from '../../../data';
import Player from '../player';
import { NAV_TITLE_ID } from '../../../data';

export default function Content({ params: { id, content } }) {
  const [titleElement, setTitleElement] = useState(null);
  const startingRef = useRef();
  const contentJsx = RECORDS_MAP[id][content];

  useScrollIntoView(titleElement);

  useEffect(() => {
    const foundTitleElement = document.getElementById(NAV_TITLE_ID);

    if (foundTitleElement) setTitleElement(foundTitleElement);
  }, [startingRef]);

  // 404 on invalid content pathnames, such as /record/poison-worms/foo, where foo does not exist
  if (!contentJsx) return notFound();

  const { Embed } = RECORDS_MAP[id];

  return (
    <>
      <span ref={startingRef} />
      <Player embed={<Embed />} />
      <div className="mt-4"></div>
      {contentJsx}
    </>
  )
}

// emulates a database-fetching scenario. However, here the data is hardcoded
export async function generateStaticParams() {
  return RECORDS.map(({ id, content }) => ({ id, content }));
}
