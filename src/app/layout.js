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

import Portrait from './components/home-items/portrait';
import About from './components/home-items/about';
import Discography from './components/home-items/discography';
import Merch from './components/home-items/merch';
import Record from './components/home-items/record';

import { Ranga } from 'next/font/google';

const ranga = Ranga({
  subsets: ['latin'],
  weight: ['700']
});

const ITEM_TYPES = {
  'MERCH': 'MERCH',
  'DISCOGRAPHY': 'DISCOGRAPHY',
  'RECORD': 'RECORD',
  'PORTRAIT': 'PORTRAIT',
  'ABOUT': 'ABOUT'
};

const ITEM_TYPE_SETTINGS = {
  [ITEM_TYPES.DISCOGRAPHY]: {
    gridSize: "col-span-2",
    Component: Discography
  },
  // TODO: Test in col-span-1 to make this one unique
  [ITEM_TYPES.MERCH]: {
    gridSize: "col-span-1 lg:col-span-2",
    Component: Merch
  },
  [ITEM_TYPES.PORTRAIT]: {
    gridSize: "col-span-2",
    Component: Portrait
  },
  [ITEM_TYPES.RECORD]: {
    gridSize: "col-span-3",
    Component: Record
  },
  [ITEM_TYPES.ABOUT]: {
    gridSize: "col-span-2",
    Component: About
  }
};

// TODO: Move to external file
// TODO: May have no neeed for this once all the home-items are coded up.
// Try merging this with item_type_settings. More elegant.
const ITEMS = [
  {
    id: 1,
    type: ITEM_TYPES.ABOUT
  },
  {
    id: 2,
    type: ITEM_TYPES.RECORD,
    attributes: {
      title: 'Poison Worms Album Art',
      mainImage: '/poison_worms_400.png',
      recordImage: '/poison_worms_record_half.png'
    }
  },
  {
    id: 3,
    type: ITEM_TYPES.RECORD,
    attributes: {
      title: 'In Perpetuity Album Art',
      mainImage: '/in_perpetuity_400.png',
      recordImage: '/in_perpetuity_record_half.png'
    }
  },
  {
    // TODO: This should not open another page. Rather, clicking on the icons for each social will lead directly to a social page.
    id: 4,
    type: ITEM_TYPES.PORTRAIT,
    attributes: {
      title: 'Connect'
    }
  },
  {
    id: 5,
    type: ITEM_TYPES.PORTRAIT,
    attributes: {
      title: 'Playlist Personality Quiz'
    }
  },
  {
    id: 6,
    type: ITEM_TYPES.DISCOGRAPHY
  },
  {
    id: 7,
    type: ITEM_TYPES.MERCH,
    attributes: {
      title: 'Swag and knick-knacks'
    }
  }
];

// TODO: Create a navbar that invites the user back home, and shows which page they're on
// TODO: Navigation should only appear in nested pages. Perhaps I can achieve this with a simple Home button.
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        <div className="md:w-[1000px] flex flex-col items-center justify-center">
          <div
            className={
              "flex flex-col justify-center items-center " +
              "bg-slate-100 rounded-xl p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20"
            }
          >
            <div className="flex justify-center mb-5 lg:mb-10">
              <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
                DAVIDKANDOMUSIC
              </div>
            </div>
            <div className="grid grid-flow-dense grid-cols-5 lg:grid-cols-8 gap-8 ml-10 mr-10">
              {
                ITEMS.map(item => {
                  const { id, type, attributes } = item;
                  const { gridSize, Component } = ITEM_TYPE_SETTINGS[type];

                  return (
                    <div
                      key={id}
                      className={`${gridSize} flex justify-center`}
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
