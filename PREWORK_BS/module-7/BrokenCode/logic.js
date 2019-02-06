// When the factButton is clicked...
$("#factButton").on("click", function() {
	// We generate a random number between 0 and 4 (the number of facts in the booFactArray)
	var number = Math.floor((Math.random() * booFacts.length));
	// We display the fact from the booFactsArray that is in random postion we just generated.
	$("#factText").text(booFacts[number])
})

// This array holds all of our Boo dog facts!
var booFacts = ["Boo is a pomeranian, Boo's best friend is another pomeranian named Buddy, Boo the Pomeranian was born on March 16, making him a Pisces, Boo's favourite food is grass, Boo has released two books" ]

// When the textPink button is pressed...
$("#textPink").on("click", function() {
	// chnage funText to pink
	$("#funText").css("color", pink)
})

// When the textOrange button is pressesed...
$("#textOrange").on("click", function() {
	// change funText to orange.
    $("#funText").css("color", "orange")
})

// When the textGreen button is pressed...
$("#textGreen").on("click", function() {
	// Change funText to green.
	$("#funText").css("color", "green")
})


// Wehn the boxGrow button is clicked...
$("#boxGrow").on(click, function() {
    // Increase the size of the box.
	$("#box").animate({height:"+=35px",	width:"+=35px"}, "fast");
})

// When the boxShrink button is clicked...
$("#boxShrink").on(click, function() {
    // Decrease the size of the box.
	$("#box").animate({height:"-=35px", width:"-=35px"}, "fast");
})