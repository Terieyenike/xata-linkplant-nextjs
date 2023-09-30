"use client"
import { useState } from "react"
import Link from "next/link"
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()

  const defaultFormFields = {
    text: '',
    url: ''
  }

  const [formFields, setFormFields] = useState(defaultFormFields)
  const [error, setError] = useState(null)

  const { text, url } = formFields

  const resetFormFields = () => {
    setFormFields(defaultFormFields)
  }

  const submit = () => {
    fetch('/api/post-a-link', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        url
      })
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!text || !url) {
      setError('please enter text and url')
      return
    }
    submit()
    resetFormFields()
    router.push('/')
  }

  const isValidUrl = (url) => {
    const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');
    return regex.test(url)
  }

  const handleChange = (e) => {
    const {name, value} = e.target
    if (!isValidUrl(value)) {
      setError('URL is invalid')
    } else {
      setError(null)
    }
    setFormFields({...formFields, [name]: value})
  }

  return (
    <section className="mx-auto p-5 flex flex-col mt-10 my-0 md:w-3/4 lg:w-3/5">
      <Link href={'/'}>
      <p className="text-slate-400">
        <span>&larr;</span> Back to all links
      </p>
      </Link>
      <h1 className="text-4xl mt-5 border-b my-4">Link Form</h1>
      <form className="mt-5 odd:mb-5 even:mt-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text" className="block"><span className="block text-slate-700 text-sm font-medium mb-2">Text</span></label>
          <input type="text" name='text' value={text} placeholder="link text" className="w-full px-4 py-2 border bg-white border-slate-300 shadow-sm rounded-lg appearance-none focus:outline-none block placeholder-slate-400" id='text'onChange={handleChange} />
        </div>
        <div className="mt-5">
          <label htmlFor="url" className="block"><span className="block text-slate-700 text-sm font-medium mb-2">Url</span></label>
          <input type="text" name='url' value={url} placeholder="https://example.com" className="w-full px-4 py-2 border bg-white border-slate-300 shadow-sm rounded-lg appearance-none focus:outline-none block placeholder-slate-400" id='text' onChange={handleChange} />
        </div>
        {error && <p className="text-sm text-red-500 mt-3 font-medium">{error}</p>}
        <div className="max-sm:w-full mt-5">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 text-white border-x-blue-500 rounded-md">Save</button>
        </div>
      </form>
    </section>
  )
}
