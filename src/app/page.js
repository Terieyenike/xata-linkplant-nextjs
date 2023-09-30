// "use client"
import Link from "next/link"
import { getXataClient } from "@/xata"

const xata = getXataClient()

export default async function Home() {
  const details = await xata.db.Link.getAll()
  const profile = await xata.db.Profile.getAll()

  return (
    <main>
    <h1 className="text-4xl text-center my-10">All My Links</h1>
    <section className='max-w-7xl mx-auto my-0 w-4/5'>
        <div className="w-full mx-auto overflow-auto">
          <table className="table-auto w-full text-left whitespace-no-wrap">
              <thead>
                <tr>
          <th
            className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Text
          </th>
          <th
            className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            URL
          </th>

          <th
            className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Edit
          </th>
          <th
            className="px-4 py-3 tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">
            Delete
          </th>
                </tr>
              </thead>
              <tbody>
              {details.map((detail) => (
                <tr key={detail.id}>
          <td className="px-4 py-3">{detail.text}</td>
          <td className="px-4 py-3">
            <a href={detail.url} target="_blank">
              {detail.url}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </td>

          <td className="px-4 py-3 underline text-blue-600"><a href="#">Edit</a></td>
          <td className="px-4 py-3 underline text-red-600"><a href="#">Delete</a></td>
                </tr>
              ))}

              </tbody>
            </table>

              <Link href="/create">
                <p
                  className="mt-6 py-2  border rounded border-gray-400 text-gray-500 hover:cursor-pointer hover:bg-gray-100 hover:border-gray-500 text-center">
                  Add New +
                </p>
              </Link>

        </div>
      </section>
    </main>
  )
}
