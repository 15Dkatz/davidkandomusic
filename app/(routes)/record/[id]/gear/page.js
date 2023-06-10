import { RECORDS, RECORDS_MAP } from '../data';
import LazyPlayerDisplay from '../lazy-player-display';

export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

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
