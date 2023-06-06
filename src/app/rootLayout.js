'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import localFont from 'next/font/local';
import PageContext from './page-context';
import ITEMS from './items';
import Item from './components/homepage/item';

const rangaBold = localFont({
  src: '../fonts/Ranga-Bold.ttf'
});

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
export default function Root({ children }) {
  const router = useRouter();
  // const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  function navigate(path) {
    startTransition(() => router.push(path));
  }

  return (
    <div className="w-[350px] md:w-[1000px] m-5 md:[m-10] flex flex-col items-center justify-center">
      <div
        className={
          "w-full p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 lg:mb-2 " +
          "flex flex-col justify-center items-center " +
          "bg-slate-100"
        }
      >
        <div className="flex justify-center mb-5 lg:mb-10">
          <div className={`${rangaBold.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
            DAVID KANDO MUSIC
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 ml-1 mr-1 lg:ml-10 lg:mr-10">
          {
            ITEMS.map(item => {
              const { id, attributes } = item;
              const props = { navigate, ...attributes };

              return (
                <div key={id} className="flex justify-center">
                  <Item {...props} />
                </div>
              )
            })
          }
        </div>
      </div>
      <PageContext.Provider value={{ isPending, navigate }}>
        {children}
      </PageContext.Provider>
    </div>
  )
}
