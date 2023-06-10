import { RECORDS, RECORDS_MAP } from '../data';
import LazyPlayerDisplay from '../lazy-player-display';

export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

// TODO: Is there a helper function to generate the hrefs?
export default function Record({ params }) {
  const { id } = params;
  const { lyrics, LazyPlayer } = RECORDS_MAP[id];

  return (
    <>
      <LazyPlayerDisplay lazyPlayer={<LazyPlayer />} />
      <br />
      {lyrics}
    </>
  )
}

// replacement for getStaticParams and getStaticProps
// emulates a database-fetching scenario. However, here the data is hardcoded
export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}
