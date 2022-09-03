const divs = document.querySelectorAll('div')

function logText(e) {
    console.log(this.classList.value) // returns 3, 2, 1,...demoing that elements bubble up until you reach the entire Operating System itself (or really the X Windowing system in this case)
    // prevents nested elements from receiving same bubbling up of an event listener
    // e.stopPropagation() // stop bubbling!
}

// document.body.addEventListener('click', logText,) // now returns three two one bod
divs.forEach(div => div.addEventListener('click', logText, {
    // capture: true reverses it, runs the function
    // on the way down (bubbling down) instead of up // defaults to false
    // capture: true
    capture: false,
    // when once set to true, unbinds itself, essentially only
    // allowing event to fire once, defaults to false
    once: true }))
