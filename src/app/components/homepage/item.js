import Link from 'next/link';
import { Ranga } from 'next/font/google';

const ranga = Ranga({
  subsets: ['latin'],
  weight: ['700']
});

export default function Item({ text, href, background, navigate }) {
  const push = () => navigate(href);

  return (
    <div onClick={push} className="cursor-pointer">
      <div
        className={
          "relative flex items-end " +
          "w-36 h-36 lg:w-52 lg:h-52 " +
          background + " " +
          "border-[2px] border-black"
        }
      >
        <div
          className={
            `${ranga.className} text-blue-950 hover:text-white text-sm md:text-2xl ` +
            "pt-1 pb-1 mb-2 bg-slate-200/75 hover:bg-slate-700/75 w-full text-center " +
            "h-[22px] md:h-[40px]"
          }
        >
          {text}
        </div>
      </div>
    </div>
  );
};
