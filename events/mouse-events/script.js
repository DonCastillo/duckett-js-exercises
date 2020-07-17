var parent = document.getElementById('parent');
var cells;

function loadTiles(){
    // create 50 cells
    for(let i=0; i<100; ++i){
        var randNum = Math.floor(Math.random() * 100) + 1;
        var randColor = Math.floor(Math.random()*16777215).toString(16);

        var div = document.createElement('div');
        div.id = i + 1;
        div.textContent = randNum;
        div.style.backgroundColor = `#${randColor}`;
        div.style.color = '#000000';
        div.className = 'cells';
        parent.appendChild(div);
    }

    cells = document.querySelectorAll('.cells');
    for(let i=0; i<cells.length; ++i){
        cells[i].addEventListener('click', function(e){getValue(e)}, false);
        cells[i].addEventListener('mouseover', function(e){mulValue(e)}, false);
    }
}

function mulValue(e){
    var el = e.target;
    el.textContent = parseInt(el.textContent, 10) * 2;
}

function getValue(e){
    var total = document.getElementById('total');
    var styleObj = {};
    var el = e.target;

    // retrieve style properties
    if(el.hasAttribute('style'))
    {
        var style = (el.getAttribute('style')).split(';');
        for(let i=0; i<style.length; ++i){
            let property = style[i].split(':');
            let name = property[0];
            let val = property[1];
            styleObj[name] = val;
        }
    }
    // change the total
    total.textContent = parseInt(total.textContent, 10) + parseInt(el.textContent, 10);
    if(styleObj.hasOwnProperty('background-color')){
        total.style.color = styleObj['background-color'];
    } else {
        total.style.color = '#000000';
    }

    // remove this object
    var parent = el.parentNode;
    parent.removeChild(el);
}

window.addEventListener('load', loadTiles, false);




