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
  'STORY': 'STORY'
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
  [ITEM_TYPES.STORY]: {
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
    type: ITEM_TYPES.STORY
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
    <div></div>
  );
  // return (
  //   <div className="min-h-screen flex items-center justify-center">
  //     <div
  //       className={
  //         "flex flex-col justify-center items-center " +
  //         "bg-slate-100 rounded-xl p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20"
  //       }
  //     >
  //       <div className="flex justify-center mb-5 lg:mb-10">
  //         <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
  //           DAVIDKANDOMUSIC
  //         </div>
  //       </div>
  //       <div className="grid grid-flow-dense grid-cols-5 lg:grid-cols-8 gap-8 ml-10 mr-10">
  //         {
  //           ITEMS.map(item => {
  //             const { id, type, attributes } = item;
  //             const { gridSize, Component } = ITEM_TYPE_SETTINGS[type];

  //             return (
  //               <div
  //                 key={id}
  //                 className={`${gridSize} flex justify-center`}
  //               >
  //                 <Component {...attributes} />
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     </div>
  //   </div>
  // )
}
