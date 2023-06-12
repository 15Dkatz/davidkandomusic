import '../globals.css'
import ClientLog from './client-log';
import { Analytics } from '@vercel/analytics/react';
import { ITEMS } from './data';
import HomeItem from './home-item';
import LinkTitle from './link-title';

import robotoCondensed from 'app/fonts/roboto-condensed';

export const metadata = {
  title: 'David Kando Music'
};

export default function RootLayout({ children }) {
  return (
    <html className={`${robotoCondensed.className}`}>
      <body className="flex justify-center min-h-screen">
        <div className="w-[350px] md:w-[1000px] flex flex-col items-center justify-start mt-5 md:mt-10">
          <div
            className={
              `w-full p-1 pb-10 pt-10 m-1 md:p-10 md:m-20 md:mb-2
              flex flex-col justify-center items-center bg-slate-100`
            }
          >
            <LinkTitle />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ml-1 mr-1 md:ml-10 md:mr-10">
              {
                ITEMS.map(item => {
                  const { id, attributes } = item;

                  return (
                    <div key={id} className="flex justify-center">
                      <HomeItem {...attributes} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          {children}
        </div>
      </body>
      <ClientLog />
      <Analytics />
    </html>
  )
}

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
// Also, have a "Build this website" item for people to take the course
// Then move "In Perpetuity" or Discography to load more
