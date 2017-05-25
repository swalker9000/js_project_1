// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables
var index;
var tracker = [];
var selectedQuote;
var fullQuote;
var rgbColor = "";
var timeoutID;

//arrays and objects
var quotes = [
	{
		quote: "It always seems impossible until it is done.",
	 	source: "Nelson Mandela",
	 	citation: "",
	 	year: "",
	 	tags: ["inspirational", "possitive", "motivational"]
	 },
	{
		quote: "A bird doesn't sing because it has an answer, it sings because it has a song.",
		source: "Maya Angelou",
		citation: "",
		year: "",
		tags: ["positive", "inspirational"]
	},
	{
		quote: "To infinity and beyond.",
		source: "Buzz Lightyear",
		citation: "Toy Story",
		year: "",
		tags: ["movie quote", "inspirational", "motivational"]
	},
	{
		quote: "The best way out is always through.",
		source: "Robert Frost",
		citation: "",
		year: "",
		tags: ["inspirational", "motivational"]
	},
	{
		quote: "When life get you down, do you wanna know what you've gotta do? Just keep swimming!",
		source: "Dory",
		citation: "Finding Nemo",
		year: "",
		tags: ["movie quote", "inspirational", "motivational"]
	},
	{
		quote: "There's no place like home.",
		source: "Judy Garland as Dorothy",
		citation: "Wizard of Oz",
		year: "1939"
	},
	{
		quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.",
		source: "Tom Hanks as Forrest Gump",
		citation: "Forrest Gump",
		year: "1994"
	},
	{
		quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.",
		source: "Robin Williams as John Keating",
		citation: "Dead Poets Society",
		year: "1989"
	}
];

//functions

//selects ID from HTML
function quote_box(message) {
	var quoteBox = document.getElementById('quote-box');
	quoteBox.innerHTML = message;
}

function randomColor() {
	var red = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	rgbColor = "";
	rgbColor += "rgb(" + red + ", " + blue + ", " + green + ")";
	return rgbColor;
}

//creates interval timer for quotes if button is not pushed
function interval() {
	timeoutID = window.setTimeout(printQuote, 10000);
}	

//selects random quote
function getRandomQuote() { 
 	index = Math.floor(Math.random() * ((quotes.length + 1) - 1));
 //checks to see if quote has been used
 	if (tracker.indexOf(index) === -1) {
 		tracker.push(index);
 		//randomizes background color
 		document.getElementById('background').style.backgroundColor = randomColor();
 		document.getElementById('loadQuote').style.backgroundColor = rgbColor;
 		console.log(quotes[index]);
 		return quotes[index];
 	}
  //checks to see if all quotes have been used at least once
 	else if (tracker.indexOf(index) > -1 && tracker.length !== quotes.length) {
 		getRandomQuote();
 		return quotes[index];
 	} 
 //if all quotes have been used once - resets tracker and generates new quote
 	else {
 		tracker.splice(0);
 		getRandomQuote();
 		return quotes[index];
 	
 	}
 }


//concats HTML string of quote and adds to page by calling quote_box()
function printQuote() {
	//clears timer
	clearTimeout(timeoutID);
	//sets return value of getRandomQuote() to new variable
	selectedQuote = getRandomQuote();
	//concats string into variable fullQuote
	fullQuote = "";
	fullQuote += "<p class='quote'>" + selectedQuote.quote + "</p>";
	fullQuote += "<p class='source'>" + selectedQuote.source;
	//checks to see if citation property has a value
	if (selectedQuote.citation) {
	fullQuote += "<span class='citation'>" + selectedQuote.citation + "</span>";
}
	//checks to see if year property has a value
	if (selectedQuote.year) {
	fullQuote += "<span class='year'>" + selectedQuote.year + "</span>";
}
	fullQuote += "</p>";
	//selects HTML id and adds message to it
	quote_box(fullQuote);
	//starts new timer
	interval();
}

//starts interval upon loading page
interval();



