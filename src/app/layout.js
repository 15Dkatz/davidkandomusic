import '../globals.css'

import localFont from 'next/font/local';
import ITEMS from './items';
import Item from './components/homepage/item';

const rangaBold = localFont({
  src: '../fonts/Ranga-Bold.ttf'
});

const robotoCondensed = localFont({
  src: '../fonts/RobotoCondensed-Regular.ttf'
});

export const metadata = {
  title: 'davidkandomusic',
  description: "Music for when you're just hanging around...",
};

// NOTE: Lack of `navigate` makes page transitions instantaneous due to the server components being made at build time
// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
export default function Root({ children }) {
  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        <div className="w-[350px] md:w-[1000px] m-5 md:[m-10] flex flex-col items-center justify-center">
          <div
            className={
              "w-full p-1 pb-10 pt-10 m-2 md:p-10 md:m-20 md:mb-2 " +
              "flex flex-col justify-center items-center " +
              "bg-slate-100"
            }
          >
            <div className="flex justify-center mb-5 md:mb-10">
              <div className={`${rangaBold.className} text-2xl md:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
                DAVID KANDO MUSIC
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ml-1 mr-1 md:ml-10 md:mr-10">
              {
                ITEMS.map(item => {
                  const { id, attributes } = item;

                  return (
                    <div key={id} className="flex justify-center">
                      <Item {...attributes} />
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
