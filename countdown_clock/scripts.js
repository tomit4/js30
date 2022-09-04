let countdown
const timerDisplay = document.querySelector('.display__time-left')
const endTime = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds) {
    // clear any existing timer
    clearInterval(countdown)
    const now = Date.now()
    const then = now + seconds * 1000
    // runs the timer immediately rather than
    // waiting 1sec before setInterval() is invoked
    displayTimeLeft(seconds)
    displayEndTime(then)

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000)
        // check if we should stop it
        if (secondsLeft < 0) {
            clearInterval(countdown)
        }
        // display it
        displayTimeLeft(secondsLeft)
    }, 1000)
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`
    document.title = display
    timerDisplay.textContent = display
}

function displayEndTime(timestamp) {
    const end = new Date(timestamp)
    const hour = end.getHours()
    const minutes= end.getMinutes()
    endTime.textContent = `Be Back At ${hour > 12 ? hour - 12 : hour}:${minutes}`
}

function startTimer() {
    const seconds = parseInt(this.dataset.time)
    timer(seconds)
}

buttons.forEach(button => button.addEventListener('click', startTimer))
// name attribute adds for interesting way of accessing that html element
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault()
    const mins = this.minutes.value
    timer(mins * 60)
    // clears value upon enter
    this.reset()
})
