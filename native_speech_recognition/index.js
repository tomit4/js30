// Obviously this requires a microphone, which I don't currently have, but this is a good documentation on how to access those (my browsers are privacy focused and also block these features)

// sets it so it works in either firefox or chome
window.SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition

const recognition = new SpeechRecognition()
recognition.interimResults = true // doesn't wait for a gap in speech(you don't have to stop speaking)

let p = document.createElement('p')
const words = document.querySelector('.words')
words.appendChild(p)

recognition.addEventListener('result', e => {
    // console.log(e.results)
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    p.textContent = transcript
    // creates paragraphs looking for isFinal() which indicates a moment of silence
    if (e.results[0].isFinal) {
        p = document.createElement('p')
        words.appendChild(p)
    }

    // listens for a string, you can see how this could be used to speech recognize something perhaps open up a new tab to another site?
    if (transcript.includes('unicorn')) {
        console.log('unicornemoji!')
    }

    console.log(transcript)
})

// allows for breaks in speech
recognition.addEventListener('end', recognition.start)

recognition.start()
