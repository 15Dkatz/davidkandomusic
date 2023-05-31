import Link from 'next/link';
import { Ranga } from 'next/font/google'

const ranga = Ranga({
  subsets: ['latin'],
  weight: '700'
});

// TODO: Consider subtle linear gradient
export default function PageLayout({ children, background, title }) {
  const bg = background ? background + " " : "bg-slate-100 ";
  const titleToDisplay = title ? title : 'Example';

  return (
    <div
      className={
        "w-full p-1 pb-10 pt-10 m-2 lg:p-10 lg:m-20 " +
        "flex flex-col justify-center items-center " +
        bg + "bg-no-repeat bg-cover "
      }
    >
      {/* TODO: make a title that matches the davidkandomusic header */}
      <div className="flex justify-center mb-5 lg:mb-10">
        <div className={`${ranga.className} text-2xl lg:text-4xl underline underline-offset-1 decoration-4 decoration-blue-400`}>
          {titleToDisplay}
        </div>
      </div>
      {children}
    </div>
  )
}