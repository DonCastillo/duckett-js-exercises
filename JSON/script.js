function ReleaseDate(month, day, year){
    this.month = month;
    this.day = day;
    this.year = year; 
}

function HarryPotterMovie(id, title, releaseDate, director, gross){
    this.id = id;
    this.title = title;
    this.releaseDate = releaseDate;
    this.director = director;
    this.gross = gross;
}

var hp1 = new HarryPotterMovie(1, 'Harry Potter and the Philosopher\'s Stone', new ReleaseDate('November', 16, 2001), 'Chris Columbus', 976475550.00);
var hp2 = new HarryPotterMovie(2, 'Harry Potter and the Chamber of Secrets', new ReleaseDate('November', 15, 2002), 'Chris Columbus', 876688482.00);
var hp3 = new HarryPotterMovie(3, 'Harry Potter and the Prisoner of Azkaban', new ReleaseDate('June', 4, 2004), 'Alfonso Cuaron', 789804554.00);
var hp4 = new HarryPotterMovie(4, 'Harry Potter and the Goblet of Fire', new ReleaseDate('November', 18, 2005), 'Mike Newell', 895921036.00);
var hp5 = new HarryPotterMovie(5, 'Harry Potter and the Order of the Phoenix', new ReleaseDate('July', 11, 2007), 'David Yates', 938212738.00);
var hp6 = new HarryPotterMovie(6, 'Harry Potter and the Half-Blood Prince', new ReleaseDate('July', 15, 2009), 'David Yates', 933959197.00);
var hp7 = new HarryPotterMovie(7.1, 'Harry Potter and the Deathly Hallows: Part 1', new ReleaseDate('November', 19, 2010), 'David Yates', 954305868.00);
var hp8 = new HarryPotterMovie(7.2, 'Harry Potter and the Deathly Hallows: Part 2', new ReleaseDate('July', 15, 2011), 'David Yates', 1341511219.00);

var hpMovies = [];
hpMovies.push(hp1);
hpMovies.push(hp2);
hpMovies.push(hp3);
hpMovies.push(hp4);
hpMovies.push(hp5);
hpMovies.push(hp6);
hpMovies.push(hp7);
hpMovies.push(hp8);

// JSON.stringify() converts an object to JSON data (string formatted)
for(let i=0; i<hpMovies.length; ++i)
    console.log(JSON.stringify(hpMovies[i]));

var hp9 = '{"id": 8, "title": "Harry Potter and the Cursed Child", "releaseDate": {"month": "July", "day": 30, "year": 2016}, "director": "John Tiffany", "gross": 146500000}';

// JSON.parse() converts an JSON date to an object
console.log( JSON.stringify(JSON.parse(hp9)) );