function checkInput(minLength){
    //alert(this);
    var msg = document.getElementById('msg');
    var user = document.getElementById('user');
    if( user.value.length < minLength ){
        msg.textContent = 'Text too short!';
        msg.style.color = 'red';
        msg.style.fontWeight = 'bold';
    } else {
        msg.textContent = 'Good!';
        msg.style.color = 'green';
        msg.style.fontWeight = 'bold';
    }
}

var user = document.getElementById('user');
// user.addEventListener('keypress', function(){
//     checkInput(10);
// });
user.onkeypress = function(){ checkInput(3) };