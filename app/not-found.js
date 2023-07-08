import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <div className="font-ranga text-4xl">404 - Page Not Found.</div>
      {/* <div className="font-roboto">Try going to the <a className="link" href="/">home page</a>.</div> */}
      <div className="font-roboto text-2xl">Try going to the <Link className="link" href="/">home page</Link>.</div>
    </div>
  );
}