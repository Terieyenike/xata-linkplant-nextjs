import { getXataClient } from "@/xata";

const handler = async (request, response) => {
  const xata = getXataClient()
  await xata.db.Link.delete("rec_ckc1heriene6sendaa40")
}

export default handler

// const record = await xata.db.Link.delete("rec_xyz");