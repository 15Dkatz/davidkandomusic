import { RECORDS, RECORDS_MAP } from './data';

export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

export default function Record({ params, children }) {
  return (
    <div className="flex flex-col items-center">
      {children}
    </div>
  )
}

// IMPORTANT: send non-generated pages in record/?
export const dynamicParams = false;

export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}