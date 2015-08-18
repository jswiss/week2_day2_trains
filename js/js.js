//holds click action until window loads
window.onload = function (){

  var clickResult = document.getElementById('button');
  var show = function(result){
  document.getElementById("answer").className = "show";
};
  clickResult.addEventListener('click', function(stops){
    
    //train arrays for stops
    var lineL = ["8th", "6th", "Union Square", "3rd", "1st"];
    var lineN = ["Times Square", "34th", "28th - N", "23rd - N", "Union Square", "8th"];
    var line6 = ["Grand Central", "33rd", "28th - 6", "23rd - 6", "Union Square", "Astor Place"];

    //drop list values
    var line1 = document.getElementById("line1-list").value;
    var station1 = document.getElementById("station1-list").value;
    var line2 = document.getElementById("line2-list").value;
    var station2 = document.getElementById("station2-list").value;

    //brings in drop list values
    var getTrain1 = function(event){
        switch (line1) {
            case "L":
              return lineL.indexOf(station1);
              break;
            case "N":
              return lineN.indexOf(station1);
              break;
            case "6":
              return line6.indexOf(station1);
            default:
              console.log("ERROR");
        }
    }; 
    var getTrain2 = function(event){
        switch (line2) {
            case "L":
              return lineL.indexOf(station2);
              break;
            case "N":
              return lineN.indexOf(station2);
              break;
            case "6":
              return line6.indexOf(station2);
            default:
              console.log("ERROR");
        }
    };

    //finds number of stops
    var stops = function (event){
      if (getTrain2 > getTrain1){
        return getTrain2() - getTrain1();
      } else {
        return getTrain1() - getTrain2();
      }
    };
  console.log("You have " + stops() + " stops to go until you reach your destination");
  document.getElementById("answer").innerHTML = "You have " + stops() + " stops to go until you reach your destination";  

  })
};


