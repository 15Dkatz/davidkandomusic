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
        "w-11/12 md:p-20 md:w-8/12"
      }
    >
      {/* A nav component would be nice with further nesting. But for, a simple return home button should work */}
      <div className="w-full md:mb-2">
        <Link
          href="/"
          className={`${ranga.className} text-xl md:text-3xl underline underline-offset-1 decoration-4 text-purple-800`}
        >
          Return home
        </Link>
      </div>
      <div
        className={
          "w-full flex flex-col justify-center items-center " +
          bg + "bg-no-repeat bg-cover " +
          "rounded-xl p-1 pb-10 pt-10 m-2 md:p-10"
        }
      >
        {children}
      </div>
    </div>
  )
}