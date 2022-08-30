const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked

function handleCheck(e) {
    // console.log(e)
    // Check if they had the shift key down
    // AND check that they are checking it (not unchecking it)
    let inBetween = false
    // shift key doesn't fire, tested on w3schools...
    // if (e.shiftKey && this.checked) {
    if (e.ctrlKey && this.checked) {
        // go ahead adn do what we please
        // loop over every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox)
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween
                console.log('Starting to check them inbetween!')
            }

            if(inBetween) {
                checkbox.checked = true
            }
        })
    }


    lastChecked = this
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))
