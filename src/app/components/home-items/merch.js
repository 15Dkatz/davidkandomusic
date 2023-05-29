export default function Merch({ title }) {
  // TODO: NOTE the outer div is col-span-1 on mobile, but col-span-2 on desktop. Therefore, the image I create must accomodate this.
  return (
    <div>
      <div className="w-14 h-28 lg:w-20 lg:h-40 border border-black rounded">
        {title}
      </div>
    </div>
  );
};
