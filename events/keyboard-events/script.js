var nameEl = document.getElementById('name');
var textEl = document.getElementsByTagName('textarea')[0];
var textEl_2 = document.getElementsByTagName('textarea')[1];
var actionEl = document.getElementById('action');

function checkNumOfChars(){
    var msg = document.getElementById('name-msg');
    var totalChar = 50;
    var charLeft = totalChar - this.value.length;
    if(charLeft >= 0){
        msg.style.color = 'green';
        msg.style.fontWeight = 'bolder';
    } else {
        msg.style.color = 'red';
        msg.style.fontWeight = 'bolder';
    }
    msg.textContent = charLeft;
}

function addKeyDown(){
    var span = document.createElement('span');
    span.style.backgroundColor = 'lightgreen';
    span.textContent = ' KEYDOWN ';
    actionEl.appendChild(span);
}

function addKeyUp(){
    var span = document.createElement('span');
    span.style.backgroundColor = 'lightblue';
    span.textContent = ' KEYUP ';
    actionEl.appendChild(span);
}

function displayText(e){
    var outputEl = document.getElementById('charOutput');
    var text = document.createTextNode(String.fromCharCode(e.keyCode));
    outputEl.appendChild(text);
}

function displayText_2(e){
    var outputEl = document.getElementById('charOutput');
    if(e.keyCode == '8'){
        var el = e.target;
        var newText = (outputEl.textContent).substr(0, outputEl.textContent.length - 1);
        outputEl.textContent = newText;
    }
}
nameEl.oninput = checkNumOfChars;
textEl.onkeydown = addKeyDown;
textEl.onkeyup = addKeyUp;
textEl_2.onkeypress = function(e){ displayText(e); };
textEl_2.onkeydown = function(e){ displayText_2(e); };