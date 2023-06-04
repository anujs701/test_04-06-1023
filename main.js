//point one
class WebSeries {
  constructor(title, director, ratings, streamingOn) {
    this._title = title;
    this._director = director;
    this._ratings = ratings;
    this._streamingOn = streamingOn;
  }


//point two

get title() {
  return this._title;
}
set title(x) {
  this._title = x;
}

get director() {
  return this._director;
}
set director(x) {
  this._director = x;
}

get stars() {
  return this._ratings;
}
set stars(x) {
  this._ratings = x;
}

get streamingPlatform() {
  return this._streamingOn;
}
set streamingPlatform(x) {
  this._streamingOn = x;
}

// Point six

printDataOnConsole(){
let title = document.getElementById("title").value;
let director = document.getElementById("director").value;
let ratings = document.getElementById("ratings").value;
let streamingOn = document.getElementById("streamingOn").value;

console.log(title);
console.log(director);
console.log(ratings);
console.log(streamingOn);

 }

 printData(data){
  console.log("data ", data);
 }
}
//point three
const WebSeriesArr = [
new WebSeries(
  "Inception",
  "Christopher Nolan",
  "8.8",
  "Amazon Prime"
),
new WebSeries(
  "Interstellar",
  "Christopher Nolan",
  "8.7",
  "Netflix"
),
new WebSeries(
  "Prison Break",
  "Paul T. Scheuring",
  "8.3",
  "Amazon Prime"
),
new WebSeries(
  "Rang De Basanti",
  "Rakeysh Omprakash",
  "8.1",
  "Hot Star"
),

new WebSeries(
  "Rockstar",
  "Imtiaz Ali",
  "7.7",
  "Amazon Prime"
),
new WebSeries(
  "Air",
  "Ben Affleck",
  "7.3",
  "Netflix"
),
];

//point four

const myObj = new WebSeries();
for(let i = 0; i < WebSeriesArr.length; i++){
  myObj.printData(WebSeriesArr[i]);

// point five

  myObj.printData(WebSeriesArr[i].title.toUpperCase());

}
// 
function getValues(){
myObj.printDataOnConsole();
}





