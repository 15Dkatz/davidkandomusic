import { Suspense } from 'react';

const Loading = () => (
  <div className="absolute w-[300px] h-[352px] rounded bg-slate-100 pt-[56px] pl-[60px]">
    <div className="w-[176px] h-[176px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[100px] h-[20px] mt-[10px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[80px] h-[10px] mt-[10px] rounded bg-slate-200 animate-pulse" />
    <div className="w-[140px] h-[8px] mt-[20px] rounded bg-slate-200 animate-pulse" />
  </div>
);

export default function LazyPlayerDisplay({ lazyPlayer }) {
  return (
    <div className={"text-md md:text-xl p-1"}>
      <div className="relative w-[300px] h-[352px]">
        <div className="absolute w-[300px] h-[352px]">
          <Suspense fallback={<Loading />}>
            {lazyPlayer}
          </Suspense>
        </div>
      </div>
    </div>
  );
}