import Link from 'next/link';
import localFont from 'next/font/local';

const rangaBold = localFont({
  src: '../fonts/Ranga-Bold.ttf'
});

export default function Item({ text, href, background }) {
  return (
    <Link href={href}>
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
            `${rangaBold.className} text-blue-950 hover:text-white text-sm lg:text-2xl ` +
            "pt-1 pb-1 mb-2 bg-slate-200/75 hover:bg-slate-700/75 w-full text-center " +
            "h-[22px] lg:h-[40px]"
          }
        >
          {text}
        </div>
      </div>
    </Link>
  );
};
