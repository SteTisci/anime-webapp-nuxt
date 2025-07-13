// composables/useAnimeData.ts
import type { Anime } from '~/types'

export function useAnimeData() {
  const {
    data: popolari,
    pending: loadingPopolari,
    error: errorPopolari,
  } = useFetch<{ success: boolean; data: Anime[] }>('/api/anime?limit=10')

  const {
    data: archivio,
    pending: loadingArchivio,
    error: errorArchivio,
  } = useFetch<{ success: boolean; data: Anime[] }>('/api/anime?page=2&limit=10')

  const {
    data: recenti,
    pending: loadingRecenti,
    error: errorRecenti,
  } = useFetch<{ success: boolean; data: Anime[] }>('/api/anime?releaseYear=2025&limit=9')

  return {
    popolari,
    archivio,
    recenti,

    loading: {
      popolari: loadingPopolari,
      archivio: loadingArchivio,
      recenti: loadingRecenti,
    },

    error: {
      popolari: errorPopolari,
      archivio: errorArchivio,
      recenti: errorRecenti,
    },
  }
}
