import Image from 'next/image';
import Link from 'next/link';

// TODO: Consider making a higher-order/wrapper component to share the common structure and styling here and in other items
export default function Story() {
  return (
    <Link href="/about">
      <div
        className={
          "relative block " +
          "w-20 h-20 md:w-40 md:h-40 " +
          "border-[2px] border-black"
        }
      >
        <Image
          src='/about_david_kando_bottom_400.png'
          alt="about David Kando"
          fill
        />
      </div>
    </Link>
  );
};
