const canvas = document.querySelector("#draw")
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height= window.innerHeight
ctx.strokeStyle = '#BADA55'
ctx.lineJoin = 'round'
ctx.lineCap = 'round'
ctx.lineWidth = 100
// gloabCompositeOperation takes in PhotoShop-style blend modes and applies them to your "draw" in this case
// ctx.globalCompositeOperation = 'multiply'
ctx.globalCompositeOperation = 'overlay'

// checks for click event that tells browser to draw to canvas
let isDrawing = false

// where do you start the line from
let lastX = 0
let lastY = 0

let hue = 0
let direction = true

function draw(e) {
    if(!isDrawing) return // stop the function from running when they are not moused down
    // console.log(e)
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    // ctx.lineWidth = hue
    ctx.beginPath()
    // start from
    ctx.moveTo(lastX, lastY)
    // go to
    ctx.lineTo(e.offsetX, e.offsetY)
    ctx.stroke()

    // ES6 trick to reassign multiple variables at once ... doesn't work for some reason
    // [lastX, lastY] = [e.offsetX, e.offsetY]

    lastX = e.offsetX
    lastY = e.offsetY
    hue++
    if(hue > 360) {
        hue = 0
    }
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
        direction = !direction
    }

    if(direction) {
        ctx.lineWidth++
    } else {
        ctx.lineWidth--
    }
}

canvas.addEventListener('mousedown', (e) => {
    isDrawing = true
    lastX = e.offsetX
    lastY = e.offsetY
})

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
