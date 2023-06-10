'use client';

import { useRef, useEffect } from 'react';
import { RECORDS, RECORDS_MAP } from '../data';
import Player from '../player';

export default function Record({ params: { id, content } }) {
  const scrollRef = useRef();
  const { Embed } = RECORDS_MAP[id];
  const contentJsx = RECORDS_MAP[id][content];

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [scrollRef])

  return (
    <>
      <span ref={scrollRef} />
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
