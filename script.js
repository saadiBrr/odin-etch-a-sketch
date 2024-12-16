const container = document.getElementById('grid-container');
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    // Stolen code to generate a random hex
}

function createDivs(num) {

    let dimension = num**2
    let containerDim = parseInt(getComputedStyle(container).height)
    container.innerHTML = '';

    for (let i = 0; i < dimension; i++) {
        let div = document.createElement('div');
        div.className = 'grid';
        div.style.backgroundColor = randomColor();
        div.style.border = 'pink 1px dashed';
        div.style.width = `${containerDim / num}px`;
        div.style.height = `${containerDim / num}px`;
        container.appendChild(div)
    }
}

generateButton.addEventListener('click', function() {
    createDivs(16)
});

resetButton.addEventListener('click', function() {
    container.innerHTML = '';
})