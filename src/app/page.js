// TODO: Turn this page into the main Records layout

const ITEM_TYPES = {
  'RECORD': 'RECORD',
  'SQUARE': 'SQUARE',
  'MERCH': 'MERCH'
};

const ITEM_TYPE_INSERTED_CLASSNAMES = {
  [ITEM_TYPES.RECORD]: "col-span-3",
  [ITEM_TYPES.SQUARE]: "col-span-2",
  [ITEM_TYPES.MERCH]: "col-span-2"
};

// TODO: Move to external file
const ITEMS = [
  {
    id: 1,
    title: 'Poison Worms',
    type: ITEM_TYPES.RECORD
  },
  {
    id: 2,
    title: 'A Kando Story',
    type: ITEM_TYPES.SQUARE
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
    title: 'Color Carnival',
    type: ITEM_TYPES.SQUARE
  },
  {
    id: 7,
    title: 'Swag and knick-knacks',
    type: ITEM_TYPES.MERCH
  }
];

// Note: no need for min-h-screen because this will set the height to 100vh. This is 100 * 1% of the browser viewport. This is unwanted because the height of the shared nav will be added as scroll area on the bottom. Instead, set no height and allow the "record"s to establish this main page's height.
export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center">
      <div className="flex w-full justify-center">
        DAVIDKANDOMUSIC
      </div>
      <div className="grid grid-flow-dense grid-cols-7 md:grid-cols-8 gap-8 ml-10 mr-10">
        {
          ITEMS.map(item => {
            const { id, title, type } = item;
            const insertedClassnames = ITEM_TYPE_INSERTED_CLASSNAMES[type];

            // TODO: Change display by type. Place each item's relative jsx in its own component.
            // TODO: Research the conventions for where to place components in Next.js
            // col-span, record: 2, square: 1, merch: 1
            return (
              <div
                key={id}
                className={`${insertedClassnames} flex justify-center border`}
              >
                <div className="w-20 h-20 md:w-40 md:h-40 border border-black rounded">
                  {title}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}