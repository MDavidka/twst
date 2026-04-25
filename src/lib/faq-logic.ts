export function calculateOptimalBuild(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cps = Number(localStorage.getItem('currentCps') || '0')
  let recommendation = 'Cursor (passive CPS)'
  
  if (cps < 10) {
    recommendation = 'Cursor x10 (first passive income)'
  } else if (cps < 50) {
    recommendation = 'Grandma x5 (early auto-clickers)'
  } else if (cps < 200) {
    recommendation = 'Farm x10 (diversify CPS)'
  } else if (cps < 1000) {
    recommendation = 'Mine (exponential growth)'
  } else {
    recommendation = 'Factory (mid-game powerhouse)'
  }
  
  localStorage.setItem('optimalBuild', recommendation)
  window.alert(`Recommended: ${recommendation}\nCurrent CPS: ${cps.toLocaleString()}\nGo to /play to buy!`)
}

export function submitBugReport(event: { preventDefault(): void }): void {
  event.preventDefault()
  const bugDescription = localStorage.getItem('bugDescription') || ''
  const saveData = localStorage.getItem('saveData') || 'No save data'
  const gameVersion = '1.0.0'
  
  if (!bugDescription.trim()) {
    window.alert('Please describe the bug before submitting.')
    return
  }
  
  const formData = new FormData()
  formData.append('description', bugDescription)
  formData.append('saveData', saveData)
  formData.append('version', gameVersion)
  formData.append('url', window.location.href)
  
  fetch('/api/bugs', {
    method: 'POST',
    body: formData
  }).then(() => {
    window.alert('Bug report submitted! Thanks for helping improve Cookie Clicker.\nOur team will review it shortly.')
    localStorage.removeItem('bugDescription')
  }).catch(() => {
    window.alert('Failed to submit. You can email support@cookieclicker.com with your save data.')
  })
}
