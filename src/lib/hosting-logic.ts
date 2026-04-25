export function togglePricing(payload: boolean | { preventDefault(): void }): void {
  if (typeof payload === 'object' && payload !== null && 'preventDefault' in payload) {
    payload.preventDefault()
  }
  const isAnnual = typeof payload === 'boolean' 
    ? payload 
    : localStorage.getItem('hosting_annual_pricing') !== 'true'
    
  localStorage.setItem('hosting_annual_pricing', String(isAnnual))
  window.dispatchEvent(new Event('storage'))
}

export function onCheckoutStarter(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Starter plan selected. Proceeding to checkout...')
  window.location.href = '/contact?plan=starter'
}

export function onCheckoutPro(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Professional plan selected. Proceeding to checkout...')
  window.location.href = '/contact?plan=pro'
}

export function onCheckoutEnterprise(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Enterprise plan selected. Proceeding to checkout...')
  window.location.href = '/contact?plan=enterprise'
}
