import type { Anime, IAnime, IEpisode, Episode } from '~/types'
import type { Types } from 'mongoose'

export function mapIAnimeToAnime(anime: IAnime): Anime {
  return {
    id: anime._id.toString(),
    title: anime.title,
    paramUri: anime.paramUri,
    thumbnail: anime.thumbnail,
    bannerImage: anime.bannerImage,
    description: anime.description,
    type: anime.type,
    author: anime.author,
    releaseYear: anime.releaseYear,
    rating: anime.rating,
    status: anime.status,
    numberOfEpisodes: anime.numberOfEpisodes,
    duration: anime.duration,
    lang: anime.lang,
    tags: anime.tags,
    aniListId: anime.aniListId,
    episodes: anime.episodes?.map(ep => {
      if ('episodeNum' in ep && 'videoUrl' in ep) {
        return mapIEpisodeToEpisode(ep as IEpisode)
      }
      return (ep as Types.ObjectId).toString()
    }),
  }
}

export function mapIAnimeArrayToAnimeArray(animeList: IAnime[]): Anime[] {
  return animeList.map(mapIAnimeToAnime)
}

export function mapIEpisodeToEpisode(episode: IEpisode): Episode {
  return {
    id: episode._id.toString(),
    episodeNum: episode.episodeNum,
    paramUri: episode.paramUri,
    videoUrl: episode.videoUrl,
  }
}
