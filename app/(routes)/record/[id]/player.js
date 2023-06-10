import { Suspense } from 'react';

const Loading = () => (
  <div className="absolute w-[300px] h-[352px] rounded bg-slate-100 pt-[56px] pl-[60px]">
    <div className="w-[176px] h-[176px] rounded bg-slate-200 animate-pulse" />
  </div>
);

export default function Player({ embed }) {
  return (
    <div className="p-1">
      <div className="relative w-[300px] h-[352px]">
        <div className="absolute w-[300px] h-[352px]">
          <Suspense fallback={<Loading />}>
            {embed}
          </Suspense>
        </div>
      </div>
    </div>
  );
}