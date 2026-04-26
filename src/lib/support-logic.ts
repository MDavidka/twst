export function trackOrder(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  const query = formData.get('orderQuery')?.toString() || ''
  if (!query) {
    window.alert('Please enter an order ID or email')
    return
  }
  fetch('/api/support/track-order', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query })
  }).then(res => res.json()).then(data => {
    const status = data.status || 'No status found'
    const statusEl = form.parentElement?.querySelector('[data-status]') as HTMLElement
    if (statusEl) statusEl.textContent = status
    window.alert(`Order status: ${status}`)
  }).catch(() => {
    window.alert('Order not found. Please check your order ID or email.')
  })
}

export function submitWarrantyClaim(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const formData = new FormData(form)
  fetch('/api/support/warranty-claim', {
    method: 'POST',
    body: formData
  }).then(res => res.json()).then(() => {
    window.alert('Warranty claim submitted successfully! We will contact you within 48 hours.')
    form.reset()
  }).catch(() => {
    window.alert('Something went wrong. Please try again.')
  })
}

export function setReceiptFile(event: { target: { files: FileList | null } }): void {
  const file = event.target.files?.[0]
  const input = event.target as HTMLInputElement
  if (file) {
    const maxSize = 5 * 1024 * 1024 // 5MB
    if (file.size > maxSize) {
      window.alert('File too large. Please upload a file under 5MB.')
      input.value = ''
      return
    }
  }
}

export function scheduleAppointment(event: { preventDefault(): void }): void {
  event.preventDefault()
  const url = 'https://calendar.google.com/calendar/appointments/someid'
  window.open(url, '_blank')
  window.alert('Appointment scheduler opened. Book your repair slot!')
}

export function downloadManual(event: { preventDefault(): void, currentTarget: { dataset: { model: string } } }): void {
  event.preventDefault()
  const model = event.currentTarget.dataset.model
  const manuals: Record<string, string> = {
    'iphone-15': 'https://example.com/manuals/iphone-15.pdf',
    'samsung-s24': 'https://example.com/manuals/samsung-s24.pdf',
    'pixel-8': 'https://example.com/manuals/pixel-8.pdf'
  }
  const url = manuals[model || ''] || manuals['iphone-15']
  const link = document.createElement('a')
  link.href = url
  link.download = `${model || 'manual'}.pdf`
  link.click()
}

export function openChat(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Live chat support\n\nHi! How can we help you today?\n\n(Intercom/Zendesk integration would appear here)')
}
