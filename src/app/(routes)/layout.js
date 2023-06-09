import '../../globals.css'

import localFont from 'next/font/local';
import ITEMS from './item-data';
import HomeItem from './home-item';

const rangaBold = localFont({
  src: '../fonts/Ranga-Bold.ttf'
});

export const metadata = {
  title: 'David Kando Music'
};

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
export default function Root({ children }) {
  return (
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
                  <HomeItem {...attributes} />
                </div>
              )
            })
          }
        </div>
      </div>
      {children}
    </div>
  )
}
