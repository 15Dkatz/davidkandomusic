import './globals.css'

// TODO: Choose a different font to be the bass font
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'davidkandomusic',
  description: "Music for when you're just hanging around...",
}

// TODO: Create a navbar that invites the user back home, and shows which page they're on
export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <div>Test: shared nav. TODO: Find a standard nav component</div>
        {children}
      </body>
    </html>
  )
}
