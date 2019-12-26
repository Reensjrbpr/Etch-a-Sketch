let gridSize = 16;

generate(gridSize);

function draw(){
    const square = document.querySelectorAll('.square');

    square.forEach(square => square.addEventListener('mouseover', () =>{

        square.style.cssText = 'background-color: black';
    }));
}

const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
    const square = document.querySelectorAll('.square');
    square.forEach(square => square.style.cssText = 'background-color: lightgray');
    let gridSize = prompt("Enter a number between 1-100 to resize the grid:\n\n\n");

    generate(gridSize);
});

function generate(gridSize){

    const div = document.querySelector('.grid');
    const clearSquare = document.querySelectorAll('.square');
    
    let sqrNum = gridSize;

    clearSquare.forEach(clearSquare => div.removeChild(clearSquare));
    
    gridSize *= gridSize;

    for(let i = 1; i < (gridSize + 1); i++){
        const gridItem = document.createElement('div');
        gridItem.classList.add('square');
        div.appendChild(gridItem);
    }

    div.style.cssText = `grid-template-columns: repeat(${sqrNum}, 1fr)`;

    draw();
}