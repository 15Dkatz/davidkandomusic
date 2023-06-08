import { Suspense } from 'react';

import PageLayout from '../../components/page-layout';
import { RECORDS, RECORDS_MAP } from '../data';

const Loading = () => (
  <div className="absolute w-[300px] h-[352px] rounded bg-slate-100 pt-[56px] pl-[60px]">
    <div className="w-[176px] h-[176px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[100px] h-[20px] mt-[10px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[80px] h-[10px] mt-[10px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[140px] h-[8px] mt-[20px] rounded bg-slate-200 animate-pulse" />
  </div>
);

// TODO: Test anonymous function
export function generateMetadata({ params }) {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  console.log(`params`, params);
  console.log(`params`, params);

  return { title: `${title} - David Kando` };
}

// TODO: Why isn't suspense working with the server-side generaration?
export default function Record({ params }) {
  const { id } = params;
  const { date, title, blurb, pageBackground, LazyPlayer } = RECORDS_MAP[id];

  return (
    <PageLayout
      background={pageBackground}
      title={`Hot off the press: ${title}`}
    >
      <div className="m-5 mt-0">
        <div className="text-justify md:text-xl mb-1">{blurb}</div>
        <div className="text-sm text-slate-600">
          Release date: {date}
        </div>
      </div>
      <div className={"text-md md:text-xl p-1"}>
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

// send non-generated pages to the 404 page.
export const dynamicParams = false;

// replacement for getStaticParams and getStaticProps
// emulates a database-fetching scenario. However, here the data is hardcoded
export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}
