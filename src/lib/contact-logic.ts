export function onSubmit(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const data = Object.fromEntries(formData) as Record<string, string>
  
  if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
    window.alert('Please fill in all required fields.')
    return
  }
  
  const button = form.querySelector('button[type="submit"]') as HTMLButtonElement | null
  if (button) button.disabled = true
  
  fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(() => {
    window.alert('Thanks for reaching out! Use code WELCOME10 for 10% off your next purchase.')
    form.reset()
    ;(window as any).setSuccessOpen?.(true)
  })
  .catch(() => {
    window.alert('Something went wrong. Please try again.')
  })
  .finally(() => {
    if (button) button.disabled = false
  })
}

export function openLiveChat(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.open('https://www.livechat.com/chat-with/123456/', '_blank', 'noopener,noreferrer')
}
