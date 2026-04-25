export function onSubmitTicket(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault();
  try {
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    
    fetch('/api/support/ticket', { method: 'POST', body: data })
      .then(() => {
        window.alert('Your support ticket has been submitted successfully. Our team will review it shortly.');
        form.reset();
      })
      .catch(() => {
        window.alert('Failed to submit the ticket. Please try again later.');
      });
  } catch (error) {
    window.alert('An unexpected error occurred while submitting your ticket.');
  }
}

export function onSendChatMessage(event: { preventDefault(): void, target: unknown }): void {
  event.preventDefault();
  try {
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    
    fetch('/api/support/chat', { method: 'POST', body: data })
      .then(() => {
        window.alert('Message sent! An agent will reply shortly.');
        form.reset();
      })
      .catch(() => {
        window.alert('Failed to send message. Please try again.');
      });
  } catch (error) {
    window.alert('An unexpected error occurred while sending your message.');
  }
}
