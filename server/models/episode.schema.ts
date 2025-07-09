import { defineMongooseModel } from '#nuxt/mongoose'
import type { IEpisode } from '../types'

export const EpisodeSchema = defineMongooseModel<IEpisode>({
  name: 'Episode',
  schema: {
    episodeNum: { type: Number, required: true },
    paramUri: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
  },
  options: { timestamps: true },
})
