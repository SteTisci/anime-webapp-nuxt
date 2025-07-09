import type { Query } from '~/server/types'

export default defineEventHandler(async event => {
  const rawQuery = getQuery(event)

  const query: Query = {
    page: rawQuery.page ? Number(rawQuery.page) : 1,
    title: rawQuery.title ? String(rawQuery.title) : undefined,
    author: rawQuery.author ? String(rawQuery.author) : undefined,
    type: rawQuery.type ? String(rawQuery.type) : undefined,
    lang: rawQuery.lang ? String(rawQuery.lang) : undefined,
    releaseYear: rawQuery.releaseYear ? Number(rawQuery.releaseYear) : undefined,
    status: rawQuery.status ? String(rawQuery.status) : undefined,
    limit: rawQuery.limit ? Number(rawQuery.limit) : 0,
  }

  const mongoQuery: any = {}

  if (query.title) mongoQuery.title = { $regex: query.title, $options: 'i' }
  if (query.author) mongoQuery.author = { $regex: query.author, $options: 'i' }
  if (query.type) mongoQuery.type = { $regex: query.type, $options: 'i' }
  if (query.status) mongoQuery.status = { $regex: query.status, $options: 'i' }
  if (query.lang) mongoQuery.lang = query.lang
  if (query.releaseYear) mongoQuery.releaseYear = query.releaseYear

  const animeData = await AnimeSchema.find(mongoQuery)
    .select({ episodes: 0 })
    .sort({ rating: -1 })
    .skip((query.page! - 1) * 30)
    .limit(query.limit!)
    .lean()

  return {
    success: true,
    data: animeData,
  }
})
