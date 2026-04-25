export function onCopyEmail(event: { preventDefault?: () => void }): void {
  if (event.preventDefault) event.preventDefault()
  navigator.clipboard.writeText('support@phonewebshop.com').then(() => {
    window.alert('Email address copied to clipboard!')
  }).catch(() => {
    window.alert('Failed to copy email address.')
  })
}

export function onStartChat(event: { preventDefault?: () => void }): void {
  if (event.preventDefault) event.preventDefault()
  onToggleLiveChat(event)
}

export function onCopyPhone(event: { preventDefault?: () => void }): void {
  if (event.preventDefault) event.preventDefault()
  navigator.clipboard.writeText('1-800-555-0199').then(() => {
    window.alert('Phone number copied to clipboard!')
  }).catch(() => {
    window.alert('Failed to copy phone number.')
  })
}

export function onSubmitContactForm(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  const form = event.target as HTMLFormElement
  const data = new FormData(form)
  
  fetch('/api/support/contact', {
    method: 'POST',
    body: data
  }).then(() => {
    window.alert('Thank you for reaching out! Our support team will contact you within 24 hours.')
    form.reset()
    localStorage.removeItem('support_contactName')
    localStorage.removeItem('support_contactEmail')
    localStorage.removeItem('support_contactOrder')
    localStorage.removeItem('support_contactMessage')
  }).catch(() => {
    window.alert('Something went wrong while sending your message. Please try again.')
  })
}

export function onNameChange(event: { target: { value: string } }): void {
  localStorage.setItem('support_contactName', event.target.value)
}

export function onEmailChange(event: { target: { value: string } }): void {
  localStorage.setItem('support_contactEmail', event.target.value)
}

export function onOrderChange(event: { target: { value: string } }): void {
  localStorage.setItem('support_contactOrder', event.target.value)
}

export function onMessageChange(event: { target: { value: string } }): void {
  localStorage.setItem('support_contactMessage', event.target.value)
}

export function onToggleLiveChat(event: { preventDefault?: () => void }): void {
  if (event.preventDefault) event.preventDefault()
  const widgetId = 'live-chat-widget-container'
  const existing = document.getElementById(widgetId)
  
  if (existing) {
    existing.remove()
  } else {
    const widget = document.createElement('div')
    widget.id = widgetId
    widget.style.position = 'fixed'
    widget.style.bottom = '90px'
    widget.style.right = '24px'
    widget.style.width = '320px'
    widget.style.height = '450px'
    widget.style.backgroundColor = '#ffffff'
    widget.style.border = '1px solid #e5e7eb'
    widget.style.borderRadius = '0.5rem'
    widget.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
    widget.style.zIndex = '9999'
    widget.style.display = 'flex'
    widget.style.flexDirection = 'column'
    widget.style.overflow = 'hidden'
    
    const header = document.createElement('div')
    header.style.backgroundColor = '#84cc16'
    header.style.color = '#ffffff'
    header.style.padding = '16px'
    header.style.fontWeight = 'bold'
    header.style.display = 'flex'
    header.style.justifyContent = 'space-between'
    header.style.alignItems = 'center'
    header.innerText = 'Live Support'
    
    const closeBtn = document.createElement('button')
    closeBtn.innerText = '✕'
    closeBtn.style.background = 'none'
    closeBtn.style.border = 'none'
    closeBtn.style.color = 'white'
    closeBtn.style.cursor = 'pointer'
    closeBtn.onclick = () => widget.remove()
    header.appendChild(closeBtn)
    
    const body = document.createElement('div')
    body.style.padding = '16px'
    body.style.flex = '1'
    body.style.display = 'flex'
    body.style.flexDirection = 'column'
    body.style.justifyContent = 'center'
    body.style.alignItems = 'center'
    body.style.color = '#6b7280'
    body.innerText = 'Connecting you to the next available agent...'
    
    widget.appendChild(header)
    widget.appendChild(body)
    document.body.appendChild(widget)
  }
}
