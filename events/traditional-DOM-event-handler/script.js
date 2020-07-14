function animate()
{
    var bar = document.getElementsByClassName('bar');
  
    for(var i = 0; i < bar.length; ++i){
        if( bar[i].hasAttribute('style') ) {
            bar[i].removeAttribute('style');
        } else {
            bar[i].setAttribute('style', 'width:100%;' );
        }
    }
}   

var el = document.getElementsByTagName('button')[0];
el.onclick = animate;