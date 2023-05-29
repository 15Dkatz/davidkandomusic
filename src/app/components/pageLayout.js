import Link from 'next/link';
import { Ranga } from 'next/font/google'

const ranga = Ranga({
  subsets: ['latin'],
  weight: '400'
});

// TODO: Consider subtle linear gradient
export default function PageLayout({ children, background }) {
  const bg = background ? background + " " : "bg-slate-100 ";

  return (
    <div
      className={
        "min-h-screen flex flex-col items-center justify-center " +
        "w-11/12 lg:p-20 sm:w-9/12 mt-5"
      }
    >
      {/* A nav component would be nice with further nesting. But for, a simple return home button should work */}
      <div className="w-full lg:mb-2">
        <Link
          href="/"
          className={`${ranga.className} text-xl lg:text-4xl underline underline-offset-1 decoration-4 text-purple-800`}
        >
          Return home
        </Link>
      </div>
      <div
        className={
          "w-full flex flex-col justify-center items-center " +
          bg + "bg-no-repeat bg-cover " +
          "rounded-xl p-2 pb-10 pt-10 m-2 lg:p-10"
        }
      >
        {children}
      </div>
    </div>
  )
}