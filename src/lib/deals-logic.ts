export function addToWishlist1(event: { preventDefault(): void }): void {
  event.preventDefault()
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as string[]
  if (!wishlist.includes('iPhone 15 Pro Max')) {
    wishlist.push('iPhone 15 Pro Max')
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    window.alert('Added iPhone 15 Pro Max to wishlist!')
  } else {
    window.alert('Already in wishlist!')
  }
}

export function addToWishlist2(event: { preventDefault(): void }): void {
  event.preventDefault()
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as string[]
  if (!wishlist.includes('Samsung Galaxy S24 Ultra')) {
    wishlist.push('Samsung Galaxy S24 Ultra')
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    window.alert('Added Samsung Galaxy S24 Ultra to wishlist!')
  } else {
    window.alert('Already in wishlist!')
  }
}

export function addToWishlistDealOfDay(event: { preventDefault(): void }): void {
  event.preventDefault()
  const wishlist = JSON.parse(localStorage.getItem('wishlist') || '[]') as string[]
  if (!wishlist.includes('iPhone 15 Pro Bundle')) {
    wishlist.push('iPhone 15 Pro Bundle')
    localStorage.setItem('wishlist', JSON.stringify(wishlist))
    window.alert('Added iPhone 15 Pro Bundle to wishlist!')
  } else {
    window.alert('Already in wishlist!')
  }
}
