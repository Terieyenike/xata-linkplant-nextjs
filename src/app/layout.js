import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'LinkView',
  description: 'A link-in-bio tool like Linktree that allows you to create a webpage that has all your links in one place',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header className="text-gray-600 border-b-2">
      <div
        className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="font-medium text-gray-900 mb-4 md:mb-0">
          <span className="text-xl">🌱 LinkPlant</span>
        </Link>
        <nav
          className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <p className="mr-5 hover:text-gray-900"
            >view links</p>
        </nav>
        <Link href="/link/create">
          <button
            className="inline-flex items-center bg-green-200 border-0 py-2 px-6 focus:outline-none hover:bg-green-300 rounded text-base mt-4 md:mt-0">
            Add Link
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </button>
        </Link>
      </div>
    </header>
    {children}
    </body>
    </html>
  )
}
