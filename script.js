function createGrid() {
// Selecting the container div
const container = document.querySelector(".container");

// Creating the grid Item variable to be used in the loop
let gridItem;

function getGridAmount() {
    const gridAmount = parseInt(prompt(`How many fields wide do you want your canvas? \nEnter a number between 1 - 100`));
    if (gridAmount > 100) {
        alert("Please enter a number of 100 or below!");
        getGridAmount();
    } else {
        return gridAmount;
    }
}

let gridAmount = getGridAmount();

// Loop creates the div, gives it the correct classname and then append it to container
for (let i = 0; i < gridAmount * gridAmount; i++) {
    gridItem = document.createElement('div');
    gridItem.className = "grid_item";
    container.append(gridItem);
}

// Determines the grid-template-columns for .container and width & height for .grid_item
function itemSize() {
    const container = document.querySelector('.container');
    const squares = document.querySelectorAll('.grid_item');

    container.style.gridTemplateColumns = `repeat(${gridAmount}, 1fr)`;

     let squareSize = 320/gridAmount;

     squares.forEach((square) => {
        square.style.width = `${squareSize}px`;
     });
     squares.forEach((square) => {
        square.style.height = `${squareSize}px`;
     })
}

itemSize();
}

// Function changing style of the grid items when you hover the mouse over them
function gridHover() {
    const grid = document.querySelectorAll('.grid_item');

    grid.forEach((square) => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = "#03d543";
        })
    })

}

// Calls the functions as soon as the page is loaded
createGrid();
gridHover();