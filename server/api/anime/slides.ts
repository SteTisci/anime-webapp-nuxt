export default defineEventHandler(async () => {
  const slides = await AnimeSchema.find({}).sort({ rating: -1 }).select('_id title bannerImage').limit(30).lean()

  const mappedSlides = slides.map(slide => ({
    id: slide._id.toString(),
    title: slide.title,
    bannerImage: slide.bannerImage,
  }))

  return {
    success: true,
    data: mappedSlides,
  }
})
