function addToCart(item: { id: string; name: string; price: number }): void {
  try {
    const cart = JSON.parse(window.localStorage.getItem('cart') || '[]');
    cart.push({ ...item, quantity: 1 });
    window.localStorage.setItem('cart', JSON.stringify(cart));
  } catch (e) {
    // Fallback if localStorage is unavailable or corrupted
    console.error('Failed to update cart', e);
  }
}

export function onClearComparison(event: { preventDefault(): void }): void {
  event.preventDefault();
  if (window.confirm('Are you sure you want to clear all selected devices?')) {
    window.location.reload();
  }
}

export function onAddToCartDevice1(event: { preventDefault(): void }): void {
  event.preventDefault();
  addToCart({ id: 'iphone-15-pro-max', name: 'iPhone 15 Pro Max', price: 1199 });
  window.alert('iPhone 15 Pro Max added to cart!');
  window.location.href = '/cart';
}

export function onAddToCartDevice2(event: { preventDefault(): void }): void {
  event.preventDefault();
  addToCart({ id: 'galaxy-s24-ultra', name: 'Galaxy S24 Ultra', price: 1299 });
  window.alert('Galaxy S24 Ultra added to cart!');
  window.location.href = '/cart';
}

export function onViewTradeIn(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert('Redirecting to the trade-in calculator...');
  window.location.href = '/support';
}
