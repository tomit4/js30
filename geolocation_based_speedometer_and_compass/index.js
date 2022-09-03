// requires some interesting software including a necessary access to macos, will be unable to test on my linux machine...

/* Compass: https://thenounproject.com/search/?q=compass&i=592352 */

const arrow = document.querySelector('.arrow')
const speed = document.querySelector('.speed-value')

navigator.geolocation.watchPosition((data) => {
    console.log(data) // will constantly update the geolocation of the device, returns in kilometers btw
    speed.textContent = data.coords.speed
    arrow.style.transform = `rotate(${data.coords.heading}deg)`
}, (err) => {
    console.error(err)
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!')
})
