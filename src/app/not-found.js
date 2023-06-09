import '../globals.css';

import localFont from 'next/font/local';
import Link from 'next/link';

const rangaBold = localFont({
  src: './fonts/Ranga-Bold.ttf'
});

// TODO: Why aren't the tailwind css classNames working?
export default function NotFound() {
  return (
    <div className={`${rangaBold.className} w-full h-[100vh] flex flex-col items-center justify-center text-4xl`}>
      <h1>404 - Page not found.</h1>
      <h2>Try going to the main page, <Link href="/" className="link">here</Link>.</h2>
    </div>
  );
}
