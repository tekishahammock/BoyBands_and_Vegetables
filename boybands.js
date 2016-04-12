var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// var bandLength = bands.length;
// for ( var i = 0 ; i < bandLength ; i++ ) {
// 	document.write( bands[i] + ", " );
// }

// var veggieLength = vegetables.length;
// for (var i = 0 ; i < veggieLength ; i++ ) {
// 	document.write( vegetables[i] + ", " );
// }

// // The number of loops to perform (what if the array changes?)

// MY ANSWER, WHICH WORKS:
// var bandLength = bands.length;
// var veggieLength = vegetables.length;

// if ( bandLength > veggieLength ) {
// 	var longerArray = bandLength;
// } else {
//   var longerArray = veggieLength;
// }

// var loopCount = longerArray
// console.log( loopCount );

// JOE'S ANSWER:
var loopCount = bands.length > vegetables.length ? bands.length: vegetables.length;

// // Keep track of which band we're on in the loop
var currentBand = "";
// SAME AS JOE, AS ADVISED BY JOE. CREATING A VARIABLE WITH AN UNDEFINIED VALUE

// // Keep track of which veggie we're on in the loop
var currentVeggie = "";
// SAME AS JOE, AS ADVISED BY JOE. CREATING A VARIABLE WITH AN UNDEFINIED VALUE

// // Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
// CORRECT ON FIRST ATTEMPT

// // Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
// CORRECT ON FIRST ATTEMPT

// // Start looping

// PART OF MY ASNWER, WHICH DOESN'T ENTIRELY WORK:
// for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
//   console.log( bands[ loopTracker ]);
//   console.log( vegetables[ loopTracker ]);
// }

// JOE'S ANSWER, WHICH PUTS THE ACTIONS OF THE LOOP INSIDE OF THE LOOP:
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

//   // Add the band names into the correct <div>
  currentBand = bands[loopTracker];
  bandElement.innerHTML += "<div>" + currentBand + "</div>";

  //   // Add the veggie names into the correct <div>
  currentVeggie = vegetables[loopTracker];
  if (currentVeggie !== undefined ) {
  veggieElement.innerHTML += "<div>" + currentVeggie + "</div>";
  }

}
