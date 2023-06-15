import { GRID_DATA_ITEMS } from '../data';
import GridItem from './grid-item';
import LinkTitle from './link-title';

export default function Layout({ children }) {
  return (
    <div className="w-[350px] lg:w-[1000px] flex flex-col items-center mt-2">
      <div
        className={
          `w-full bg-slate-100 flex flex-col items-center pb-10 pt-10 m-2 lg:mt-10`
        }
      >
        <LinkTitle />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {
            GRID_DATA_ITEMS.map(gridDataItem => {
              const { id, attributes } = gridDataItem;

              return <GridItem {...attributes} key={id} />;
            })
          }
        </div>
      </div>
      {children}
    </div>
  );
}
