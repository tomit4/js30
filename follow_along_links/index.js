const triggers = document.querySelectorAll('a')
const highlight = document.createElement('span')
highlight.classList.add('highlight')
document.body.append(highlight) // creates a white highlight at the top left hand of the window

function highlightLink() {
    // console.log('Highlight!!')
    // console.log(this)
    const linkCoords = this.getBoundingClientRect()
    console.log(linkCoords)
    // still doesn't quite follow us correctly when scrolled down
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    }
    highlight.style.width = `${coords.width}px`
    highlight.style.height= `${coords.height}px`
    highlight.style.transform = `translate(${linkCoords.left}px, ${linkCoords.top}px)`
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink))
