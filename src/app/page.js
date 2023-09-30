"use client"
import Link from "next/link"
import { getXataClient } from "@/xata"


export default async function Home() {
  const xata = getXataClient()
  const links = await xata.db.Link.getAll()

  const deleteLink = (id) => {
    fetch('/api/delete-link', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id
      }).then(() => window.location.reload())
    }).catch(error => console.log(error))
  }

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
              {links.map((link) => (
                <tr key={link.id}>
          <td className="px-4 py-3">{link.text}</td>
          <td className="px-4 py-3">
            <a href={link.url} target="_blank">
              {link.url} <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"> <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
</svg>
            </a>
          </td>

          <td className="px-4 py-3 underline text-blue-600"><a href="#">Edit</a></td>
          <td className="px-4 py-3 underline text-red-600">
                <button onClick={() => deleteLink(link.id)}>Delete</button>
          </td>
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
