// note how this returns all elemnts within the .controls div that are of tag type, input
const inputs = document.querySelectorAll('.controls input'); // querySelectorAll returns a Node List, NOT an array

function handleUpdate() {
    const suffix = this.dataset.sizing || '' //data-sizing
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix) // suffix = px
}

inputs.forEach(input => input.addEventListener('change', handleUpdate))
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate))
