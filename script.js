function createGrid() {
// Selecting the container div
const container = document.querySelector(".container");

// Creating the grid Item variable to be used in the loop
let gridItem;

// Loop creates the div, gives it the correct classname and then append it to container
for (let i = 0; i < 256; i++) {
    gridItem = document.createElement('div');
    gridItem.className = "grid_item";
    container.append(gridItem);
}
}

createGrid();