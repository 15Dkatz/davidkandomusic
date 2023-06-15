import './globals.css'
import ClientLog from './client-log';
import { Analytics } from '@vercel/analytics/react';
import { Ranga, Roboto_Condensed } from 'next/font/google';

const ranga = Ranga({
  subsets: ['latin'],
  weight: '700',
  variable: '--font-ranga-bold'
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-roboto-condensed'
});

// console.log(`ranga.variable`, ranga.variable);
// console.log(`robotoCondensed.variable`, robotoCondensed.variable);

export const metadata = {
  title: 'David Kando Music'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${ranga.variable} ${robotoCondensed.variable}`}>
      <body className="flex justify-center items-center min-h-screen font-roboto">
        {children}
      </body>
      <ClientLog />
      <Analytics />
    </html>
  )
}

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
// Also, have a "Build this website" item for people to take the course
