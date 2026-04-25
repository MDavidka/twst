export function selectCursorUpgrades(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedUpgradeCategory', 'cursors')
  window.alert('Cursor upgrades selected! Visualize the dependency tree.')
}

export function selectGrandmaUpgrades(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedUpgradeCategory', 'grandmas')
  window.alert('Grandma upgrades selected! Visualize the dependency tree.')
}

export function selectFarmUpgrades(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedUpgradeCategory', 'farms')
  window.alert('Farm upgrades selected! Visualize the dependency tree.')
}

export function selectMineUpgrades(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedUpgradeCategory', 'mines')
  window.alert('Mine upgrades selected! Visualize the dependency tree.')
}

export function selectFactoryUpgrades(event: { preventDefault(): void }): void {
  event.preventDefault()
  localStorage.setItem('selectedUpgradeCategory', 'factories')
  window.alert('Factory upgrades selected! Visualize the dependency tree.')
}

export function bulkPurchase(event: { preventDefault(): void }): void {
  event.preventDefault()
  const multiplier = localStorage.getItem('bulkMultiplier') || '100'
  window.alert(`Bulk purchase executed! Bought ${multiplier}x upgrades.\nCheck your progress in /play.`)
  window.location.href = '/play'
}

export function exportBuild(event: { preventDefault(): void }): void {
  event.preventDefault()
  const buildData = {
    cursorCount: localStorage.getItem('cursorCount') || '0',
    bulkMultiplier: localStorage.getItem('bulkMultiplier') || '1',
    selectedCategory: localStorage.getItem('selectedUpgradeCategory') || 'cursors',
    timestamp: new Date().toISOString()
  }
  const dataStr = JSON.stringify(buildData, null, 2)
  const dataBlob = new Blob([dataStr], { type: 'application/json' })
  const url = URL.createObjectURL(dataBlob)
  const link = document.createElement('a')
  link.href = url
  link.download = `cookie-upgrade-build-${new Date().toISOString().split('T')[0]}.json`
  link.click()
  URL.revokeObjectURL(url)
  window.alert('Upgrade build exported! Import it anytime to resume your strategy.')
}
