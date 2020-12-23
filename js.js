//need to clear the squares before changing them.

// set columns and rows w css grid

document.getElementById('container').style.setProperty('display', 'grid');
document.getElementById('container').style.setProperty('grid-template-columns', 'repeat(16, 1fr)');
document.getElementById('container').style.setProperty('grid-template-rows', 'repeat(16, 1fr)');

// set initial divs and div attributes

for (let i=1; i<=256; i++) {
    let div = document.createElement('div');
    div.setAttribute('class', 'subdiv');
    div.setAttribute('id', i);
    document.getElementById('container').appendChild(div);
    div.setAttribute('onMouseOver', 'changeBackground(id)');
}

// change background onMouseOver

function changeBackground(id){
    document.getElementById(id).style.background = 'blue';
}

// user input: number per side

document.getElementById('refresh').addEventListener('click', numberPerSide);

function numberPerSide(){
    let num = parseInt(prompt('Enter number of squares per side.'));
// remove previous divs [test this]

    //let subdivs = document.getElementsByClassName('subdiv');
    //document.getElementById('container').removeChild(subdivs);

// set new rows and columns

    document.getElementById('container').style.setProperty('display', 'grid');
    document.getElementById('container').style.setProperty('grid-template-columns', `repeat(${num}, 1fr)`);
    document.getElementById('container').style.setProperty('grid-template-rows', `repeat(${num}, 1fr)`);

// set new divs and div attributes

    let squares = num * num;
    
    for (let i=1; i<=squares; i++) {
        let div = document.createElement('div');
        div.setAttribute('class', 'subdiv');
        div.setAttribute('id', i);
        document.getElementById('container').appendChild(div);
        div.setAttribute('onMouseOver', 'changeBackground(id)');
    }
}
