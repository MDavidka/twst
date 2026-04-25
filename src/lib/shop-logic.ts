function updateBrand(brand: string, checked: boolean | string): void {
  const url = new URL(window.location.href)
  const brands = new Set(url.searchParams.getAll('brand'))
  
  if (checked === true) {
    brands.add(brand)
  } else if (checked === false) {
    brands.delete(brand)
  }
  
  url.searchParams.delete('brand')
  brands.forEach(b => url.searchParams.append('brand', b))
  window.history.pushState({}, '', url.toString())
}

export function toggleBrandApple(checked: boolean | string): void {
  updateBrand('apple', checked)
}

export function toggleBrandSamsung(checked: boolean | string): void {
  updateBrand('samsung', checked)
}

export function toggleBrandGoogle(checked: boolean | string): void {
  updateBrand('google', checked)
}

export function setPriceRange(value: number[]): void {
  if (!value || value.length === 0) return
  const url = new URL(window.location.href)
  url.searchParams.set('maxPrice', value[0].toString())
  window.history.pushState({}, '', url.toString())
}

export function setStorageFilters(value: string[]): void {
  const url = new URL(window.location.href)
  url.searchParams.delete('storage')
  if (value && Array.isArray(value)) {
    value.forEach(v => url.searchParams.append('storage', v))
  }
  window.history.pushState({}, '', url.toString())
}

export function setOsFilter(value: string): void {
  const url = new URL(window.location.href)
  if (value === 'all') {
    url.searchParams.delete('os')
  } else {
    url.searchParams.set('os', value)
  }
  window.history.pushState({}, '', url.toString())
}

export function setSortOrder(value: string): void {
  const url = new URL(window.location.href)
  url.searchParams.set('sort', value)
  window.history.pushState({}, '', url.toString())
}

export function addToCart(event: { preventDefault(): void }): void {
  event.preventDefault()
  try {
    const currentCart = JSON.parse(window.localStorage.getItem('cart') || '[]')
    currentCart.push({ id: Date.now(), addedAt: new Date().toISOString() })
    window.localStorage.setItem('cart', JSON.stringify(currentCart))
    window.alert('Item successfully added to your cart!')
  } catch (error) {
    window.alert('Failed to add item to cart. Please try again.')
  }
}

export function prevPage(event: { preventDefault(): void }): void {
  event.preventDefault()
  const url = new URL(window.location.href)
  const currentPage = parseInt(url.searchParams.get('page') || '1', 10)
  if (currentPage > 1) {
    url.searchParams.set('page', (currentPage - 1).toString())
    window.history.pushState({}, '', url.toString())
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

export function nextPage(event: { preventDefault(): void }): void {
  event.preventDefault()
  const url = new URL(window.location.href)
  const currentPage = parseInt(url.searchParams.get('page') || '1', 10)
  url.searchParams.set('page', (currentPage + 1).toString())
  window.history.pushState({}, '', url.toString())
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
