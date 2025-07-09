export function useCarousel(length: number) {
  const current = ref(0)
  const isAnimating = ref(false)
  let timer: ReturnType<typeof setInterval>

  const prev = () => {
    waitForAnimation(() => {
      current.value = (current.value + length - 1) % length
    })
  }

  const next = () => {
    waitForAnimation(() => {
      current.value = (current.value + length + 1) % length
    })
  }

  const start = () => {
    resetTimer()
  }

  const stop = () => {
    if (timer) clearInterval(timer)
  }

  const resetTimer = () => {
    if (timer) clearInterval(timer)
    timer = setInterval(next, 8000)
  }

  const waitForAnimation = (callback: () => void): void => {
    if (isAnimating.value) return
    isAnimating.value = true

    callback()

    setTimeout(() => {
      isAnimating.value = false
    }, 1200)
  }

  onMounted(() => {
    start()
  })

  onBeforeUnmount(() => {
    stop()
  })

  return { prev, next, current, start, stop }
}
