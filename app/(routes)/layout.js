'use client';

import { usePathname } from 'next/navigation';
import rangaBold from 'app/fonts/ranga-bold';
import { PAGE_METADATA_MAP } from './data';

export default function Root({ children }) {
  const pathname = usePathname();
  console.log(`/pathname`, pathname);

  const { title, background } = PAGE_METADATA_MAP[pathname];

  return (
    <div
      className={
        `w-full p-1 pb-10 pt-10 m-2 md:p-10 md:m-20 text-md md:text-xl
        flex flex-col justify-center items-center
        ${background} bg-no-repeat bg-cover`
      }
    >
      <div className="flex justify-center mb-5 md:mb-10">
        <div className={`${rangaBold.className} text-2xl md:text-4xl underline decoration-4 decoration-blue-400`}>
          {title}
        </div>
      </div>
      <div className="p-1 pl-4 pr-4">
        {children}
      </div>
    </div>
  );
}
