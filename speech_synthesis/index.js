const msg = new SpeechSynthesisUtterance()
let voices = []
const voicesDropdown = document.querySelector('[name="voice"]')
const options = document.querySelectorAll('[type="range"], [name="text"]')
const speakButton = document.querySelector('#speak')
const stopButton = document.querySelector('#stop')

msg.text = document.querySelector('[name="text"]').value


setTimeout(() => {
    console.log(window.speechSynthesis.getVoices())
}, 1000)

function populateVoices() {
    voices = this.getVoices() // returns an empty array with Google API, try from Windows VM
    voicesDropdown.innerHTML = voices
        .filter(voice => voice.lang.includes('en'))
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>}`)
        .join('')
}

function setVoice() {
   // console.log('Changing voice')
   // console.log(this.value)
    msg.voice = voices.find(voice => voice.name === this.value)
    toggle()
}

function toggle(startOver = true) {
    speechSynthesis.cancel()
    if (startOver) {
        speechSynthesis.speak(msg)
    }
}

function setOption() {
    console.log(this.name, this.value)
    msg[this.name] = this.value
    toggle()
}

speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
options.forEach(option => option.addEventListener('change', setOption))
speakButton.addEventListener('click', toggle)
// stopButton.addEventListener('click', toggle(false)) // here to demo that this doesn't work
// stopButton.addEventListener('click', toggle.bind(null, false)) // works or...
stopButton.addEventListener('click', () => toggle(false)) // also works, downside is creates another function
