'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams, notFound } from 'next/navigation';
import Spinner from 'components/spinner';

import {
  RESULT_MAP,
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  CONCLUSION_PART_3,
  getQuizResult
} from '../data';

function Loading() {
  return (
    <div className="w-[326px] lg:w-[904px] h-[352px] bg-slate-300 rounded flex justify-center items-center">
      <Spinner />
    </div>
  )
}

export default function Page() {
  const resultRef = useRef();
  const searchParams = useSearchParams();
  const queryString = searchParams.toString();
  const selections = queryString.split('&').map(s => s.split('=')[1]);
  const selectionMap = {};

  selections.forEach(selection => {
    selectionMap[selection] = selectionMap[selection] ? selectionMap[selection]+1 : 1;
  });

  const resultData = RESULT_MAP[getQuizResult({ selectionMap })];

  if (!resultData) notFound();

  useEffect(() => {
    if (resultRef.current) resultRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [resultRef]);

  return (
    <div ref={resultRef}>
      {CONCLUSION_PART_1}
      {resultData.blurb}
      {CONCLUSION_PART_2}
      <br />
      <div className="w-[326px] lg:w-[904px] h-[352px]">
        <Suspense fallback={<Loading />}>
          <resultData.Embed />
        </Suspense>
      </div>
      <br />
      <div className="text-center">
        <a
          href={resultData.playlistLink}
          target="_blank"
          className="link"
        >
          Save this playlist
        </a>
      </div>
      <br />
      {CONCLUSION_PART_3}
    </div>
  )
}
