function checkInput(){
    switch( this.value.length ){
        case 0: case 1: case 2:
            this.style.backgroundColor = 'red';
            break;
        case 3: case 4: case 5:
            this.style.backgroundColor = 'orange';
            break;
        case 6: case 6: case 7:
            this.style.backgroundColor = 'yellow';
            break;
        case 8: case 9: case 10:
            this.style.backgroundColor = 'green';
            break;
        case 11: case 12: case 13:
            this.style.backgroundColor = 'blue';
            break;
        case 14: case 15: case 16:
            this.style.backgroundColor = 'indigo';
            break;
        case 17: case 18: case 19:
            this.style.backgroundColor = 'violet';
            break;
        default:
            this.style.backgroundColor = 'black';
            this.style.color = 'white';
            break;
    }
}

var user = document.getElementById('user');
user.addEventListener('keypress', checkInput);