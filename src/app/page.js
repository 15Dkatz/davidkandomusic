// TODO: Turn this page into the main Records layout
import Merch from './components/merch';
import Record from './components/record';
import Square from './components/square';

const ITEM_TYPES = {
  'RECORD': 'RECORD',
  'SQUARE': 'SQUARE',
  'MERCH': 'MERCH'
};

const ITEM_TYPE_SETTINGS = {
  [ITEM_TYPES.RECORD]: {
    gridSize: "col-span-3",
    Component: Record
  },
  [ITEM_TYPES.SQUARE]: {
    gridSize: "col-span-2",
    Component: Square
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
    title: 'A Kando Story',
    type: ITEM_TYPES.SQUARE
  },
  {
    id: 2,
    title: 'Poison Worms',
    type: ITEM_TYPES.RECORD
  },
  {
    id: 3,
    title: 'In Perpetuity',
    type: ITEM_TYPES.RECORD
  },
  {
    id: 4,
    title: 'Connect',
    type: ITEM_TYPES.SQUARE
  },
  {
    id: 5,
    title: 'Playlist Personality Quiz',
    type: ITEM_TYPES.SQUARE
  },
  {
    id: 6,
    title: 'Switch it up (theme settings)',
    type: ITEM_TYPES.SQUARE
  },
  {
    id: 7,
    title: 'Swag and knick-knacks',
    type: ITEM_TYPES.MERCH
  }
];

// [x] establish a responsive layout
// [] design the UI for each component type. Fun layout.
//    [] try a jsx approach for the record UI first. Then do images for the swag.
// [] set up "shelves", aesthetic dividers, can I do this with <br /> components directly in the grid?

// Note: no need for min-h-screen because this will set the height to 100vh. This is 100 * 1% of the browser viewport. This is unwanted because the height of the shared nav will be added as scroll area on the bottom. Instead, set no height and allow the "record"s to establish this main page's height.
// use a lot of nice styling from the tailwind css pages, such as blurred backgrounds, etc.
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <div className="flex w-full justify-center">
        DAVIDKANDOMUSIC
      </div>
      <div className="max-w-4xl grid grid-flow-dense grid-cols-7 md:grid-cols-8 gap-8 ml-10 mr-10">
        {
          ITEMS.map(item => {
            const { id, title, type } = item;
            const { gridSize, Component } = ITEM_TYPE_SETTINGS[type];

            // TODO: Change display by type. Place each item's relative jsx in its own component.
            // TODO: Research the conventions for where to place components in Next.js
            return (
              <div
                key={id}
                className={`${gridSize} flex justify-center`}
              >
                <Component title={title} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}
