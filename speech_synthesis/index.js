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
    voices = this.getVoices() // returns an empty array unfortunately...
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>}`)
        .join('')
}

function setVoice() {
   console.log('Changing voice')
}
speechSynthesis.addEventListener('voiceschanged', populateVoices)
voicesDropdown.addEventListener('change', setVoice)
