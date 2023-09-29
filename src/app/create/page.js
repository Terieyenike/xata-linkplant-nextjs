import Link from "next/link"

export default function Page() {
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('successfully sent')
  }
  return (
    <section className="container mx-auto p-5 flex flex-col mt-10">
      <Link href={'/'}>
      <p>
        <span>&larr;</span> Back to all links
      </p>
      </Link>
    </section>
  )
}