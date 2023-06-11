import '../globals.css'
import ClientLog from './client-log';
import { Analytics } from '@vercel/analytics/react';

import robotoCondensed from 'app/fonts/roboto-condensed';

export const metadata = {
  title: 'David Kando Music'
};

// TODO: Address `Failed to read the 'localStorage' property from 'Window': Access is denied for this document.`
export default function Root({ children }) {
  return (
    <html className={`${robotoCondensed.className}`}>
      <body className="flex justify-center min-h-screen">
        {children}
      </body>
      <ClientLog />
      <Analytics />
    </html>
  )
}

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
// Also, have a "Build this website" item for people to take the course
// Then move "In Perpetuity" or Discography to load more
