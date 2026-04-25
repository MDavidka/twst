export function clickCookie(event: { preventDefault(): void }): void {
  event.preventDefault()
  const total = (parseFloat(localStorage.getItem('totalCookies') || '0') || 0) + 1
  localStorage.setItem('totalCookies', total.toString())
  localStorage.setItem('clickCount', (parseInt(localStorage.getItem('clickCount') || '0') + 1).toString())
  
  if (parseInt(localStorage.getItem('clickCount') || '0') === 1) {
    window.alert('Achievement Unlocked: First cookie clicked! 🎉')
  }
}

export function saveGame(event: { preventDefault(): void }): void {
  event.preventDefault()
  const gameState = {
    totalCookies: localStorage.getItem('totalCookies') || '0',
    cursors: localStorage.getItem('cursors') || '0',
    grandmas: localStorage.getItem('grandmas') || '0',
    farms: localStorage.getItem('farms') || '0',
    cursorCost: localStorage.getItem('cursorCost') || '15',
    grandmaCost: localStorage.getItem('grandmaCost') || '100',
    farmCost: localStorage.getItem('farmCost') || '1100',
    cps: localStorage.getItem('cps') || '0',
  }
  localStorage.setItem('savedGame', JSON.stringify(gameState))
  window.alert('Game saved successfully!')
}

export function loadGame(event: { preventDefault(): void }): void {
  event.preventDefault()
  try {
    const saved = localStorage.getItem('savedGame')
    if (saved) {
      const gameState = JSON.parse(saved)
      Object.entries(gameState).forEach(([key, value]) => {
        localStorage.setItem(key, value as string)
      })
      window.alert('Game loaded successfully!')
    } else {
      window.alert('No saved game found.')
    }
  } catch {
    window.alert('Failed to load game. Starting fresh.')
  }
}

export function resetGame(event: { preventDefault(): void }): void {
  event.preventDefault()
  if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
    localStorage.clear()
    localStorage.setItem('totalCookies', '0')
    localStorage.setItem('cps', '0')
    localStorage.setItem('cursors', '0')
    localStorage.setItem('cursorCost', '15')
    localStorage.setItem('grandmas', '0')
    localStorage.setItem('grandmaCost', '100')
    localStorage.setItem('farms', '0')
    localStorage.setItem('farmCost', '1100')
    window.alert('Game reset! Fresh start.')
  }
}

export function buyCursor(event: { preventDefault(): void }): void {
  event.preventDefault()
  const total = parseFloat(localStorage.getItem('totalCookies') || '0')
  let cost = parseFloat(localStorage.getItem('cursorCost') || '15')
  
  if (total >= cost) {
    const cursors = parseInt(localStorage.getItem('cursors') || '0') + 1
    localStorage.setItem('totalCookies', (total - cost).toString())
    localStorage.setItem('cursors', cursors.toString())
    localStorage.setItem('cursorCost', (cost * 1.15).toFixed(0))
    
    const cps = parseFloat(localStorage.getItem('cps') || '0') + 0.1
    localStorage.setItem('cps', cps.toFixed(1))
    
    if (cursors === 1) {
      window.alert('Achievement Unlocked: Bought your first cursor! 🎉')
    }
  } else {
    window.alert('Not enough cookies!')
  }
}

export function buyGrandma(event: { preventDefault(): void }): void {
  event.preventDefault()
  const total = parseFloat(localStorage.getItem('totalCookies') || '0')
  let cost = parseFloat(localStorage.getItem('grandmaCost') || '100')
  
  if (total >= cost) {
    const grandmas = parseInt(localStorage.getItem('grandmas') || '0') + 1
    localStorage.setItem('totalCookies', (total - cost).toString())
    localStorage.setItem('grandmas', grandmas.toString())
    localStorage.setItem('grandmaCost', (cost * 1.15).toFixed(0))
    
    const cps = parseFloat(localStorage.getItem('cps') || '0') + 1
    localStorage.setItem('cps', cps.toFixed(1))
  } else {
    window.alert('Not enough cookies!')
  }
}

export function buyFarm(event: { preventDefault(): void }): void {
  event.preventDefault()
  const total = parseFloat(localStorage.getItem('totalCookies') || '0')
  let cost = parseFloat(localStorage.getItem('farmCost') || '1100')
  
  if (total >= cost) {
    const farms = parseInt(localStorage.getItem('farms') || '0') + 1
    localStorage.setItem('totalCookies', (total - cost).toString())
    localStorage.setItem('farms', farms.toString())
    localStorage.setItem('farmCost', (cost * 1.15).toFixed(0))
    
    const cps = parseFloat(localStorage.getItem('cps') || '0') + 8
    localStorage.setItem('cps', cps.toFixed(1))
  } else {
    window.alert('Not enough cookies!')
  }
}
