import Image from 'next/image';
import Link from 'next/link';

// TODO: Consider making a higher-order/wrapper component to share the common structure and styling here and in other items
export default function About() {
  return (
    <Link href="/about">
      <div
        className={
          "relative block " +
          "w-24 h-24 lg:w-40 lg:h-40 " +
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
