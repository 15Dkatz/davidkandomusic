import Link from 'next/link';

export default function GridItem({ text, href, background }) {
  return (
    <Link href={href}>
      <div
        className={
          `relative flex items-end w-36 h-36 md:w-52 md:h-52
          ${background} border-[2px] border-black`
        }
      >
        <div
          className={
            `font-ranga text-blue-950 hover:text-white text-sm md:text-2xl
            pt-1 pb-1 mb-2 bg-slate-200/75 hover:bg-slate-700/75 w-full text-center
            h-[22px] md:h-[40px]`
          }
        >
          {text}
        </div>
      </div>
    </Link>
  );
};
