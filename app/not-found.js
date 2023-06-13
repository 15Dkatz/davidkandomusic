import '../globals.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className={'font-ranga w-full h-[100vh] flex flex-col items-center justify-center text-4xl'}>
      <h1>404 - Page not found.</h1>
      <h2>Try going to the main page, <Link href="/" className="link">here</Link>.</h2>
    </div>
  );
}
