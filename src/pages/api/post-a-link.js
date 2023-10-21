import { getXataClient } from "@/xata";

export default async function handler (request, response) {
  const xata = getXataClient()
  const { text, url } = request.body

  await xata.db.Link.create({
    text,
    url
  })

  response.end()
}
