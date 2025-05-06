const gridContainer = document.querySelector(".container");
const inputButton  = document.querySelector(".inputButton");

inputButton.addEventListener("click", () => {
  gridInput();
});

function gridInput() {
  gridContainer.innerHTML = '';
  let input = prompt("Enter A Grid Size ()", "16");
  if (input > 100) {
    alert("Please enter a value less than 100.");
  } else {
    printGrid(input);
  }
  
};

function printGrid(numBlocks) {
  numBlocks *= numBlocks
  const size = 100 / Math.sqrt(numBlocks) + "%";

  for (let i = 0; i < numBlocks; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("block");

    gridBlock.style.flexBasis = size;
    gridBlock.style.height = size;
    let shade = 255;
    
    gridBlock.addEventListener("mouseover", () => {
      shade -= 51;
      gridBlock.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
    });

    gridContainer.appendChild(gridBlock);
    
  }

}







