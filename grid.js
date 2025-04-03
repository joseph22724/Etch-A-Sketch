const gridContainer = document.querySelector(".container");


function printGrid (){
    for (let i = 0; i < 16; i++) {
        const gridBlock = document.createElement("div");
        gridBlock.classList.add("block");
        gridContainer.appendChild(gridBlock);
        
    }

}
printGrid();
