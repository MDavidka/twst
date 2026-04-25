export function onCheckout(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert('Proceeding to checkout with your custom VPS configuration...');
  window.location.href = '/pricing';
}
