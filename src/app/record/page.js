'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

import PageLayout from '../components/pageLayout';
import { POISON_WORMS_PARAMS, PARAMS_ALBUM_MAP } from './data';

const Loading = () => (
  <div className="absolute w-[300px] h-[352px] rounded bg-slate-100 pt-[56px] pl-[60px]">
    <div className="w-[176px] h-[176px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[100px] h-[20px] mt-[10px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[80px] h-[10px] mt-[10px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[140px] h-[8px] mt-[20px] rounded bg-slate-200 animate-pulse" />
  </div>
);

export default function Record() {
  // TODO: There must be a next.js way to generate the pages without having to use useSearchParams
  // keep these as server components
  const searchParams = useSearchParams();
  const params = searchParams.toString();

  // TODO: Redirect to 404 in default state instead of the backup.
  const content = PARAMS_ALBUM_MAP[params] && Object.entries(PARAMS_ALBUM_MAP[params]).length > 0
    ? PARAMS_ALBUM_MAP[params]
    : PARAMS_ALBUM_MAP[POISON_WORMS_PARAMS]; // backup, show poison worms by default. An error would also work

  const { date, title, blurb, pageBackground, LazyPlayer } = content;

  return (
    <PageLayout
      background={pageBackground}
      title={`Hot off the press: ${title}`}
    >
      <div className="m-5 mt-0">
        <div className="text-justify lg:text-xl mb-1">{blurb}</div>
        <div className="text-sm text-slate-600">
          Release date: {date}
        </div>
      </div>
      <div className={"text-md lg:text-xl p-1"}>
        <div className="relative w-[300px] h-[352px]">
          <div className="absolute w-[300px] h-[352px]">
            <Suspense fallback={<Loading />}>
              <LazyPlayer />
            </Suspense>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
