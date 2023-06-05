'use client';

import { useContext } from 'react';
import { Suspense } from 'react';
import { Ranga } from 'next/font/google'

import PageContext from '../page-context';

const ranga = Ranga({
  subsets: ['latin'],
  weight: '700'
});

function Fallback() {
  return (
    <div className="m-5">
      loading...
    </div>
  )
}

// TODO: Make the <loading> the bg-slate-100 since it's slow to load sometimes. Can even put a skeleton row.
// TODO: Research Suspense and React 18 features. Good opportunity to use React 18.
export default function PageLayout({ children, background, title }) {
  const bg = background ? background + " " : "bg-slate-100 ";
  const titleToDisplay = title ? title : 'Example';

  const { isPending, navigate } = useContext(PageContext);

  console.log(`isPending`, isPending);
  console.log(`navigate`, navigate);

  return (
    <div
      className={
        "w-full p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 " +
        "flex flex-col justify-center items-center " +
        bg + "bg-no-repeat bg-cover "
      }
    >
      {/* TODO: make a title that matches the davidkandomusic header */}
      <div className="flex justify-center mb-5 lg:mb-10">
        <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
          {titleToDisplay}
        </div>
      </div>
      <Suspense fallback={<Fallback />}>
        {children}
      </Suspense>
    </div>
  )
}