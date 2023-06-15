export default function PageStructure({ children, background, title }) {
  return (
      <div
      className={
        `w-full p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 text-md lg:text-xl
        flex flex-col justify-center items-center
        ${background} bg-no-repeat bg-cover`
      }
      >
      <div className="flex justify-center mb-5 lg:mb-10">
        <div className={'font-ranga text-2xl lg:text-4xl underline decoration-4 decoration-blue-400'}>
          {title}
        </div>
      </div>
      <div className="p-1 pl-4 pr-4">
        {children}
      </div>
    </div>
  )
}
