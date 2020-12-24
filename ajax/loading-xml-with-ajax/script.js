// create XMLHttpRequest object
var xhr = new XMLHttpRequest();


class Country {
    constructor(pName, pCapital, pContinent, pFlag) {
        this.name = pName.textContent;
        this.capital = pCapital.textContent;
        this.continent = pContinent.textContent;
        this.flag = pFlag.textContent;
    }
    
    setRow(){
        let tr = document.createElement('tr');
        let td = document.createElement('td');
        let img = document.createElement('img');
        img.setAttribute('src', this.flag);
        img.setAttribute('alt', this.name);
        let td1 = td.cloneNode();
        let td2 = td.cloneNode();
        let td3 = td.cloneNode();
        let td4 = td.cloneNode();
        td1.appendChild(img);
        td2.appendChild(document.createTextNode(this.name));
        td3.appendChild(document.createTextNode(this.capital));
        td4.appendChild(document.createTextNode(this.continent));
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);
        return tr;
    }
};


// client response when data is received from the server
xhr.onload = function() {
    if (xhr.status === 200){
        var response = xhr.responseXML; // type of data retrieved
        var countries = response.querySelectorAll('countries country'); // get all the countries, just like in HTML
    
        let table = document.createElement('table');
        

        for(const country of countries) {
            let name = country.getElementsByTagName('name').item(0);
            let capital = country.getElementsByTagName('capital').item(0);
            let continent = country.getElementsByTagName('continent').item(0);
            let flag = country.getElementsByTagName('flag').item(0);
            
            // insert each data as obj and create a row
            let countryObj = new Country(name, capital, continent, flag);
            document.querySelector('table tbody').appendChild(countryObj.setRow());
        } 
    }
}


// prepares the request
// indicate the ff:
// http method
// url to get the data from (explicitly indicate the relative or absolute URL)
// asynchronous (true) or not (false)
xhr.open('GET', 'countries.xml', true);
xhr.send(null);