import { defineMongooseModel } from '#nuxt/mongoose'
import { Types } from 'mongoose'

export const AnimeSchema = defineMongooseModel<IAnime>({
  name: 'Anime',
  schema: {
    title: { type: String, required: true },
    paramUri: { type: String, required: true, unique: true },
    thumbnail: { type: String, required: true },
    bannerImage: String,
    description: String,
    type: { type: String, required: true },
    author: { type: String, required: true },
    releaseYear: { type: Number, required: true },
    rating: { type: Number, required: true },
    status: {
      type: String,
      required: true,
      enum: ['FINISHED', 'RELEASING', 'NOT_YET_RELEASED', 'CANCELLED', 'HIATUS'],
    },
    numberOfEpisodes: { type: Number, required: true },
    duration: { type: Number, required: true },
    lang: { type: String, required: true },
    tags: { type: [String], required: true },
    aniListId: { type: Number, required: true, unique: true },
    episodes: [{ type: Types.ObjectId, ref: 'Episode' }],
  },
  options: { timestamps: true },
})
