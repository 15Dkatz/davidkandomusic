'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import rangaBold from 'app/fonts/ranga-bold';

export default function LinkTitle() {
  const pathname = usePathname();
  const title = 'DAVID KANDO MUSIC';

  return (
    <div
      className={
        `${rangaBold.className} text-2xl md:text-4xl mb-5 md:mb-10
        underline decoration-4 decoration-blue-400`
      }
    >
      {pathname !== '/' ? <Link href="/" className="link">{title}</Link> : title}
    </div>
  );
}
