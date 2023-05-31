import './globals.css'

import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400'
});

// TODO: Dig into metadata more, and set correctly
// export const metadata = {
//   title: 'davidkandomusic',
//   description: "Music for when you're just hanging around...",
// };

import About from './components/homepage/about';
import Discography from './components/homepage/discography';
import Record from './components/homepage/record';
import Connect from './components/homepage/connect';
import Studio from './components/homepage/studio';
import Quiz from './components/homepage/quiz';
import Swag from './components/homepage/swag';

import { Ranga } from 'next/font/google';

const ranga = Ranga({
  subsets: ['latin'],
  weight: ['700']
});

// TODO: Move to external file
// TODO: May have no neeed for this once all the home-items are coded up.
// Try merging this with item_type_settings. More elegant.
const ITEMS = [
  {
    id: 1,
    Component: About
  },
  {
    id: 2,
    Component: Discography
  },
  {
    id: 3,
    Component: Record,
    attributes: {
      title: 'Poison Worms',
      albumImage: '/poison_worms_400.png'
    }
  },
  {
    id: 4,
    Component: Record,
    attributes: {
      title: 'In Perpetuity',
      albumImage: '/in_perpetuity_400.png'
    }
  },
  {
    id: 5,
    Component: Connect
  },
  {
    id: 6,
    Component: Studio
  },
  {
    id: 7,
    Component: Quiz
  },
  {
    id: 8,
    Component: Swag
  }
];

// TODO: Create a navbar that invites the user back home, and shows which page they're on
// TODO: Navigation should only appear in nested pages. Perhaps I can achieve this with a simple Home button.
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        <div className="w-[350px] md:w-[1000px] m-5 md:[m-10] flex flex-col items-center justify-center">
          <div
            className={
              "w-full p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 " +
              "flex flex-col justify-center items-center " +
              "bg-slate-100"
            }
          >
            <div className="flex justify-center mb-5 lg:mb-10">
              <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
                DAVIDKANDOMUSIC
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 ml-10 mr-10">
              {
                ITEMS.map(item => {
                  const { id, Component, attributes } = item;
                  console.log(`id with Component`, id);

                  // TODO: Use homepage/item directly here. No need to have separate files for each entry
                  // This should also fix the poison worms and in perpetuity backgrounds
                  return (
                    <div
                      key={id}
                      className="col-span-1 flex justify-center"
                    >
                      <Component {...attributes} />
                    </div>
                  )
                })
              }
            </div>
          </div>
          {/* Render the pages below as children */}
          {children}
        </div>
      </body>
    </html>
  )
}
