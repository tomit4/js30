// The following debounce function is provided by wesbos
// it limits the amount of seconds a function can run synchronously
// lodash also provides this

// In this particular tutorial, we are calling the 'scroll' event listener,
// which calls multiple times per second, which can cause performance issues,
// hence why we need this
function debounce(func, wait = 20, immediate = true) {
    var timeout
    return function () {
        var context = this,
            args = arguments
        var later = function () {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

const sliderImages = document.querySelectorAll('.slide-in')

function checkSlide(e) {
    // console.log(window.scrollY) // tells us how many pixels from the top  of the browser we have scrolled
    sliderImages.forEach(sliderImage => {
        // pixel at bottom of screen scrolled down
        // const slideInAt = (window.scrollY + window.innerHeight)

        // half way through the image
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImage.height / 2
        // bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height

        // Booleans for later checks
        const isHalfShown = slideInAt > sliderImage.offsetTop
        const isNotScrolledPast = window.scrollY < imageBottom

        if(isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active')
        } else {
            sliderImage.classList.remove('active')
        }
    })
}

window.addEventListener('scroll', debounce(checkSlide))
