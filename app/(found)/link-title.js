'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LinkTitle() {
  const pathname = usePathname();
  const title = 'DAVID KANDO MUSIC';

  // TODO: Can a shared class be made off of tailwind classNames?
  return (
    <div className="font-ranga mb-5 text-2xl lg:text-4xl underline decoration-3 decoration-blue-400">
      {pathname !== '/' ? <Link href="/" className="link">{title}</Link> : title}
    </div>
  );
}
