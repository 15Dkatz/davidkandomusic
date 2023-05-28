// TODO: Display the picture on the square part of the record UI.

export default function Record({ title }) {
  return (
    <div className="flex flex-row">
      <div className="w-20 h-20 sm:w-40 sm:h-40 border-4 border-black">
        {title}
      </div>
      <div
        className={
          "relative bg-slate-400 " +
          "w-10 h-20 sm:w-20 sm:h-40 " +
          "border-r-4 border-t-4 border-b-4 border-black " +
          "rounded-tl-none rounded-tr-[5rem] rounded-br-[5rem] rounded-bl-none"
        }
      >
          {/* inner semicircle to look like a record */}
          {/* top-[24px]: outer layer h-20 is 5rem=80x. h-5 is 1.25rem=20px. Upper border is 4px. lower border is 4px. Equidistant spacing is then (80-20-4-4)/2 = 26 */}
          {/* sm:top-[56]: outer layer h-40 is 10rem=160px. sm:h-10 is 2.5rem (40px). Upper border is 4px. lower border is 4px. Equidistant spacing is then (160-40-4-4)/2 = 56 */ }
          <span
            className={
              // TODO: Change the background color according to the theme
              "bg-red-400 " +
              "absolute w-2.5 h-5 top-[26px] sm:w-5 sm:h-10 sm:top-[56px] " +
              "border-r-4 border-t-4 border-b-4 border-black " +
              "rounded-tl-none rounded-tr-[4rem] rounded-br-[4rem] rounded-bl-none"
            }
          />
      </div>
    </div>
  );
};
