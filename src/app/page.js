// TODO: Turn this page into the main Records layout

// TODO: Move to external file
const RECORDS = [
  {
    id: 1,
    title: 'Poison Worms'
  },
  {
    id: 2,
    title: 'Connect'
  },
  {
    id: 3,
    title: 'Playlist Personality Quiz'
  },
  {
    id: 4,
    title: 'In Perpetuity'
  },
  {
    id: 5,
    title: 'A Story'
  },
  {
    id: 6,
    title: 'Virtual DAW'
  },
  {
    id: 7,
    title: 'Discography'
  },
  {
    id: 8,
    title: 'Swag and Fits'
  }
];

// Note: no need for min-h-screen because this will set the height to 100vh. This is 100 * 1% of the browser viewport. This is unwanted because the height of the shared nav will be added as scroll area on the bottom. Instead, set no height and allow the "record"s to establish this main page's height.
export default function Page() {
  return (
    <main className="flex justify-center pt-10 pl-10 pr-10">
      <div className="flex w-11/12 justify-between">
        {
          RECORDS.map(record => {
            const { id, title } = record;

            return (
              <div key={id} className="w-40 h-40 border border-black rounded">
                {title}
              </div>
            )
          })
        }
      </div>
    </main>
  )
}