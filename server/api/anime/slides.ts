export default defineEventHandler(async () => {
  const slides = await AnimeSchema.find({}).sort({ rating: -1 }).select('_id title bannerImage').limit(30).lean()

  return {
    success: true,
    data: slides,
  }
})
