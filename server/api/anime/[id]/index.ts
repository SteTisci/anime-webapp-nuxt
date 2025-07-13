import { mapIAnimeToAnime } from '~/server/utils/mapper'

export default defineEventHandler(async event => {
  const anime = await AnimeSchema.findById({ _id: event.context.params?.id }).lean()

  return {
    success: true,
    data: anime ? mapIAnimeToAnime(anime) : null,
  }
})
