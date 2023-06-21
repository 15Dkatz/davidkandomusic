'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import Spinner from 'components/spinner';
// useSearchParams is a next.js hook used to gather the url information in the query string.
// useSearchParams makes you think its should be reserved for a search component, idiomatically.
// however, query params are also applied for other use cases like form submission (the case here)
// so it's ok to think of useSearchParams as useQueryParams
import { useSearchParams as useQueryParams, notFound } from 'next/navigation';

import {
  RESULT_MAP,
  VALID_SELECTIONS,
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  CONCLUSION_PART_3,
  getQuizResult
} from '../data';

function Loading() {
  return (
    <div className="w-[326px] lg:w-[904px] h-[352px] bg-slate-100 rounded flex justify-center items-center">
      <Spinner />
    </div>
  )
}

function Result({ resultData }) {
  const resultRef = useRef();

  useEffect(() => {
    if (resultRef.current) resultRef.current.scrollIntoView({ behavior: 'smooth' });
  }, [resultRef]);

  return (
    <div ref={resultRef}>
      <div>
        {CONCLUSION_PART_1}
      </div>
      <div className="font-bold">
        <div>
          &quot;&quot;&quot;
        </div>
        <div>
          {resultData ? resultData.blurb : ''} {CONCLUSION_PART_2}
        </div>
        <div>
          &quot;&quot;&quot;
        </div>
      </div>
      <br />
      {
        resultData ? (
          <>
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
          </>
        ) : (
          <></>
        )
      }
      <div>
        {CONCLUSION_PART_3}
      </div>
    </div>
  )
}

export default function Page() {
  const [resultData, setResultData] = useState(null);
  const queryParams = useQueryParams();
  const params = queryParams.toString();

  useEffect(() => {
    // split params by &, and grab the values after the = sign
    const gatheredSelections = params.split('&').map(param => param.match(/=(.*)/)[1]);

    if (!gatheredSelections.every(selection => VALID_SELECTIONS.includes(selection))) {
      notFound();
    } else {
      const selectionMap = {};

      gatheredSelections.forEach(selection => {
        if (!selectionMap[selection]) {
          selectionMap[selection] = 1;
        } else {
          selectionMap[selection] = selectionMap[selection]+1;
        }
      });

      const resultData = RESULT_MAP[getQuizResult({ selectionMap })];

      if (resultData) {
        setResultData(RESULT_MAP[getQuizResult({ selectionMap })]);
      }
    }
  }, [params, setResultData]);

  return <Result resultData={resultData} />;
}
