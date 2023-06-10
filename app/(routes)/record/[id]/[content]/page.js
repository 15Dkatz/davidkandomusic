import { RECORDS, RECORDS_MAP } from '../data';
import Player from '../player';

export default function Record({ params }) {
  const { id, content } = params;
  console.log(`id`, id);
  console.log(`content`, content);

  const { Embed } = RECORDS_MAP[id];
  const contentJsx = RECORDS_MAP[id][content];

  return (
    <>
      <Player embed={<Embed />} />
      <br />
      {contentJsx}
    </>
  )
}

// emulates a database-fetching scenario. However, here the data is hardcoded
export async function generateStaticParams() {
  return RECORDS.map(({ id, content }) => ({ id, content }));
}
