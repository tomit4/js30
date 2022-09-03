const hero = document.querySelector('.hero')
const text = hero.querySelector('h1')
const walk = 100 // 100px

function shadow(e) {
    // const width = hero.offsetWidth
    // const height= hero.offsetHeight
    const { offsetWidth: width, offsetHeight: height } = hero
    let { offsetX: x, offsetY: y } = e

    // if hero and the text (.hero and h1) are not the same element
    if(this !== e.target) {
        // adds the values of the cursor position over the text(h1) to the hero
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }
    // makes sure that the walk shadow element
    // always goes within half of the full amount of walk
    const xWalk = Math.round(x / width * walk) - (walk / 2)
    const yWalk = Math.round(y / height * walk) - (walk / 2)

    text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${yWalk}px ${xWalk * -1}px 0 rgba(0, 255, 0, 0.7),
    ${yWalk * -1}px ${xWalk}px 0 rgba(0, 0, 255, 0.7)
    `

}

hero.addEventListener('mousemove', shadow)
