import './globals.css'

import { Roboto_Condensed } from 'next/font/google';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: '400'
});

export const metadata = {
  title: 'davidkandomusic',
  description: "Music for when you're just hanging around...",
}

// TODO: Create a navbar that invites the user back home, and shows which page they're on
// TODO: Navigation should only appear in nested pages. Perhaps I can achieve this with a simple Home button.
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
