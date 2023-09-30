import Link from "next/link"

export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('successfully sent')
  }
  return (
    <section className="mx-auto p-5 flex flex-col mt-10 my-0 md:w-3/4 lg:w-3/5">
      <Link href={'/'}>
      <p className="text-slate-400">
        <span>&larr;</span> Back to all links
      </p>
      </Link>
      <h1 className="text-4xl mt-5 border-b my-4">Link Form</h1>
      <form className="mt-5 odd:mb-5 even:mt-6">
        <div>
          <label htmlFor="text" className="block"><span className="block text-slate-700 text-sm font-medium mb-2">Text</span></label>
          <input type="text" placeholder="link text" className="w-full px-4 py-2 border bg-white border-slate-300 shadow-sm rounded-lg appearance-none focus:outline-none block placeholder-slate-400" id='text' />
        </div>
        <div className="mt-5">
          <label htmlFor="url" className="block"><span className="block text-slate-700 text-sm font-medium mb-2">Url</span></label>
          <input type="text" placeholder="website url" className="w-full px-4 py-2 border bg-white border-slate-300 shadow-sm rounded-lg appearance-none focus:outline-none block placeholder-slate-400" id='text' />
        </div>
        <div className="max-sm:w-full mt-5">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white border-x-blue-500 rounded-md">Save</button>
        </div>
      </form>
    </section>
  )
}


// <div className="flex max-sm:justify-end items-center max-sm:w-full"><button className="w-full bg-coral-red rounded-full text-white border-coral-red px-7 py-4">Join waitlist</button></div>