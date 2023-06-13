import Link from 'next/link';
import { RECORDS, RECORDS_MAP } from '../../data';
import Player from './player';
import rangaBold from 'app/fonts/ranga-bold';

export default function Page({ params }) {
  const { id } = params;
  const { date, blurb, Embed } = RECORDS_MAP[id];

  return (
    <>
      <div className="ml-5 mr-5 mb-5">
        <div className="text-justify md:text-xl mb-1">{blurb}</div>
        <div className="text-sm text-slate-600">
          Release date: {date}
        </div>
      </div>
      <div className={`${rangaBold.className} flex justify-between w-36 text-2xl mb-5`}>
        <Link href={`record/${id}/lyrics`} className="link">Lyrics</Link>
        <Link href={`record/${id}/gear`} className="link">Gear Used</Link>
      </div>
      <Player embed={<Embed />} />
    </>
  )
}

// TODO: The deep level of nesting seems to be glitching out generateMetadata
// Open an issue with Next.js
// Or further look into Metadata
export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  console.log(`title`, title);

  return { title: `${title} - David Kando` };
}

export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}
