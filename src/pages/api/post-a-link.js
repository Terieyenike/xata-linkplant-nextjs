import { getXataClient } from "@/xata";

const handler = async (request, response) => {
  const xata = getXataClient()
  const { text, url } = request.body

  await xata.db.Link.create({
    text,
    url
  })

  response.end()
}

export default handler
