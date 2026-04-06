import { NotionAPI } from "notion-client"

export const getRecordMap = async (pageId: string) => {
  const api = new NotionAPI()
  console.log("DEBUG getRecordMap pageId:", pageId)
  const recordMap = await api.getPage(pageId)
  return recordMap
}
