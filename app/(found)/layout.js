import { GRID_DATA_ITEMS } from '../data';
import Link from 'next/link';
import LinkTitle from './link-title';

export default function Layout({ children }) {
  return (
    <div className="w-[350px] lg:w-[1000px] flex flex-col items-center pt-4 pb-4">
      <div className="w-full bg-slate-100 flex flex-col items-center pb-10 pt-10">
        <LinkTitle />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {
            GRID_DATA_ITEMS.map(gridDataItem => {
              const { id, attributes } = gridDataItem;

              return (
                <Link key={id} href={attributes.href}>
                  <div
                    className={
                      `${attributes.background} w-36 h-36 lg:w-52 lg:h-52
                      flex items-end`
                    }
                  >
                    <div
                      className={
                        `w-full text-center font-ranga text-sm lg:text-2xl banner`
                      }
                    >
                      {attributes.text}
                    </div>
                  </div>
                </Link>
              )
            })
          }
        </div>
      </div>
      <br />
      {children}
    </div>
  );
}
