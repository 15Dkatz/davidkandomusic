import localFont from 'next/font/local';

const rangaBold = localFont({
  src: '../../fonts/Ranga-Bold.ttf'
});

// Notice the {children} prop to allow the insertion of Server Components within this Client Component
// This follows this pattern: https://nextjs.org/docs/getting-started/react-essentials#recommended-pattern-passing-server-components-to-client-components-as-props
// With this approach PageLayout is still rendered on the client, but the content is pre-rendered on the server
export default function PageLayout({ children, background, title }) {
  return (
    <div
      className={
        "w-full p-1 pb-10 pt-10 m-2 md:p-10 md:m-20 " +
        "flex flex-col justify-center items-center " +
        background + " bg-no-repeat bg-cover "
      }
    >
      <div className="flex justify-center mb-5 md:mb-10">
        <div className={`${rangaBold.className} text-2xl md:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
          {title}
        </div>
      </div>
      {children}
    </div>
  )
}