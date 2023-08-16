import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Todo APP',
  description: 'My Todo App created bt Brian Serem',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-800 text-slate-100 container mx-auto p-4`}>
        {children}
         </body>
    </html>
  )
}
