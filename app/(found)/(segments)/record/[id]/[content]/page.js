'use client';

import { useRef, useEffect, useState } from 'react';
import { useScrollIntoView } from 'app/hooks';
import { RECORDS, RECORDS_MAP } from '../data';
import Player from '../player';
import { NAV_TITLE_ID } from '../nav-title';

export default function Record({ params: { id, content } }) {
  const [titleElement, setTitleElement] = useState(null);
  const startingRef = useRef();
  const { Embed } = RECORDS_MAP[id];
  const contentJsx = RECORDS_MAP[id][content];
  useScrollIntoView(titleElement);

  useEffect(() => {
    const foundTitleElement = document.getElementById(NAV_TITLE_ID);

    if (foundTitleElement) setTitleElement(foundTitleElement);
  }, [startingRef]);

  return (
    <>
      <span ref={startingRef} />
      <Player embed={<Embed />} />
      <br />
      {contentJsx}
    </>
  )
}

// emulates a database-fetching scenario. However, here the data is hardcoded
export async function generateStaticParams() {
  return RECORDS.map(({ id, content }) => ({ id, content }));
}
