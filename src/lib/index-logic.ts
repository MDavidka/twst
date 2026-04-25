export function startQuickDemo(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.location.href = '/play'
}

export function createAccount(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Account created! Progress will be saved automatically.')
  window.location.href = '/play'
}
