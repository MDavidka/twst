export function goToPlay(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/play'
}

export function exportAchievements(event: { preventDefault(): void }): void {
  event.preventDefault()
  const achievements = {
    total: 127,
    unlocked: 42,
    progress: 33,
    list: Array.from({ length: 127 }, (_, i) => ({
      id: i,
      name: `Achievement ${i + 1}`,
      unlocked: i < 42,
      progress: Math.min(100, (i / 127) * 100 + Math.random() * 20),
      category: ['clicking', 'buildings', 'grandmapocalypse'][i % 3],
      rarity: i < 20 ? 'common' : i < 100 ? 'rare' : 'legendary'
    }))
  }
  const dataStr = JSON.stringify(achievements, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `cookie-clicker-achievements-${new Date().toISOString().slice(0, 10)}.json`
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export function shareAllAchievements(event: { preventDefault(): void }): void {
  event.preventDefault()
  const achievements = {
    total: 127,
    unlocked: 42,
    completion: '33%',
    shareUrl: `${window.location.origin}/achievements`,
    timestamp: new Date().toISOString()
  }
  const shareData = {
    title: 'My Cookie Clicker Achievements',
    text: `I've unlocked ${achievements.unlocked}/${achievements.total} achievements (${achievements.completion})!`,
    url: achievements.shareUrl
  }
  if (navigator.share) {
    navigator.share(shareData).catch(() => {
      navigator.clipboard.writeText(JSON.stringify(achievements, null, 2))
      window.alert('Achievements copied to clipboard!')
    })
  } else {
    navigator.clipboard.writeText(JSON.stringify(achievements, null, 2))
    window.alert('Achievements copied to clipboard!')
  }
}
