export function challengeFriend(event: { preventDefault(): void }): void {
  event.preventDefault()
  if (navigator.share) {
    navigator.share({
      title: 'Challenge your friends on Cookie Clicker Leaderboard!',
      text: 'Can you beat my cookie score? Join the competition!',
      url: window.location.href
    }).catch(() => {})
  } else {
    navigator.clipboard.writeText(window.location.href).then(() => {
      window.alert('Leaderboard link copied! Share it with your friends to challenge them.')
    }).catch(() => {
      window.alert('Challenge your friends! ' + window.location.href)
    })
  }
}

export function openPlayerProfile(event: { preventDefault(): void }): void {
  event.preventDefault()
  window.alert('Player profile modal would open here with detailed stats and achievements.')
}
