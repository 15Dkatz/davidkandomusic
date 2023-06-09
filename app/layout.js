import '../globals.css'

import localFont from 'next/font/local';

const robotoCondensed = localFont({
  src: './fonts/RobotoCondensed-Regular.ttf'
});

export const metadata = {
  title: 'David Kando Music'
};

// TODO: In the future, with more songs, have a "load more" button that allows the user to see more than 8 items
export default function Root({ children }) {
  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
