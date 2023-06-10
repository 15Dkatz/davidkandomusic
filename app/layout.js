import '../globals.css'

import robotoCondensed from './fonts/roboto-condensed';

export const metadata = {
  title: 'David Kando Music'
};

// TODO: Turn all multistring classNames into a pair of template literals
// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
export default function Root({ children }) {
  return (
    <html className={`${robotoCondensed.className}`}>
      <body className="font-roboto flex justify-center min-h-screen">
        {children}
      </body>
    </html>
  )
}
