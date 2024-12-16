const container = document.getElementById('grid-container');
const generateButton = document.getElementById('generate-button');
const resetButton = document.getElementById('reset-button');
let gridSize = 0;

function randomColor() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
    // Stolen code to generate a random hex
}

function createDivs(num) {

    let dimension = num ** 2
    let containerDim = parseInt(getComputedStyle(container).height)
    container.innerHTML = '';

    for (let i = 0; i < dimension; i++) {
        let div = document.createElement('div');
        div.className = 'grid';
        // div.style.backgroundColor = randomColor();
        // div.style.border = 'yellow 1px solid';
        div.style.width = `${containerDim / num}px`;
        div.style.height = `${containerDim / num}px`;
        container.appendChild(div)
    }
}

function draw(event) {
    let target = event.target;

    if (target.className === 'grid') {
        target.classList.add('active')
    }
}

generateButton.addEventListener('click', function () {
    gridSize = prompt('Enter grid size');

    gridSize <= 0 ? gridSize = 16 : gridSize
    gridSize < 2 ? gridSize = 2 : gridSize;
    gridSize > 100 ? gridSize = 100 : gridSize;

    createDivs(gridSize);
});

resetButton.addEventListener('click', function () {
    container.innerHTML = '';
    createDivs(gridSize);
})

container.addEventListener('mouseover', draw)