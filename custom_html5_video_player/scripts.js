/* Get Our Elements */
const player = document.querySelector('.player')
const video = player.querySelector('.viewer') // notice how this selects within previous div
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons= player.querySelectorAll('[data-skip]') // custom data type -skip
const ranges = player.querySelectorAll('.player__slider')

/* Build out functions */

function togglePlay() {
    const method = video.paused ? 'play' : 'pause'
    video[method]()
}

function updateButton() {
    const icon = this.paused ? '►' : '❚❚' // this is possible because in this case it refers to the video element
    toggle.textContent = icon
}

function skip() {
    // console.log('Skipping!')
    console.log(this.dataset.skip)
    video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
    /* grabs both volume and playback rate video[this.name]
       and adjusts it to the returned numerical value of the range EventListeners below */
    video[this.name] = this.value
}

function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100
    progressBar.style.flexBasis = `${percent}%`
}

function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
    video.currentTime = scrubTime
    // console.log(e)
}

/* Hook up the event listeners */
video.addEventListener('click', togglePlay)
video.addEventListener('play', updateButton)
video.addEventListener('pause', updateButton)
video.addEventListener('timeupdate', handleProgress) // interchangeable with the 'progress' event listener

toggle.addEventListener('click', togglePlay)

skipButtons.forEach(button => button.addEventListener('click', skip))

ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))


let mousedown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mousedown && scrub(e)) // checks if mousedown is true, if so, scrube(e) // note event argument is required here
progress.addEventListener('mousedown', () => mousedown = true)
progress.addEventListener('mouseup', () => mousedown = false)

// CHALLENGE: Add button that makes video go full screen
