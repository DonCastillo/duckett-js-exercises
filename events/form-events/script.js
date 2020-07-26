var input = document.getElementById('name');
var msg = document.getElementById('msg');
var select = document.getElementsByTagName('select')[0];
var formEl = document.getElementsByTagName('form')[0];
var inputLength = 0;
var selectedVal = '';
msg.textContent = inputLength;

function checkInput(){
    inputLength =  this.value.length;
    msg.textContent = inputLength;
}

function checkSelect(){
    selectedVal = this.value;
}

function checkForm(event){
    console.log(inputLength);
    if(inputLength > 5 && selectedVal === 'peach'){
        alert('Success');
    } else {
        alert('Invalid');
        event.preventDefault();
    }
}

input.addEventListener('input', checkInput, false);
select.addEventListener('change', checkSelect, false);
formEl.addEventListener('submit', function(event){ checkForm(event); }, false);