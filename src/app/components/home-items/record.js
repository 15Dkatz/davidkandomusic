import Image from 'next/image';

// TODO: Display the picture on the square part of the record UI.
// On play, attempt to play the embedded player fixed to the bottom of the screen. Confirm that this leads to a stream though.
// or, have it launch spotify

export default function Record({ title, mainImage, recordImage }) {
  return (
    <div className="flex flex-row">
      <div className="relative w-20 h-20 md:w-40 md:h-40 border-[2px] border-black">
        <Image
          src={mainImage}
          alt={title}
          fill
        />
      </div>
      <div
        className={
          "relative bg-slate-500 " +
          "w-10 h-20 md:w-20 md:h-40 " +
          // "border-r-4 border-t-4 border-b-4 border-black " +
          "rounded-tl-none rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-none"
        }
      >
        <Image
          src={recordImage}
          alt="record image"
          fill
        />
          {/* inner semicircle to look like a record */}
          {/* top-[24px]: outer layer h-20 is 5rem=80x. h-5 is 1.25rem=20px. Upper border is 4px. lower border is 4px. Equidistant spacing is then (80-20-4-4)/2 = 26 */}
          {/* md:top-[56]: outer layer h-40 is 10rem=160px. md:h-10 is 2.5rem (40px). Upper border is 4px. lower border is 4px. Equidistant spacing is then (160-40-4-4)/2 = 56 */ }
          {/* <span
            className={
              // TODO: Change the background color according to the theme
              "bg-blue-400 " +
              "absolute w-2.5 h-5 top-[26px] md:w-5 md:h-10 md:top-[56px] " +
              "border-r-4 border-t-4 border-b-4 border-black " +
              "rounded-tl-none rounded-tr-[4rem] rounded-br-[4rem] rounded-bl-none"
            }
          /> */}
      </div>
    </div>
  );
};
