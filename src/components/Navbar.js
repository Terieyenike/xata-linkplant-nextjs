import Link from "next/link"

const  Navbar = () => {
  return (
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
          <Link href='/' className="mr-5 hover:text-gray-900"
            >view links</Link>
        </nav>
        <Link href="/create">
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
  )
}

export default Navbar