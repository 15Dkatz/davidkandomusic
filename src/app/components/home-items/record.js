import Image from 'next/image';

// TODO: Display the picture on the square part of the record UI.
// On play, attempt to play the embedded player fixed to the bottom of the screen. Confirm that this leads to a stream though.
// or, have it launch spotify

export default function Record({ title, mainImage, recordImage }) {
  return (
    <div className="flex flex-row">
      <div className="relative w-24 h-24 lg:w-40 lg:h-40 border-[2px] border-black">
        <Image
          src={mainImage}
          alt={title}
          fill
        />
      </div>
      <div
        className={
          "relative block bg-slate-500 " +
          "w-12 h-24 lg:w-20 lg:h-40 " +
          "rounded-tl-none rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-none"
        }
      >
        <Image
          src={recordImage}
          alt="record image"
          fill
          // 1024px is lg, so first specifty the width up to lg. This is w-12 = 48px. Then lg and above size is w-20 = 80px.
          sizes="(max-width: 1024px) 48px, 80px"
        />
      </div>
    </div>
  );
};
