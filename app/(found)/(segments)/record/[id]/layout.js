import { RECORDS } from './data';

export default function Record({ children }) {
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