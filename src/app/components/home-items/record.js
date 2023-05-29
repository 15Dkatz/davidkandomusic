import Image from 'next/image';

// TODO: Display the picture on the square part of the record UI.
// On play, attempt to play the embedded player fixed to the bottom of the screen. Confirm that this leads to a stream though.
// or, have it launch spotify

// TODO: First try an embedded spotify player. Backup options: set up inline links to the discography page, upon click.
export default function Record({ title, mainImage, recordImage }) {
  return (
    <div className="flex flex-row">
      <div className="relative w-28 h-28 lg:w-40 lg:h-40 border-[2px] border-black">
        <Image
          src={mainImage}
          alt={title}
          fill
        />
      </div>
      <div
        className={
          "relative block bg-slate-500 " +
          "w-14 h-28 lg:w-20 lg:h-40 " +
          "rounded-tl-none rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-none"
        }
      >
        <Image
          src={recordImage}
          alt="record image"
          fill
          // 1024px is lg, so first specifty the width up to lg. This is w-14 = 56px. Then lg and above size is w-20 = 80px.
          sizes="(max-width: 1024px) 56px, 80px"
        />
      </div>
    </div>
  );
};
