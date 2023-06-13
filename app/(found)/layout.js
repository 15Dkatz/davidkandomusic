'use client';

import { GRID_ITEM_DATAS } from './data';
import GridItem from './grid-item';
import LinkTitle from './link-title';

// An alternative is to have a shared component like PageStructure and avoid this Layout+SEGMENT_DATA_MAP
// But I believe it's better in this case to lean into the Next.js layout/page infrastructure
export default function Layout({ children }) {
  return (
    <div className="w-[350px] md:w-[1000px] flex flex-col items-center justify-start mt-5 md:mt-10">
      <div
        className={
          `w-full p-1 pb-10 pt-10 m-1 md:p-10 md:m-20 md:mb-2
          flex flex-col justify-center items-center bg-slate-100`
        }
      >
        <LinkTitle />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-1 ml-1 mr-1 md:ml-10 md:mr-10">
          {
            GRID_ITEM_DATAS.map(gridItemData => {
              const { id, attributes } = gridItemData;

              return (
                <div key={id} className="flex justify-center">
                  <GridItem {...attributes} />
                </div>
              )
            })
          }
        </div>
      </div>
      {children}
    </div>
  );
}
