class COVID {
  constructor(country, cases, worldCases, deaths, worldDeaths) {
    this.country = country;
    this.cases = cases;
    this.deaths = deaths;
    this.worldCases = worldCases;
    this.worldDeaths = worldDeaths;
  }
  caseRatio() {
    return ((this.cases / this.worldCases) * 300).toFixed(2);
  }
  deathRatio() {
    return ((this.deaths / this.worldDeaths) * 300).toFixed(2);
  }
  formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }
  formatRow() {
    let row = `
            <div class="container">
                <div class="country">${this.country}</div>
                <div class="figures">
                    <div class="cases">
                        <div class="graph" style="min-width:${this.caseRatio()}%;"></div>
                        <div class="num">${this.formatNumber(this.cases)}</div>
                    </div>
                    <div class="deaths">
                        <div class="graph" style="min-width:${this.deathRatio()}%;"></div>
                        <div class="num">${this.formatNumber(this.deaths)}</div>
                    </div>
                </div>
            </div>
        `;
    return row;
  }
}

function insertData(objs) {
    let allData = [];
    $.each(objs, function (key, value) {
    allData.push(value.formatRow());
    });
    $("#data").html(allData);
}

$(document).ready(function () {
    // all COVID objs
    covidObjs = new Array();

    // get JSON data
    $.getJSON("https://coronavirus-19-api.herokuapp.com/countries", null, function (data, textStatus, jqXHR) {
    let totalCases = null;
    let totalDeaths = null;

    $.each(data, function (key, value) {
        if (value["country"] === "World") {
        totalCases = value["cases"];
        totalDeaths = value["deaths"];
        } else {
        let covidObj = new COVID(
            value["country"],
            value["cases"],
            totalCases,
            value["deaths"],
            totalDeaths
        );
        covidObjs.push(covidObj);
        }
    });

    //console.log(covidObjs.length);
    insertData(covidObjs);
    });

    // events
    $('input[type="radio"]').change(function (e) {
        e.preventDefault();
        let el = e.target;

        if (el.id === "by_death") {
            covidObjs.sort((a, b) => {
                if(a.deaths === b.deaths)
                    return 0;
                else if(a.deaths > b.deaths)
                    return -1;
                else    
                    return 1;
            });
            insertData(covidObjs);
        } else {
            covidObjs.sort((a, b) => {
                if(a.cases === b.cases)
                    return 0;
                else if(a.cases > b.cases)
                    return -1;
                else    
                    return 1;
            });
            insertData(covidObjs);
        }
    });

    $(window).scroll(function () { 
        if($(window).scrollTop() > $('.nav').height()){
            $('.nav').css('position', 'fixed');
        } else {
            $('.nav').css('position', 'relative');
        }
    });
});

// var xhr = new XMLHttpRequest();
// xhr.onload = () => {
//     let data = xhr.response;
//     // do something with the data here...
// };
// xhr.open('GET', 'covid.json', true);
// xhr.responseType = 'json';
// xhr.send();
