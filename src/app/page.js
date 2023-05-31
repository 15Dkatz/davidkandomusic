
// [x] establish a responsive layout
// [] design the UI for each component type. Fun layout.
//    [] RECORD
//       [x] try a jsx approach for the record UI first. Then do images for the swag.
//    [] PORTRAIT
//       [] consider using the svg backgrounds from tailwind here to make nice portraits: https://heropatterns.com/ (Church on Sunday for Personality Quiz, I Like Food for something)
//       [] consider having a gradient background for portraits (Aurora Borealis mode)
// [] set up "shelves", aesthetic dividers, can I do this with <br /> components directly in the grid?

// Note: no need for min-h-screen because this will set the height to 100vh. This is 100 * 1% of the browser viewport. This is unwanted because the height of the shared nav will be added as scroll area on the bottom. Instead, set no height and allow the "record"s to establish this main page's height.
// use a lot of nice styling from the tailwind css pages, such as blurred backgrounds, etc.
// - nice aurora borealis background from tailwind here: https://tailwindcss.com/docs/max-width

// Themes
// [] Have an animating background, that simply changes every few mins, like squiggly lines that move every few seconds, fire that moves every few seconds, etc. Very low tech.
export default function Page() {
  return (
    <div></div>
  );
  // return (
  //   <div className="min-h-screen flex items-center justify-center">
  //     <div
  //       className={
  //         "flex flex-col justify-center items-center " +
  //         "bg-slate-100 rounded-xl p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20"
  //       }
  //     >
  //       <div className="flex justify-center mb-5 lg:mb-10">
  //         <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
  //           DAVIDKANDOMUSIC
  //         </div>
  //       </div>
  //       <div className="grid grid-flow-dense grid-cols-5 lg:grid-cols-8 gap-8 ml-10 mr-10">
  //         {
  //           ITEMS.map(item => {
  //             const { id, type, attributes } = item;
  //             const { gridSize, Component } = ITEM_TYPE_SETTINGS[type];

  //             return (
  //               <div
  //                 key={id}
  //                 className={`${gridSize} flex justify-center`}
  //               >
  //                 <Component {...attributes} />
  //               </div>
  //             )
  //           })
  //         }
  //       </div>
  //     </div>
  //   </div>
  // )
}
