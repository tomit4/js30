// you can access LocalStorage from your devtools in the console (type localstorage)
// or you can navigate to your Applications Tab and find it there as well

const addItems = document.querySelector('.add-items')
const itemsList = document.querySelector('.plates')
// looks for existing items in localStorage first, otherwise uses an empty array
const items = JSON.parse(localStorage.getItem('items')) || []

function addItem(e) {
    e.preventDefault() // prevents submit from refreshing page
    // this.querySelector narrows the query through the html page
    // to the specific name attribute
    const text = this.querySelector('[name=item]').value // grabs whatever the user has typed
    const item = {
        text, // ES6 syntax converts to text: text
        done: false,
    }

    items.push(item)
    populateList(items, itemsList)
    // localStorage.setItem('items', items) // returns [object Object]
    localStorage.setItem('items', JSON.stringify(items))
    this.reset() // form element is cleared
}

// takes in the items array and the itemsList html element
// NOTE: this is a chance where a framework like Vue/React/Angular might be helpful as this re-renders every item on each input, which could impact performance depending on how dynamic this function is
function populateList(plates = [], platesList) {
    platesList.innerHTML = plates.map((plate, i) => {
            // note the 'for=item${i}' is to link the input to the label, so that when clicked on the label, the checkbox recognizes it as well
            return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `
        }).join('') // dynamically creates one large string from an array produced from map()
}

function toggleDone(e) {
    if (!e.target.matches('input')) return // skip; this unless it's an input
    const el = e.target
    const index = el.dataset.index
    items[index].done = !items[index].done
    localStorage.setItem('items', JSON.stringify(items))
    populateList(items, itemsList)
}

addItems.addEventListener('submit', addItem)
itemsList.addEventListener('click', toggleDone)
populateList(items, itemsList)

// ADDITIONAL CHALLENGE: Add clear all button at bottom, check all button, and delete all button
