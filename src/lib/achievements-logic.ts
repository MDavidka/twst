export function toggleShadowHints(event: { preventDefault(): void; currentTarget: { dataset: { pressed: string } } }): void {
  event.preventDefault()
  const pressed = event.currentTarget.dataset.pressed === 'true'
  localStorage.setItem('achievements.showShadowHints', (!pressed).toString())
  window.dispatchEvent(new CustomEvent('shadowHintsToggled', { detail: !pressed }))
}
