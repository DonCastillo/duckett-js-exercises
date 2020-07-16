var div1 = document.getElementsByClassName('div-1')[0];
var div2 = document.getElementsByClassName('div-2')[0];
var div3 = document.getElementsByClassName('div-3')[0];
var div4 = document.getElementsByClassName('div-4')[0];
var div5 = document.getElementsByClassName('div-5')[0];
var div6 = document.getElementsByClassName('div-6')[0];



function showAlert(e){
    alert(e.target.innerText + '\n' + e.type);
}

// single event listener attached to an element. 
// it listens to event on its child elements
// use e variable to specify the elements
div3.addEventListener('click', function(e){showAlert(e)}, false);

// event listeners attacted to nested divs to demonstrate bubble/capture effects
div4.addEventListener('click', function(){
    alert('DIV 4' + '\n' + this.textContent);
}, false);

div5.addEventListener('click', function(){
    alert('DIV 5' + '\n' + this.textContent);
}, false);

div6.addEventListener('click', function(){
    alert('DIV 6' + '\n' + this.textContent);
}, false);