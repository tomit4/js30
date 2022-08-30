const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }]

function makeGreen() {
    const p = document.querySelector('p')
    p.style.color = '#BADA55'
    p.style.fontSize = '50px'
}

// Regular
console.log('hello')

// Interpolated
console.log('Hello I am a %s string', 'somestringpassed') // deprecated by `${}`

// Styled
console.log('%c I am some great text', 'font-size:50px; background: red; text-shadow: 10px 10px 0 blue') // styles in the console

// warning!
console.warn('OH NOO') // leaves a stack trace error

// Error :|
console.error('Shit!') // leaves a stack trace error
// Info
console.info('Crocodiles eat 3-4 people per year')

// Testing
console.assert(1 === 2, 'That is wrong!') // only displays if assertion is false

const p = document.querySelector('p')

console.assert(p.classList.contains('ouch'), 'That is wrong!') // returns false shows because p does not have class of 'ouch'
// clearing
// console.clear() // clears console

// Viewing DOM Elements
// console.log(p) // shows the element itself
console.dir(p) // shows all the methods, attributes of element

console.clear() // clears console

// Grouping together
dogs.forEach(dog => {
    // console.group(`${dog.name}`) // formats each console into a table style index
    console.groupCollapsed(`${dog.name}`) // and hides it behind a expandable clickable tab
    console.log(`This is ${dog.name}`)
    console.log(`${dog.name} is ${dog.age} years old`)
    console.log(`${dog.name} is ${dog.age * 7} dog years old`)
    console.groupEnd(`${dog.name}`)
})

// counting
console.count('Wes')
console.count('Wes')
console.count('Steve')
console.count('Wes')
console.count('Steve')
console.count('Wes')
console.count('Wes')
console.count('Wes')
console.count('Steve')

// timing
console.time('fetching data') // console.time() returns how long it took for a certain named task to end
// fetch data from github
fetch('https://api.github.com/users/tomit4')
    .then(data => data.json())
    .then(data => {
        console.timeEnd('fetching data')
        console.log(data)
    })

// Formats an array as a table in the console
console.table(dogs)
