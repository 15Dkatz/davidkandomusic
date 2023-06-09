import localFont from 'next/font/local';
import { RECORDS, RECORDS_MAP } from '../data';
import LazyPlayerDisplay from '../lazy-player-display';

// const rangaBold = localFont({
//   src: '../../../../fonts/Ranga-Bold.ttf'
// });


export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

// TODO: Is there a helper function to generate the hrefs?
export default function Record({ params }) {
  const { id } = params;
  const { gear, LazyPlayer } = RECORDS_MAP[id];

  return (
    <>
      <LazyPlayerDisplay lazyPlayer={<LazyPlayer />} />
      <br />
      {gear}
    </>
  )
}

// replacement for getStaticParams and getStaticProps
// emulates a database-fetching scenario. However, here the data is hardcoded
export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}
