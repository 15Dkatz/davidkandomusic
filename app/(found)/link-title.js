'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkTitle() {
  const pathname = usePathname();
  const title = 'DAVID KANDO MUSIC';

  return (
    <div
      className={
        `font-ranga text-2xl lg:text-4xl mb-5
        underline decoration-3 decoration-blue-400`
      }
    >
      {pathname !== '/' ? <Link href="/" className="link">{title}</Link> : title}
    </div>
  );
}
