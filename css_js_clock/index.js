const secondHand = document.querySelector('.second-hand')
const minuteHand = document.querySelector('.minute-hand')
const hourHand= document.querySelector('.hour-hand')

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds()
    const secondsDegrees = ((seconds / 60) * 360) + 90 // by setting 90 we offset the angle to correspond with the time itself
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    const minutes = now.getMinutes()
    const minuteDegrees = ((minutes / 60) * 360) + 90
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`
    // console.log("minutes: ", minutes)

    const hours = now.getHours()
    const hourDegrees = ((hours / 12) * 360) + 90
    hourHand.style.transform = `rotate(${hourDegrees}deg)`
    // console.log("hours: ", hours)

}

setInterval(setDate, 1000)
