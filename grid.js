const gridContainer = document.querySelector(".container");


function printGrid(numBlocks) {
  const size = 100 / Math.sqrt(numBlocks) + "%";

  for (let i = 0; i < numBlocks; i++) {
    const gridBlock = document.createElement("div");
    gridBlock.classList.add("block");

    gridBlock.style.flexBasis = size;
    gridBlock.style.height = size;
    let shade = 255;

    gridBlock.addEventListener("mouseover", () => {
      shade -= 30;
      gridBlock.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
    });

    gridContainer.appendChild(gridBlock);
    
  }

}



printGrid(16);




