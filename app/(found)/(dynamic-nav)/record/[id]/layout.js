import { RECORDS } from '../../data';

export default function Layout({ children }) {
  return (
    <div className="flex flex-col items-center">
      {children}
    </div>
  )
}


// IMPORTANT: send non-generated pages (record/<?>) to 404, such as record/foo
export const dynamicParams = false;

export async function generateStaticParams() {
  return RECORDS.map(({ id }) => ({ id }));
}

