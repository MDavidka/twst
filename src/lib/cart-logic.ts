export function onDecrementPhoneQty(event: { preventDefault(): void }): void {
  event.preventDefault()
  const currentQty = parseInt(window.localStorage.getItem('cart_phone_qty') || '1', 10)
  if (currentQty > 1) {
    window.localStorage.setItem('cart_phone_qty', (currentQty - 1).toString())
    window.location.reload()
  }
}

export function onIncrementPhoneQty(event: { preventDefault(): void }): void {
  event.preventDefault()
  const currentQty = parseInt(window.localStorage.getItem('cart_phone_qty') || '1', 10)
  window.localStorage.setItem('cart_phone_qty', (currentQty + 1).toString())
  window.location.reload()
}

export function onRemovePhone(event: { preventDefault(): void }): void {
  event.preventDefault()
  if (window.confirm('Are you sure you want to remove this phone from your cart?')) {
    window.localStorage.removeItem('cart_phone_qty')
    window.alert('Phone removed from cart.')
    window.location.reload()
  }
}

export function onDecrementAudioQty(event: { preventDefault(): void }): void {
  event.preventDefault()
  const currentQty = parseInt(window.localStorage.getItem('cart_audio_qty') || '1', 10)
  if (currentQty > 1) {
    window.localStorage.setItem('cart_audio_qty', (currentQty - 1).toString())
    window.location.reload()
  }
}

export function onIncrementAudioQty(event: { preventDefault(): void }): void {
  event.preventDefault()
  const currentQty = parseInt(window.localStorage.getItem('cart_audio_qty') || '1', 10)
  window.localStorage.setItem('cart_audio_qty', (currentQty + 1).toString())
  window.location.reload()
}

export function onRemoveAudio(event: { preventDefault(): void }): void {
  event.preventDefault()
  if (window.confirm('Are you sure you want to remove these earbuds from your cart?')) {
    window.localStorage.removeItem('cart_audio_qty')
    window.alert('Earbuds removed from cart.')
    window.location.reload()
  }
}

export function onApplyPromo(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Promo code applied successfully! Your discount has been calculated.')
}

export function onOpenTradeIn(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Opening Trade-In estimator... Please select your current device model.')
}

export function onViewWarrantyPlans(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Displaying extended warranty and protection plans.')
}

export function onProceedToCheckout(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Proceeding to secure checkout...')
  window.location.href = '/'
}

export function onAddCharger(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('20W Fast Wall Charger added to your cart.')
}

export function onAddGlass(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Tempered Glass Shield added to your cart.')
}

export function onAddCase(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Silicone Grip Case added to your cart.')
}

export function onAddStand(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Wireless Charging Stand added to your cart.')
}
