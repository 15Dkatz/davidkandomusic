import { notFound } from 'next/navigation';

export default function NotFoundCatchAll() {
  // console.log(`redirect with NotFoundCatchAll`);
  notFound();
}
