const divContainer = document.querySelector('.container'); //'div with the class "container"
let out = document.querySelector('#xrange');
let slider = document.querySelector('#range');
out.value = slider.value;
let btn = document.querySelector('button');
btn.addEventListener('click', ask);
let colorCount = 0;

slider.oninput = function(){
    out.value = this.value;
}

function clearAll(){
    while (divContainer.firstChild){
        divContainer.removeChild(divContainer.firstChild);
    }
}

function ask(){
    let ask = confirm(`Are you sure you want to create new grid with ${out.value} * ${out.value} sqares?`);
    clearAll();
    if (ask){
        createGrid(out.value);
    }
}

function createGrid(size){
    //let size = out.value;
    divContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    divContainer.style.gridTemplateRows= `repeat(${size}, 1fr)`;
    
    for(i=0; i<size*size; i++){
        const div = document.createElement('div');
        div.addEventListener('mouseover', changeColor);
        div.classList.add('square');
        divContainer.appendChild(div);
        colorCount = 0;
  }
}


function changeColor(){
    let red = Math.random()*256;
    let green = Math.random()*256;
    let blue = Math.random()*256;

    color = `rgb(${red-(red*colorCount)},${green-(green*colorCount)},${blue-(blue*colorCount)})`;
    this.style.backgroundColor = color;
    colorCount += 0.10;
  }
