import type { Types } from 'mongoose'

// SERVER TYPES

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
  status?: string
  limit?: number
}

// CLIENT TYPES

export interface CarouselSlide {
  id: string
  title: string
  banner: string
}

export interface CarouselButtonImage {
  src: string
  alt: string
}

export interface CarouselDots {
  length: number
  current: number
}

export interface AnimeCard {
  id: string
  title: string
  thumbnail: string
  type: string
  lang?: string
  releaseYear?: number
  tags?: string[]
  episodes?: number
  duration?: number
}

export interface AnimeData {
  name: string
  card: 'normal' | 'small'
  data: any
}
