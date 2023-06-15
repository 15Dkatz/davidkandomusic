import Link from 'next/link';

export default function GridItem({ text, href, background }) {
  return (
    <Link href={href}>
      <div
        className={
          `${background} w-36 h-36 lg:w-52 lg:h-52
          flex items-end border-[2px] border-black`
        }
      >
        <div
          className={
            `w-full text-center font-ranga text-sm lg:text-2xl banner`
          }
        >
          {text}
        </div>
      </div>
    </Link>
  );
};
