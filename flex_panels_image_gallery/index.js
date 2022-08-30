const panels = document.querySelectorAll('.panel')

function toggleOpen() {
    this.classList.toggle('open')
}

function toggleActive(e) {
    // console.log(e.propertyName)
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active')
    }
}

/* Note here how we don't invoke toggleOpen like so: toggleOpen()
 We do this because if we did invoke toggleOpen, it would run upon opening the webpage
 Instead we are simply telling the browser that when the panel is clicked, look for the toggleOpen
 function and run it */
panels.forEach(panel => panel.addEventListener('click', toggleOpen))
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
