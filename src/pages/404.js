import '../globals.css';

import localFont from 'next/font/local';
import Link from 'next/link';

const rangaBold = localFont({
  src: '../fonts/Ranga-Bold.ttf'
});

// TODO: Why aren't the tailwind css classNames working?
export default function Custom404() {
  return (
    <div className={`${rangaBold.className} w-full h-full flex justify-center`}>
      <h1>404 - Page not found.</h1>
      <h2>Try going to the main page, <Link href="/">here</Link>.</h2>
    </div>
  );
}
