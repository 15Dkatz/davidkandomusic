'use client';

import { useState, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import Script from 'next/script';

import PageLayout from '../components/pageLayout';
import { POISON_WORMS_PARAMS, PARAMS_ALBUM_MAP } from '../album-data';

// In course, show the window.onSpotifyAPI solution and attempts. Encourage students to try
// Here is the clever css fallback option though. The EmbeddedPlayer is a lot more consistent
export default function Record() {
  const [isLoading, setIsLoading] = useState(false);
  const embedIframeRef = useRef();
  const searchParams = useSearchParams();
  const params = searchParams.toString();

  const content = PARAMS_ALBUM_MAP[params] && Object.entries(PARAMS_ALBUM_MAP[params]).length > 0
    ? PARAMS_ALBUM_MAP[params]
    : PARAMS_ALBUM_MAP[POISON_WORMS_PARAMS]; // backup, show poison worms by default. An error would also work

  const { date, title, blurb, pageBackground, EmbeddedPlayer } = content;

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
        <div ref={embedIframeRef}>
          {
            isLoading ? (
              <div className="relative w-[300px] h-[352px] rounded bg-slate-100 pt-[56px] pl-[60px]">
                <div className="w-[176px] h-[176px] rounded bg-slate-200 animate-pulse text-slate-600" />
                <div className="w-[100px] h-[20px] mt-[10px] rounded bg-slate-200 animate-pulse" />
                <div className="w-[80px] h-[10px] mt-[10px] rounded bg-slate-200 animate-pulse" />
                <div className="w-[140px] h-[8px] mt-[20px] rounded bg-slate-200 animate-pulse" />
              </div>
            ) : <EmbeddedPlayer />
          }
        </div>
      </div>
      <Script src="https://open.spotify.com/embed-podcast/iframe-api/v1" />
    </PageLayout>
  )
}
