'use client';

import { useSearchParams } from 'next/navigation';

import PageLayout from '../components/pageLayout';
import { POISON_WORMS_PARAMS, PARAMS_ALBUM_MAP } from '../album-data';
// Use some logic to display the corresponding spotify embedded player
// Is there a programmatic way to server-side generate the pages/routes?

// TODO: Grab the relevant record from the query string. Best to have a shared types to guarantee matching.
export default function Record() {
  const searchParams = useSearchParams();
  const params = searchParams.toString();

  const content = PARAMS_ALBUM_MAP[params] && Object.entries(PARAMS_ALBUM_MAP[params]).length > 0
    ? PARAMS_ALBUM_MAP[params]
    : PARAMS_ALBUM_MAP[POISON_WORMS_PARAMS]; // backup, show poison worms by default. An error would also work

  const { date, title, blurb, EmbeddedPlayer, pageBackground } = content;

  return (
    <PageLayout
      // TODO: Consider a linear gradient or image background
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
        {/* TODO: See if I can get Suspense and loading to work properly since the embeddedplayer sometimes takes a second to load. */}
        <EmbeddedPlayer />
      </div>
    </PageLayout>
  )
}
