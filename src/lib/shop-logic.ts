export function onToggleFilter(checked: boolean | string): void {
  const isChecked = checked === true || checked === 'true'
  const currentFilters = parseInt(window.localStorage.getItem('active_filters') || '0', 10)
  const newCount = isChecked ? currentFilters + 1 : Math.max(0, currentFilters - 1)
  window.localStorage.setItem('active_filters', newCount.toString())
}

export function onPriceChange(value: number[]): void {
  if (Array.isArray(value) && value.length > 0) {
    window.localStorage.setItem('max_price', value[0].toString())
  }
}

export function onSortChange(value: string): void {
  window.localStorage.setItem('sort_order', value)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

export function onAddToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  const cartCount = parseInt(window.localStorage.getItem('cart_count') || '0', 10)
  window.localStorage.setItem('cart_count', (cartCount + 1).toString())
  window.alert('Item added to your cart!')
}

export function onPrevPage(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('You are already on the first page.')
}

export function onNextPage(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.scrollTo({ top: 0, behavior: 'smooth' })
  window.alert('Loading next page of products...')
}
