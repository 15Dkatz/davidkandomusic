'use client';

import './globals.css'

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { Roboto_Condensed } from 'next/font/google';
import PageContext from './page-context';
import ITEMS from './items';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400'
});

// TODO: Dig into metadata more, and set correctly
// export const metadata = {
//   title: 'davidkandomusic',
//   description: "Music for when you're just hanging around...",
// };

// Refactor all links to use a shared className that I define in globals css

import Item from './components/homepage/item';

import { Ranga } from 'next/font/google';

const ranga = Ranga({
  subsets: ['latin'],
  weight: ['700']
});

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
export default function RootLayout({ children }) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  function navigate(path) {
    startTransition(() => router.push(path));
  }

  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        <div className="w-[350px] md:w-[1000px] m-5 md:[m-10] flex flex-col items-center justify-center">
          <div
            className={
              "w-full p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 lg:mb-2 " +
              "flex flex-col justify-center items-center " +
              "bg-slate-100"
            }
          >
            <div className="flex justify-center mb-5 lg:mb-10">
              <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
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
      </body>
    </html>
  )
}
