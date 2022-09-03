const nav = document.querySelector('#main')
const topOfNav = nav.offsetTop


function fixNav(e) {
    // console.log(topOfNav)
    if(window.scrollY >= topOfNav) {
        // an interesting trick here that prevents the text
        // from "jumping" once the navbar becomes equal to the window.scrollY
        document.body.style.paddingTop = nav.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.style.paddingTop = 0
        document.body.classList.remove('fixed-nav')
    }
}

window.addEventListener('scroll', fixNav)
