// all li descendents of cool
const triggers = document.querySelectorAll('.cool > li')
const background = document.querySelector('.dropdownBackground')
const nav = document.querySelector('.top')

function handleEnter() {
    this.classList.add('trigger-enter')

    // a standard function within setTimeout does not work,
    // as add is a part of the window and not of this element,
    // however with an arrow function, this becomes implicit as to what is returned
    // setTimeout(function() {
        // this.classList.add('trigger-enter-active')
    // }, 150)

    // setTimeout(() => {
        // prevents content from showing up before trigger-enter class i added
        // if (this.classList.contains('trigger-enter')) {
            // this.classList.add('trigger-enter-active'), 150
        // }
    // })

    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150)

    background.classList.add('open')

    const dropdown = this.querySelector('.dropdown')
    const dropdownCoords = dropdown.getBoundingClientRect()
    const navCoords = nav.getBoundingClientRect()

    const coords = {
        height: dropdownCoords.height,
        width: dropdownCoords.width,
        // no hardcoding values, this adjusts if you have a header etc.
        top: dropdownCoords.top - navCoords.top,
        left: dropdownCoords.left - navCoords.left
    }

    background.style.setProperty('width', `${coords.width}px`)
    background.style.setProperty('height', `${coords.height}px`)
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`)

}

function handleLeave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active')
    background.classList.remove('open')
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter))
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave))
