//holds click action until window loads
window.onload = function (){
  var clickResult = document.getElementById('button');
  clickResult.addEventListener('click', //add call function here);
}

//hash for trains and stops
// var trainStops = {
var lineL = {"L": ["8th", "6th", "Union Square", "3rd", "1st"]};
var lineN = {"N": ["Times Square", "34th", "28th - N", "23rd - N", "Union Square", "8th"]};
var line6 = {"6": ["Grand Central", "33rd", "28th - 6", "23rd - 6", "Union Square", "Astor Place"]};
// };

var line1 = document.getElementById("line1-list").value;
var station1 = document.getElementById("station1-list").value;
var line2 = document.getElementById("line2-list").value;
var station2 = document.getElementById("station2-list").value;

var yourStops = function (event){
  console.log('testing');
  // var line1 = document.getElementById("line1-list").value;
  var start = trainStops.line1.indexOf(station1);
  var stop = trainStops.line2.indexOf(station2);
  debugger;
  if (trainStops.line1.indexOf(station1) > trainStops.line2.indexOf(station2)) {
    return trainStops.line1.indexOf(station1) - trainStops.line2.indexOf(station2);
  } else {
    return trainStops.line1.indexOf(station1) - trainStops.line2.indexOf(station2);
  }
}

alert("You have " + yourStops() + "to go until you reach your destination");

//use hash to select from var trainStops
