var body = document.getElementsByTagName('body')[0];
body.onmousemove = function(e){ 
    let sx = document.getElementById('sx');
    let sy = document.getElementById('sy');
    let px = document.getElementById('px');
    let py = document.getElementById('py');
    let cy = document.getElementById('cy');
    let cx = document.getElementById('cx');

    sx.value = e.screenX;
    sy.value = e.screenY;
    px.value = e.pageX;
    py.value = e.pageY;
    cx.value = e.clientX;
    cy.value = e.clientY; 
 };