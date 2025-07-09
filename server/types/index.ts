import type { Types } from 'mongoose'

export interface IAnime {
  _id: Types.ObjectId
  title: string
  paramUri: string
  thumbnail: string
  bannerImage?: string
  description?: string
  type: string
  author: string
  releaseYear: number
  rating: number
  status: 'FINISHED' | 'RELEASING' | 'NOT_YET_RELEASED' | 'CANCELLED' | 'HIATUS'
  numberOfEpisodes: number
  duration: number
  lang: string
  tags: string[]
  aniListId: number
  episodes: (Types.ObjectId | IEpisode)[]
}

export interface IEpisode {
  _id: Types.ObjectId
  episodeNum: number
  paramUri: string
  videoUrl: string
}

export interface Query {
  page?: number
  title?: string
  author?: string
  type?: string
  lang?: string
  releaseYear?: number
}
