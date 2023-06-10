import './globals.css'
import { Figtree } from 'next/font/google'

const fig = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Bermuda Spotify Clone',
  description: 'Web Player: Music for everyone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`bg-black text-white ${fig.className}`}>
        {children}
      </body>
    </html>
  )
}
