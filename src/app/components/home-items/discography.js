import Link from 'next/link';
import { Ranga } from 'next/font/google';

const ranga = Ranga({
  subsets: ['latin'],
  weight: ['700']
});

// TODO: Create a shared component between About and this
export default function Discography() {
  return (
    <Link href="/discography">
      <div
        className={
          "relative flex items-end " +
          "w-28 h-28 lg:w-40 lg:h-40 " +
          "bg-[url('/discography_400.png')] bg-contain " +
          "border-[2px] border-black"
        }
      >
        <div
          className={
            `${ranga.className} text-blue-950 hover:text-white text-sm md:text-3xl ` +
            "pt-1 pb-1 mb-2 bg-slate-200/75 hover:bg-slate-700/75 w-full text-center align-center " +
            "h-[22px] md:h-[40px]"
          }
        >
          DISCOGRAPHY
        </div>
      </div>
    </Link>
  );
};
