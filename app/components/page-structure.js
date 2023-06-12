import rangaBold from 'app/fonts/ranga-bold';

// Notice the {children} prop to allow the insertion of Server Components within this Client Component
// This follows this pattern: https://nextjs.org/docs/getting-started/react-essentials#recommended-pattern-passing-server-components-to-client-components-as-props
// With this approach PageStructure is still rendered on the client, but the content is pre-rendered on the server
export default function PageStructure({ children, background, title }) {
  return (
    <div
      className={
        `w-full p-1 pb-10 pt-10 m-2 md:p-10 md:m-20 text-md md:text-xl
        flex flex-col justify-center items-center
        ${background} bg-no-repeat bg-cover`
      }
    >
      <div className="flex justify-center mb-5 md:mb-10">
        <div className={`${rangaBold.className} text-2xl md:text-4xl underline decoration-4 decoration-blue-400`}>
          {title}
        </div>
      </div>
      <div className="p-1 pl-4 pr-4">
        {children}
      </div>
    </div>
  )
}