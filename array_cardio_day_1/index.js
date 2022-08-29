const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function bornBeforeFifteen(inventorArr) {
  const result = inventorArr.filter(
    (inventor) => inventor.year >= 1500 && inventor.year < 1600
  );
  console.table(result);
}
// bornBeforeFifteen(inventors)

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names

function returnFirstAndLastNames(inventorArr) {
  const result = inventorArr.map(
    (inventor) => `${inventor.first} ${inventor.last}`
  );
  console.log(result);
}

// returnFirstAndLastNames(inventors)

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(firstPerson, secondPerson) {
// if (firstPerson.year > secondPerson.year) return 1
// else return -1
// })

// With Ternary operator
const ordered = inventors.sort((firstPerson, secondPerson) =>
  firstPerson.year > secondPerson.year ? 1 : -1
);
// console.log(ordered)

// Array.prototype.reduce()
// 4. How many years did all inventors live?

const totalYears = inventors.reduce((total, inventor) => {
  return total + (inventor.passed - inventor.year);
}, 0); // argument total starts at 0

// console.log(totalYears)

// 5. Sort the inventors by years lived
const oldest = inventors.sort((a, b) => {
  const lastGuy = a.passed - a.years;
  const nextGuy = b.passed - b.years;
  return lastGuy > nextGuy ? -1 : 1;
});

// console.log(oldest)

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// I have also provided the downloaded html page: boulevards_in_paris.html

// This requires a bit of searching, but is a decent exercise exploring how to inspect other's html elements, look for the elements that go over the list, and use querSelector to grab the nodes, from there we will grab the links and then use map() to find all the boulevards that contain the substring 'de'

// input into devtools
// const category = document.querySelector('.mw-category')
// const links = Array.from(category.querySelectoryAll('a'))

// const de = links
// .map(link => link.textContent)
// .filter(streetName => streetName.includes('de'))

// console.log(de)

// 7. sort exercise
// Sort the people alphabetically by last name

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(", "); // destructures it into two variables: last, first
  const [bLast, bFirst] = nextOne.split(", "); // destructures it into two variables: last, first
  return aLast > bLast ? 1 : -1;
  // console.log(alast, afirst)
  // console.log(lastOne)
});

// console.table(alpha)

// 8. Reduce exercise
// Sum up the instances of each of these in data[]

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
  "pogostick",
];

const transportation = data.reduce((obj, item) => {
  // obj represents each value in our array, and item is the index value
  if (!obj[item]) {
    obj[item] = 0; // provides our initial value
  }
  obj[item]++;
  return obj;
}, {}); // start with a blank object

console.log(transportation); // returns object: {car: 5, truck: 3, bike: 2, walk: 2, van: 2, pogostick: 1}
