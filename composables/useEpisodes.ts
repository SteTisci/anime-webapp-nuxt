import type { Episode } from '~/types'

export function useEpisodes(numberOfEpisodes: number) {
  const route = useRoute()
  const animeID = computed(() => route.params.id)
  const currentEpisode = ref(Number(route.query.episode || 1))
  const currentGroup = ref(0)

  const groups = computed(() =>
    Array.from({ length: Math.ceil(numberOfEpisodes / 120) }, (_, i) => ({
      start: 120 * i + 1,
      end: Math.min(120 * (i + 1), numberOfEpisodes),
      index: i,
    })),
  )

  const range = computed(() => {
    const group = groups.value[currentGroup.value]
    return Array.from({ length: group.end - group.start + 1 }, (_, i) => group.start + i)
  })

  const { data: episodeData, pending: episodePending } = useFetch<{ success: boolean; data: Episode }>(
    () => `/api/anime/${animeID.value}/${currentEpisode.value}`,
    {
      key: () => `anime-${animeID.value}-ep-${currentEpisode.value}`,
      watch: [currentEpisode],
    },
  )

  onMounted(() => {
    const saved = localStorage.getItem(`${animeID.value}`)
    if (saved !== null) {
      try {
        const parsed = JSON.parse(saved)
        if (parsed.group !== undefined) currentGroup.value = parseInt(parsed.group)
        if (parsed.episode !== undefined) currentEpisode.value = parseInt(parsed.episode)
      } catch (e) {
        console.error('Errore nel parsing del localStorage:', e)
      }
    }
  })

  watch([currentGroup, currentEpisode], ([newGroup, newEpisode]) => {
    const data = {
      group: newGroup.toString(),
      episode: newEpisode.toString(),
    }
    localStorage.setItem(`${animeID.value}`, JSON.stringify(data))
  })

  return { currentGroup, currentEpisode, groups, range, animeID, episodeData, episodePending }
}
