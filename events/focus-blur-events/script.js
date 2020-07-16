// focus and blur events only work with form and link elements
var x = document.querySelectorAll('a');




for(let i = 0; i < x.length; ++i){
    x[i].addEventListener('focus', function(e){ 
        var el = e.target;
        document.getElementById('description').innerHTML += `<div id='focus'> focus-${el.textContent} </div>`; 
    }, false);

    x[i].addEventListener('blur', function(e){ 
        var el = e.target;
        document.getElementById('description').innerHTML += `<div id='blur'> blur-${el.textContent} </div>`; 
    }, false);
}

