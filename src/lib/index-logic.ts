export function onDomainChange(event: { target: { value: string } }): void {
  sessionStorage.setItem('domainQuery', event.target.value)
}

export function onSearchDomain(event: { preventDefault(): void }): void {
  event.preventDefault()
  const query = sessionStorage.getItem('domainQuery') || ''
  if (!query.trim()) {
    window.alert('Please enter a domain name to search.')
    return
  }
  window.alert(`Simulating lookup for "${query}"...\n\nGood news! ${query} is available.`)
}

export function onSubscribeNewsletter(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault()
  try {
    const form = event.target as HTMLFormElement
    const data = new FormData(form)
    
    const emailInput = form.querySelector('input[type="email"]') as HTMLInputElement
    if (emailInput && !data.has('email')) {
      data.append('email', emailInput.value)
    }

    fetch('/api/newsletter', { method: 'POST', body: data })
      .then(() => {
        window.alert('Thanks for subscribing to our newsletter!')
        form.reset()
        sessionStorage.removeItem('newsletterEmail')
      })
      .catch(() => {
        window.alert('Something went wrong. Please try again.')
      })
  } catch (error) {
    window.alert('An unexpected error occurred.')
  }
}

export function onNewsletterEmailChange(event: { target: { value: string } }): void {
  sessionStorage.setItem('newsletterEmail', event.target.value)
}
