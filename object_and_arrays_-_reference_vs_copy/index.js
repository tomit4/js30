// start with strings, numbers and booleans
let age = 100
let age2 = age
console.log(age, age2) // returns 100 100
age = 200
console.log(age, age2) // returns 200 100 !!age2 remains 100 because age2 holds onto original copied value

// same idea with strings
let name = 'Wes'
let name2 = name
console.log(name, name2) // returns Wes Wes
name = 'wesley'
console.log(name, name2) // returns wesley Wes

// Let's say we have an array
const players = ['Wes', 'Sarah', 'Ryan', 'Poppy']

// and we want to make a copy of it.
const team = players // returns ['Wes', 'Sarah', 'Ryan', 'Poppy']
console.log(players, team) // returns ['Wes', 'Sarah', 'Ryan', 'Poppy']

// You might think we can just do something like this:
// team[3] = 'Lux'
// console.log(players, team) // returns ['Wes', 'Sarah', 'Ryan', 'Lux'] twice over!!, this is unexpected considering our previous examples above

// This is because team is not a COPY, it is a REFERENCE

// however what happens when we update that array?
const team2 = players.slice() // slice actually copies when there are no arguments, this is a COPY
team2[3] = 'Lux'
console.log(team2) // returns ['Wes', 'Sarah', 'Ryan', 'Lux']
console.log(players) // returns ['Wes', 'Sarah', 'Ryan', 'Poppy']

// Other ways of making a copy are are to concat the old one into a new array:
// const teams3 = [].concat(players)

// ES6 spread operator can also make a COPY of the array
// const team4 = [...players]

// Lastly is to use the Array.from() method, copying from the prototype itself
// const team5 = Array.from(players)

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name: 'Wes Bos',
    age: 80,
}

// and think we make a copy:
// const captain = person
// captain.number = 99
// console.log(person) // returns {name: 'Wes bos', age: 80, number: 99} !! unexpected: we changed our prototype object of person, this is because when we const captain = person, we created a REFERENCE, not a COPY

// how do we take a copy instead?
const cap2 = Object.assign({}, person, { number: 99 })
console.log(cap2) // returns {name: 'Wes Bos', age: 80, number: 99}, this is our COPY
console.log(person) // returns {name: 'Wes Bos', age: 80,}, which is our ORIGINAL

// We will hopefully soon see the object ...spread...WE DO!!!
const cap3 = {...person}
cap3.number = 105
console.log(cap3) // returns {name: 'Wes Bos', age: 80, number: 105}

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.

const wes = {
    name: 'Wes',
    age: 100,
    social: {
        twitter: '@wesbos',
        facebook: 'wesbos.developer'
    }
}

const dev = Object.assign({}, wes)
console.clear()
// console.log(wes) // returns object as above
// dev.name ='Wesley'
// console.log(dev) // returns object as expected with dev name changed to 'Wesley'

// dev.social.twitter = '@coolman'
// console.log(dev) // returns as expected
// console.log(wes) // but wes.social.twitter is also now '@coolman'... !!not as expected

// This is because Object.assign() does make a COPY, but only ONE LEVEL DEEP, if there is anything nested further,, it is now a REFERENCE to it's original object, in this case the object wes

// According to Wesbos, we can find a function called clonedeep() to be used for creating a perfect copy, but he emphasizes considering whether this is necessary or not...

// Poor man's deep clone:

const dev2 = JSON.parse(JSON.stringify(wes)) // stringifies the object, and then parses it...possible performance issue
dev2.social.twitter = '@coolman'
console.log(dev2)
console.log(wes)
