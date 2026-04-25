export function onBillingCycleChange(value: string): void {
  if (!value) return;
  localStorage.setItem('pricing_billing_cycle', value);
  window.dispatchEvent(new CustomEvent('billing_cycle_changed', { detail: value }));
}

export function onSelectStarter(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert('Shared Starter plan selected. Redirecting to plan details...');
  window.location.href = '/shared-hosting';
}

export function onSelectPro(event: { preventDefault(): void }): void {
  event.preventDefault();
  window.alert('VPS Pro plan selected. Redirecting to VPS configuration...');
  window.location.href = '/vps';
}
