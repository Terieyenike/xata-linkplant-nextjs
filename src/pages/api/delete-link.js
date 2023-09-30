import { getXataClient } from "@/xata";

const handler = async (request, response) => {
  const xata = await getXataClient()
  const {id} = request.body
  await xata.db.Link.delete(id)
  response.end()
}

export default handler

// const record = await xata.db.Link.delete("rec_xyz");