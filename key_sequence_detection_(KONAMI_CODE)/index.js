const pressed = []
const secretCode = 'wesbos'

// console.log(-secretCode.length -1) // -6 - 1 = -7
// negative index numbers in arrays are not allowed, so it converts it into a string: '-7'
// https://www.executeprogram.com/courses/javascript-array/lessons/negative-array-indexes

// Since Arrays are technically Objects in JavaScript, this essentially creates:
// pressed [-7] = 'somevalue'
// pressed = { -7: 'somevalue' }

// Note that due to this strange nature, it cannot be looped over using regular array methods

// In the case of splice below however, this simply looks for the 7th index from the end of the pressed array

window.addEventListener('keyup', (e) => {
    // console.log(e.key)
    // essential keylogger when combined with console.log()
    pressed.push(e.key)

    // somewhat terse here...
    // -secretCode.length -1 returns the length of the secretCode string
    // and converts it to a negative number
    // the splice method looks at this as the index to insert at this negative number
    // the pressed.length -secretCode.length is the index we are looking to stop splicing at (negative at the beginning of typing, but quickly becomes a positive number...)
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length)
    if(pressed.join('').includes(secretCode)) {
        console.log('DING DING!')
        // no worries about the linting, html puts it together
        cornify_add()     }
    console.log(pressed)
})
