var buttonAdd = document.getElementsByTagName('button')[0];
var buttonRemove = document.getElementsByTagName('button')[1];
var containerEl = document.getElementById('container');
var actionEl = document.getElementById('action');
var countEl = document.getElementById('count');
var count = 0;
var addCounter = 0;
var removeCounter = 0;

function updateCount(){
    count = containerEl.children.length;
    countEl.textContent = count;
}

function updateHeatMap(){
    var addEl = document.getElementById('addCounter');
    var removeEl = document.getElementById('removeCounter');
    addEl.style.backgroundColor = 'blue';
    addEl.style.opacity = `${addCounter}%`;

    removeEl.style.backgroundColor = 'red';
    removeEl.style.opacity = `${removeCounter}%`;
}

function addContent(){
    var pEl = document.createElement('p');
    pEl.style.backgroundColor = 'pink';
    var textEl = document.createTextNode(`Element ${count + 1}`);
    pEl.appendChild(textEl);
    containerEl.appendChild(pEl);
    updateCount();
}

function removeContent(){
    if(count > 0){
        containerEl.removeChild(containerEl.lastChild);
    }
    updateCount(); 
}

buttonAdd.addEventListener('click', addContent, false);
buttonRemove.addEventListener('click', removeContent, false);

window.addEventListener('load', updateCount, false);
window.addEventListener('load', updateHeatMap, false );

containerEl.addEventListener('DOMNodeInserted', function(){
    addCounter++;
    updateHeatMap();
}, false);

containerEl.addEventListener('DOMNodeRemoved', function(){
    removeCounter++;
    updateHeatMap();
}, false);