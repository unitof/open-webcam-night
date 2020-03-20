const eventDate = new Date('Mar 22 2020 21:00:00 EST')
const element = document.getElementById('door')

function updateCountdown() {
  const msLeft = eventDate - new Date()
  element.innerHTML = `${msLeft}ms`
  requestAnimationFrame(updateCountdown)
}

requestAnimationFrame(updateCountdown)
