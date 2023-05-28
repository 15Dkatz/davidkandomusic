import { BookOpenIcon } from '@heroicons/react/24/outline';

// TODO: Find a nice new legible font.
// import { Birthstone } from 'next/font/google'

// const birthstone = Birthstone({
//   subsets: ['latin'],
//   weight: ['400']
// });
// TODO: Use the secondary font

// TODO: Consider making a higher-order/wrapper component to share the common structure and styling here and in other items
export default function Story() {
  return (
    <div>
      <div className="w-20 h-20 md:w-40 md:h-40 block border-4 border-black rounded">
        <div
          className={
            "flex flex-col items-center justify-center " +
            "md:w-36 md:h-16 md:ml-1 md:mt-11 " +
            "bg-white md:border-2 md:border-black md:rounded-md"
          }
        >
          <BookOpenIcon className="h-6 w-6" />
          <div className="leading-normal">
            A Kando Story
          </div>
        </div>
      </div>
    </div>
  );
};
