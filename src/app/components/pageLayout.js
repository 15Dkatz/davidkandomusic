'use client';

import { useContext, useState, useEffect } from 'react';
import { Suspense } from 'react';
import localFont from 'next/font/local';

import PageContext from '../page-context';

const rangaBold = localFont({
  src: '../fonts/Ranga-Bold.ttf'
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
  const [isPendingLong, setIsPendingLong] = useState(false);
  const bg = background ? background + " " : "bg-slate-100 ";
  const titleToDisplay = title ? title : 'Example';

  const { isPending } = useContext(PageContext);

  // add a 200ms wait before showing the loading state
  // 200ms is the max threshold for humans perceiving "responsiveness" of a webstie
  // However, 200ms is enough time for the page load to appear before isPending renders, preventing a jumpy experience (loading state for ~100ms for example, and then quickly switching to the new window)

  // Notice that next is caching the server-side route pages, made apparent by network throttling. The loading state is completely skipped.
  useEffect(() => {
    console.log(`0ms passed.`);
    console.log(`isPending`, isPending);

    setTimeout(() => {
      if (isPending) {
        console.log(`200ms passed. setIsPendingLong`);
        console.log(`current value of isPending`, isPending);

        setIsPendingLong(true);
      }
    }, 200)
  }, [isPending, setIsPendingLong]);

  if (isPending && isPendingLong) {
    return (
      <div
        className={
          "w-full h-[400px] p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 " +
          "flex flex-col justify-start items-center " +
          "animare-pulse bg-slate-100 to-blue-400"
        }
      >
        {/* TODO: make a title that matches the davidkandomusic header */}
        <div className="animate-pulse w-full flex flex-col items-center">
          <div className="rounded bg-slate-300 w-5/12 h-9 mb-5" />
          <div className="flex flex-col w-9/12 items-start">
            <div className="rounded bg-slate-300 w-8/12 h-4 md:h-5 mt-4" />
            <div className="rounded bg-slate-300 w-5/12 h-4 md:h-5 mt-4" />
            <div className="rounded bg-slate-300 w-5/12 h-4 md:h-5 mt-4" />
          </div>
        </div>
      </div>
    )
  }

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
        <div className={`${rangaBold.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
          {titleToDisplay}
        </div>
      </div>
      <Suspense fallback={Fallback}>
        {children}
      </Suspense>
    </div>
  )
}