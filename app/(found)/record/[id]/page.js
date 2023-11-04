import Link from 'next/link';
import { RECORDS, RECORDS_MAP } from './data';
import Player from './player';

// IMPORTANT: send non-generated pages (record/<?>) to 404, such as record/foo
export const dynamicParams = false;

export async function generateStaticParams() {
  return RECORDS.map(record => ({ id: record.id }));
}

// TODO: Open an issue with Next.js. Tab titles do not update properly while changing tabs
// NOTE: Issue exists: https://github.com/vercel/next.js/issues/48548
export async function generateMetadata({ params }) {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb, Embed, gear } = RECORDS_MAP[id];

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div className="text-sm text-slate-600">
        Release date: {date}
      </div>
      <div className="font-ranga flex justify-center w-[144px] text-2xl">
        <Link href={`/record/${id}/lyrics`} className="link">Lyrics</Link>
        {
          gear ? (
            <Link href={`/record/${id}/gear`} className="link ml-2">Gear Used</Link>
          ) : <></>
        }
      </div>
      <Player embed={<Embed />} />
    </>
  )
}
