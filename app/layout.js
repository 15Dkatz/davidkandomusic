import '../globals.css'
import ClientLog from './client-log';
import { Analytics } from '@vercel/analytics/react';
import { Ranga, Roboto_Condensed } from 'next/font/google';

const ranga = Ranga({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-ranga-bold'
});

const robotoCondensed = Roboto_Condensed({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-roboto-condensed'
});

export const metadata = {
  title: 'David Kando Music'
};

export default function RootLayout({ children }) {
  return (
    <html className={`${ranga.variable} ${robotoCondensed.variable}`}>
      <body className="flex justify-center min-h-screen font-roboto">
        {children}
      </body>
      <ClientLog />
      <Analytics />
    </html>
  )
}

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
// Also, have a "Build this website" item for people to take the course
