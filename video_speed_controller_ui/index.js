const speed = document.querySelector('.speed')
const bar = document.querySelector('.speed-bar')
const video = document.querySelector('.flex')

function handleMove(e) {
    const y = e.pageY - this.offsetTop
    // grab percent height of entire speed scrollbar
    const percent = y / this.offsetHeight
    const min = 0.4
    const max = 4
    const height = Math.round(percent * 100) + '%'
    const playbackRate = percent * (max - min) + min
    bar.style.height = height
    // forces rate to be displayed as 2 decimal floating point number
    bar.textContent = playbackRate.toFixed(2) + 'x'
    video.playbackRate = playbackRate
}

// no arrow functionas this must refer to the speed object, not the event
speed.addEventListener('mousemove', handleMove)
