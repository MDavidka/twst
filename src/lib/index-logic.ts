export function onAddToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Device added to your cart!')
}

export function onSubscribe(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  try {
    const form = event.target as HTMLFormElement
    window.alert('Thanks for subscribing! Check your email for your 10% discount code.')
    form.reset()
  } catch (error) {
    window.alert('Something went wrong. Please try again.')
  }
}
