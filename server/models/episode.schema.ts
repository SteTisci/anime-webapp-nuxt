import { defineMongooseModel } from '#nuxt/mongoose'

export const EpisodeSchema = defineMongooseModel<IEpisode>({
  name: 'Episode',
  schema: {
    episodeNum: { type: Number, required: true },
    paramUri: { type: String, required: true, unique: true },
    videoUrl: { type: String, required: true },
  },
  options: { timestamps: true },
})
