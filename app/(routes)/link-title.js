'use client';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

export default function LinkTitle() {
  const pathname = usePathname();
  const title = 'DAVID KANDO MUSIC';

  return pathname !== '/' ? <Link href="/">{title}</Link> : title;
}
