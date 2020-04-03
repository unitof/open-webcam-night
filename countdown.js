const eventDate = new Date('Mar 21 2020 21:00:00 EDT')
const element = document.getElementById('door')

function updateCountdown() {
  const msLeft = eventDate - new Date()

  if (msLeft < -43200000 && Math.floor(msLeft / 10000) % 2) {
    element.innerHTML = `YOU’RE ${-msLeft}ms TOO LATE BUT` // flash between this…
  } else if (msLeft < 0) {
    element.innerHTML = 'ANOTHER WILL COME' // and this foreboding omen every 10 seconds 12 hours after starting
  } else if (msLeft < 0 && Math.floor(msLeft / 10000) % 2) {
    element.innerHTML = `YOU’RE ${-msLeft}ms LATE` // flash between this…
  } else if (msLeft < 0) {
    element.innerHTML = 'meet.google.com/kdq-mnte-qju' // and URL every 10 seconds once started
  } else if (msLeft < 60000 && Math.floor(msLeft / 100) % 2) {
    element.innerHTML = 'meet.google.com/kdq-mnte-qju' // strobe URL starting 1 min before
  } else if (msLeft < 600000 && Math.floor(msLeft / 1000) % 2) {
    element.innerHTML = 'meet.google.com/kdq-mnte-qju' // flash URL every 1 sec starting 10 mins before
  } else {
    element.innerHTML = `${msLeft}ms` // otherwise show ms until showtime
  }
  requestAnimationFrame(updateCountdown)
}

requestAnimationFrame(updateCountdown)
