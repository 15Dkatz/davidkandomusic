import Link from 'next/link';
import { RECORDS, RECORDS_MAP } from '../../data';
import Player from './player';

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <>
      <div className="text-justify">{blurb}</div>
      <div className="text-sm text-slate-600">
        Release date: {date}
      </div>
      <div className="font-ranga flex justify-between w-36 text-2xl m-2">
        <Link href={`record/${id}/lyrics`} className="link">Lyrics</Link>
        <Link href={`record/${id}/gear`} className="link">Gear Used</Link>
      </div>
      <Player embed={<Embed />} />
    </>
  )
}

// TODO: Open an issue with Next.js. Tab titles do not update properly while changing tabs
// NOTE: Issue exists: https://github.com/vercel/next.js/issues/48548
export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];
  // console.log(`title`, title);

  return { title: `${title} - David Kando` };
}

export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}
