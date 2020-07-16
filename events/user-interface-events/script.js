window.addEventListener('load', function(){
    var load = document.getElementById('load');
    load.textContent += ' load';
}, false);

window.addEventListener('scroll', function(){
    var scroll = document.getElementById('scroll');
    scroll.textContent += ' scroll';
}, false);

window.addEventListener('resize', function(){
    var resize = document.getElementById('resize');
    resize.textContent += ' resize';
}, false);

window.addEventListener('beforeunload', function(){
    var unload = document.getElementById('unload');
    unload.textContent += ' unload';
}, false);