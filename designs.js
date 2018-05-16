// Select color input
const colorBlock = document.getElementById("colorPicker");

// Select size input
const gridHeight = document.getElementById("inputHeight");
const gridWidth = document.getElementById("inputWidth");

// Select grid
const grid = document.getElementById("pixelCanvas");

// When size is submitted by the user, call makeGrid()
let submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    makeGrid();
});

function makeGrid() {
    grid.innerHTML = "";
    for (var row = 0; row < gridHeight.value; row++) {
        //take the height number and add that many to grid <tr>
        let newTR = document.createElement("tr");
        grid.appendChild(newTR);      
        for(var column = 0; column < gridWidth.value; column++) {
            //take the value in gridWidth and add that many <td> to tr
            let newTD = document.createElement("td");
            newTR.appendChild(newTD); 
        }
    }
}

//add color to the grid
grid.addEventListener("click", function (evt) {
       if (evt.target.nodeName === "TD") {
           evt.target.style.backgroundColor = colorBlock.value;
       }
});
