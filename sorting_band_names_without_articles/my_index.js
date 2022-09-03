const bands = [
    'The Plot in You',
    'The Devil Wears Prada',
    'Pierce the Veil',
    'Norma Jean',
    'The Bled',
    'Say Anything',
    'The Midway State',
    'We Came as Romans',
    'Counterparts',
    'Oh, Sleeper',
    'A Skylit Drive',
    'Anywhere But Here',
    'An Old Dog',
]

function checkFirstWord(arr) {
    const newBandArr = []
    arr.forEach((word) => {
        const eachWordArr = (word.split(' '))
        switch (eachWordArr[0]) {
            case 'The':
                eachWordArr.shift()
                break;
            case 'A':
                eachWordArr.shift()
            case 'An':
                eachWordArr.shift()
        }
        const newBandName = eachWordArr.join(' ')
        newBandArr.push(newBandName)
        // console.log(eachWordArr)
    })
    console.log(arr)
    console.log(newBandArr.sort())
}

checkFirstWord(bands)
