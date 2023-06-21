import Link from 'next/link';
import './globals.css';

// TODO: Open an issue with Next.js where the Link class fails to navigate to "/"
export default function NotFound() {
  return (
    <div className="text-center text-2xl">
      <div className="font-ranga text-4xl">404 - Page Not Found.</div>
      {/* <div className="font-roboto">Try going to the <a className="link" href="/">home page</a>.</div> */}
      <div className="font-roboto">Try going to the <Link className="link" href="/">home page</Link>.</div>
    </div>
  );
}
