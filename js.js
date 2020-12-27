// set initial columns and rows w css grid

document.getElementById('container').style.setProperty('display', 'grid');
document.getElementById('container').style.setProperty('grid-template-columns', 'repeat(16, 1fr)');
document.getElementById('container').style.setProperty('grid-template-rows', 'repeat(16, 1fr)');

// set initial divs and div attributes

for (let i = 1; i <= 256; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'subdiv');
    div.setAttribute('id', i);
    document.getElementById('container').appendChild(div);
    div.setAttribute('onMouseOver', 'changeBackground(id)');
}

// function for change background onMouseOver

function changeBackground(id) {
    document.getElementById(id).style.background = 'blue';
}

// add prompt function to button

document.getElementById('refresh').addEventListener('click', numberPerSide);

// prompt function

function numberPerSide() {

    //remove previous divs

    let subdivs = document.getElementsByClassName('subdiv');
    while (subdivs[0]) {
        subdivs[0].parentNode.removeChild(subdivs[0]);
    }

    // prompt

    let num = parseInt(prompt('Enter number of squares per side. Number should be between 1 and 100.'));

    // make sure number is between 1 and 100

    if (num < 1 || num > 100) {
        let num = parseInt(prompt('Enter number of squares per side. Number should be between 1 and 100.'));
    }

    // set new rows and columns

    document.getElementById('container').style.setProperty('display', 'grid');
    document.getElementById('container').style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`);
    document.getElementById('container').style.setProperty('grid-template-rows', `repeat(${num}, 1fr)`);

    // set new divs and div attributes

    let squares = num * num;

    for (let i = 1; i <= squares; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'subdiv');
        div.setAttribute('id', i);
        document.getElementById('container').appendChild(div);
        div.setAttribute('onMouseOver', 'changeBackground(id)');
    }
}

// add event listener to clear button

document.getElementById('clear').addEventListener('click', clear);

// clear function

function clear(){
    let subdivs = document.getElementsByClassName('subdiv');
    // for (let i = 0; i < subdivs.length; i++){
    //     subdivs[i].style.background = 'none';
    // } OR (just to be fancy):
    Array.from(subdivs).forEach(x=>x.style.background = 'none')
}