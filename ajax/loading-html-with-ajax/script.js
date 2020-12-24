var xhr = new XMLHttpRequest();

class Color {
  constructor(cName, cHex) {
    this.colorName = cName;
    this.colorHex = cHex;
  }
  formatDiv(){
    let div = document.createElement('div');
    div.style.backgroundColor = this.colorHex;
    div.style.color = '#000';
    div.setAttribute('data-hex', this.colorHex);
    div.setAttribute('data-name', this.colorName);
    div.appendChild(document.createTextNode(this.colorName));
    return div;
  }
}

xhr.onload = () => {
  let response = xhr.response;
  let tableRow = response.querySelectorAll("table tbody tr");

  let parentDiv = document.getElementById('colors');

  for (const color of tableRow) {
    let colorName = color.children.item(1).textContent;
    let colorHex = color.children.item(2).textContent;
    let colorObj = new Color(colorName, colorHex);
    parentDiv.appendChild(colorObj.formatDiv());
  }
};

xhr.open("GET", "colors.html", true);
xhr.responseType = "document"; // sets what type of content the client is expecting
xhr.send(null);


// event
let a = document.getElementById('colors');
console.log(a);


a.addEventListener('mouseover', (e) => {
    let el = e.target;
    if(el.id != 'colors'){
        el.className = 'hovered';
        el.style.color = el.style.backgroundColor;
        el.textContent = el.getAttribute('data-hex');
    }
        
});


a.addEventListener('mouseout', (e) => {
   let el = e.target;
   if(el.id != 'colors'){
        el.className = '';
        el.style.color = '#000';
        el.textContent = el.getAttribute('data-name');
   }
        
});

