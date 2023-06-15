export default function PageStructure({ children, background, title }) {
  return (
    <div
      className={
        `w-full flex flex-col justify-center items-center
        p-5 pt-10 lg:p-10 text-md lg:text-xl
        ${background} bg-no-repeat bg-cover`
      }
      >
      <div className="title">
        {title}
      </div>
      <br />
      <div>
        {children}
      </div>
    </div>
  )
}
