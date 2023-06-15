'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkTitle() {
  const pathname = usePathname();
  const title = 'DAVID KANDO MUSIC';

  return (
    <div className="mb-5 title">
      {pathname !== '/' ? <Link href="/" className="link">{title}</Link> : title}
    </div>
  );
}
