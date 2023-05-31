import './globals.css'

import { Roboto_Condensed } from 'next/font/google';

import {
  POISON_WORMS_PARAMS,
  IN_PERPETUITY_PARAMS
} from './album-data';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400'
});

// TODO: Dig into metadata more, and set correctly
// export const metadata = {
//   title: 'davidkandomusic',
//   description: "Music for when you're just hanging around...",
// };

import Item from './components/homepage/item';

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
    attributes: {
      href: '/about',
      background: "bg-[url('/about_b&w_500.png')] bg-contain",
      text: "About David Kando"
    }
  },
  {
    id: 2,
    attributes: {
      href: "/discography",
      background: "bg-[url('/discography_400.png')] bg-contain",
      text: "DISCOGRAPHY"
    }
  },
  {
    id: 3,
    attributes: {
      href: `/record?${POISON_WORMS_PARAMS}`,
      text: 'Poison Worms',
      background: "bg-[url('/poison_worms_400.png')] bg-contain"
    }
  },
  {
    id: 4,
    attributes: {
      href: `/record?${IN_PERPETUITY_PARAMS}`,
      text: 'In Perpetuity',
      background: "bg-[url('/in_perpetuity_400.png')] bg-contain"
    }
  },
  {
    id: 5,
    attributes: {
      href: "/connect",
      background: "bg-[url('/connect_500.png')] bg-contain",
      text: "Connect with me"
    }
  },
  {
    id: 6,
    attributes: {
      href: "/studio",
      background: "bg-[url('/studio_500.png')] bg-contain",
      text: "Recording Studio"
    }
  },
  {
    id: 7,
    attributes: {
      href: "/quiz",
      // TODO: Change background to an image
      // background: "bg-[url('/discography_400.png')] bg-contain",
      background: "bg-slate-100",
      text: "Playlist Personality Quiz"
    }
  },
  {
    id: 8,
    attributes: {
      href: "/swag",
      // TODO: Change background to an image
      // background: "bg-[url('/discography_400.png')] bg-contain",
      background: "bg-slate-100",
      text: "SWAG"
    }
  }
];
// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items

export default function RootLayout({ children }) {
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
                DAVIDKANDOMUSIC
              </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 ml-1 mr-1 lg:ml-10 lg:mr-10">
              {
                ITEMS.map(item => {
                  const { id, attributes } = item;
                  return (
                    <div key={id} className="flex justify-center">
                      <Item {...attributes}/>
                    </div>
                  )
                })
              }
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}
