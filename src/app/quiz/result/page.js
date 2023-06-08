'use client';

import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';

import {
  RESULT_MAP,
  VALID_SELECTIONS,
  CONCLUSION_PART_1,
  CONCLUSION_PART_2,
  CONCLUSION_PART_3,
  getQuizResult
} from '../data';

const Loading = () => (
  <div className="absolute w-[326px] md:w-[904px] h-[352px] rounded bg-slate-300 pt-[24px] pl-[24px]">
    <div className="w-[112px] h-[112px] md:w-[152px] md:h-[152px] rounded bg-slate-200 animate-pulse mb-[40px]" />
    <div className="md:w-[850px] md:h-[20px] md:mt-[15px] rounded bg-slate-200 animate-pulse" />
    <div className="md:w-[850px] md:h-[20px] md:mt-[15px] rounded bg-slate-200 animate-pulse" />
    <div className="md:w-[850px] md:h-[20px] md:mt-[15px] rounded bg-slate-200 animate-pulse" />
  </div>
);

function Result({ resultRef, resultData }) {

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
            <div className="relative w-[326px] md:w-[904px] h-[352px]">
              <div className="absolute w-[326px] md:w-[904px] h-[352px]">
                <Suspense fallback={<Loading />}>
                  <resultData.LazyEmbed />
                </Suspense>
              </div>
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

export default function QuizResult() {
  const [resultData, setResultData] = useState(null);
  const [displayResult, setDisplayResult] = useState(false);
  const [displayTryAgain, setDisplayTryAgain] = useState(false);
  const resultRef = useRef(null);
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = searchParams.toString();

  useEffect(() => {
    if (params.length === 0) {
      setDisplayTryAgain(true);
    } else {
      // split params by &, and grab the values after the = sign
      const gatheredSelections = params.split('&').map(param => param.match(/=(.*)/)[1]);
      // TODO: Use https://nextjs.org/docs/app/api-reference/functions/use-search-params
      // try searchParams.get('1') and (2, 3, 4, 5) to get the results, rather than regex. More idiomatics
      // TODO: Try to use `useParams` instead since I'm not supporting a search function here. `useParams` is therefore more idiomatic.
      // https://nextjs.org/docs/app/api-reference/functions/use-params

      if (!gatheredSelections.every(selection => VALID_SELECTIONS.includes(selection))) {
        setDisplayTryAgain(true);
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

          setDisplayResult(true);
        }
      }

      if (resultRef.current) {
        resultRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [params, setResultData, displayResult, setDisplayTryAgain, setDisplayResult]);

  const tryAgain = () => {
    router.push('/quiz/form');
  };

  return (
    displayResult ? (
      <Result resultRef={resultRef} resultData={resultData} />
    ) : (
      displayTryAgain ? (
        <div>
          <button
            className="rounded-none bg-blue-700 text-white p-2"
            onClick={tryAgain}
          >
            Something went wrong. Try again.
          </button>
        </div>
      ) : (
        <></>
      )
    )
  )
}
