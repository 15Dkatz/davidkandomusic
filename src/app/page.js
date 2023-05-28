import Merch from './components/merch';
import Record from './components/record';
import Portrait from './components/portrait';
import Story from './components/story';

import { Viaoda_Libre } from 'next/font/google';

const viaodaLibre = Viaoda_Libre({
  subsets: ['latin'],
  weight: ['400']
});

const ITEM_TYPES = {
  'RECORD': 'RECORD',
  'PORTRAIT': 'PORTRAIT',
  'STORY': 'STORY',
  'MERCH': 'MERCH'
};

const ITEM_TYPE_SETTINGS = {
  [ITEM_TYPES.RECORD]: {
    gridSize: "col-span-3",
    Component: Record
  },
  [ITEM_TYPES.PORTRAIT]: {
    gridSize: "col-span-2",
    Component: Portrait
  },
  [ITEM_TYPES.STORY]: {
    gridSize: "col-span-2",
    Component: Story
  },
  [ITEM_TYPES.MERCH]: {
    gridSize: "col-span-2",
    Component: Merch
  }
};

// TODO: Move to external file
const ITEMS = [
  {
    id: 1,
    type: ITEM_TYPES.STORY
  },
  {
    id: 2,
    type: ITEM_TYPES.RECORD,
    attributes: {
      title: 'Poison Worms Album Art',
      image: '/poison_worms_400.png'
    }
  },
  {
    id: 3,
    type: ITEM_TYPES.RECORD,
    attributes: {
      title: 'In Perpetuity Album Art',
      image: '/in_perpetuity_400.png'
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
    // TODO: Also make this inline. No need to open another page if the UI/functionality would be so small
    type: ITEM_TYPES.PORTRAIT,
    attributes: {
      title: 'Switch it up (theme settings)'
    }
  },
  {
    id: 7,
    type: ITEM_TYPES.MERCH,
    attributes: {
      title: 'Swag and knick-knacks'
    }
  }
];

// [x] establish a responsive layout
// [] design the UI for each component type. Fun layout.
//    [] RECORD
//       [x] try a jsx approach for the record UI first. Then do images for the swag.
//    [] PORTRAIT
//       [] consider using the svg backgrounds from tailwind here to make nice portraits: https://heropatterns.com/ (Church on Sunday for Personality Quiz, I Like Food for something)
//       [] consider having a gradient background for portraits (Aurora Borealis mode)
// [] set up "shelves", aesthetic dividers, can I do this with <br /> components directly in the grid?

// Note: no need for min-h-screen because this will set the height to 100vh. This is 100 * 1% of the browser viewport. This is unwanted because the height of the shared nav will be added as scroll area on the bottom. Instead, set no height and allow the "record"s to establish this main page's height.
// use a lot of nice styling from the tailwind css pages, such as blurred backgrounds, etc.
// - nice aurora borealis background from tailwind here: https://tailwindcss.com/docs/max-width

// Themes
// [] Have an animating background, that simply changes every few mins, like squiggly lines that move every few seconds, fire that moves every few seconds, etc. Very low tech.
export default function Page() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div
        className={
          "flex flex-col justify-center items-center " +
          "bg-slate-100 rounded-xl p-1 pb-10 pt-10 m-2 md:p-10 md:m-20"
        }
      >
        {/* TODO: Consider changing the font to something more fun. But see the consistency with the album art in the record before deciding. */}
        <div className="flex justify-center mb-5 md:mb-10">
          <div className={`${viaodaLibre.className} text-3xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
            DAVIDKANDOMUSIC
          </div>
        </div>
        {/* TODO: Why is my hr blank? */}
        <hr />
        <div className="grid grid-flow-dense grid-cols-7 md:grid-cols-8 gap-8 ml-10 mr-10">
          {
            ITEMS.map(item => {
              const { id, type, attributes } = item;
              const { gridSize, Component } = ITEM_TYPE_SETTINGS[type];

              // TODO: Change display by type. Place each item's relative jsx in its own component.
              // TODO: Research the conventions for where to place components in Next.js
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
    </div>
  )
}
