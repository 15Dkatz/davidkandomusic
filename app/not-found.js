import '../globals.css';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="text-center text-4xl">
      <h1 className="font-ranga">404 - Page not found.</h1>
      <h2 className="font-roboto">Try going to the main page, <Link href="/" className="link">here</Link>.</h2>
    </div>
  );
}
