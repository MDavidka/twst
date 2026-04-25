export function handleCookieClick(event: { preventDefault(): void }): void {
  event.preventDefault()
  const totalCookies = parseFloat(localStorage.getItem('totalCookies') || '0') + 1
  const clickPower = parseFloat(localStorage.getItem('clickPower') || '1')
  localStorage.setItem('totalCookies', totalCookies.toString())
  localStorage.setItem('lastClickTime', Date.now().toString())
  window.dispatchEvent(new CustomEvent('cookiesUpdated', { detail: { totalCookies, cps: 0 } }))
}
