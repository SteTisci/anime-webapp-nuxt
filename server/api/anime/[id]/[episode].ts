export default defineEventHandler(async event => {
  const anime = await AnimeSchema.findById(event.context.params?.id).select('paramUri episodes')

  const episode = await EpisodeSchema.findById(anime?.episodes[Number(event.context.params?.episode) - 1]).lean()

  const videoUrl = await (await fetch(`${process.env.REQ_SLUG_VIDEO}${episode?.paramUri}`)).text()

  await EpisodeSchema.updateOne({ _id: episode?._id }, { $set: { videoUrl: videoUrl } })

  return { success: true, data: episode }
})
