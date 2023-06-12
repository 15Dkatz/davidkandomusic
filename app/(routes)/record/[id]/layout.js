import { RECORDS, RECORDS_MAP } from './data';
import NavTitle from './nav-title';

export const generateMetadata = ({ params }) => {
  const { id } = params;
  const { title } = RECORDS_MAP[id];

  return { title: `${title} - David Kando` };
}

export default function Record({ params, children }) {
  const { id } = params;
  const { title, pageBackground } = RECORDS_MAP[id];

  // TODO: Come up with a solution for NavTitle
  return (
    // <PageStructure
    //   background={pageBackground}
    //   title={<NavTitle id={id} title={title} />}
    // >
    <div className="flex flex-col items-center">
      {children}
    </div>
    // </PageStructure>
  )
}

// IMPORTANT: send non-generated pages in record/?
export const dynamicParams = false;

export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}