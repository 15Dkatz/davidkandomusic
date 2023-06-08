import '../globals.css'

import localFont from 'next/font/local';
import RootLayout from './root-layout';

const robotoCondensed = localFont({
  src: '../fonts/RobotoCondensed-Regular.ttf'
});

export const metadata = {
  title: 'davidkandomusic',
  description: "Music for when you're just hanging around...",
};

// Refactor all links to use a shared className that I define in globals css
export default function Root({ children }) {
  return (
    <html>
      <body className={`${robotoCondensed.className} flex justify-center min-h-screen`}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}
