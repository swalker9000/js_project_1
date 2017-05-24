// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//variables
var index;
var usedQuotes = [];
var selectedQuote;
var fullQuote;

//arrays and objects
var quote = [
	{
		quote: "It always seems impossible until it is done.",
	 	source: "Nelson Mandela"
	 },
	{
		quote: "A bird doesn't sing because it has an answer, it sings because it has a song.",
		source: "Maya Angelou"
	},
	{
		quote: "To infinity and beyond.",
		source: "Buzz Lightyear",
		citation: "Toy Story"
	},
	{
		quote: "The best way out is always through.",
		source: "Robert Frost"
	},
	{
		quote: "When life get you down, do you wanna know what you've gotta do? Just keep swimming!",
		source: "Dory",
		citation: "Finding Nemo"
	}
];

//functions

//clears a selected ID's content
/*function clearBox(elementID) {
	document.getElementById( elementID ).innerHTML = '';
}*/

//selects ID from HTML
function quote_box(message) {
	var quoteBox = document.getElementById('quote-box');
	quoteBox.innerHTML = message;
}

//selects random quote
function getRandomQuote() { 
 	index = Math.floor(Math.random() * ((quote.length + 1) - 1));
 		return quote[index];

}

//generates HTML string format of quote and adds to page by calling quote_box()
function printQuote() {
	
	selectedQuote = getRandomQuote();
	fullQuote = "";
	fullQuote += "<p class='quote'>" + selectedQuote.quote + "</p>";
	fullQuote += "<p class='source'>" + selectedQuote.source;
	if (selectedQuote.citation) {
	fullQuote += "<span class='citation'>" + selectedQuote.citation + "</span>";
}
	if (selectedQuote.year) {
	fullQuote += "<span class='year'>" + selectedQuote.year + "</span>";
}
	fullQuote += "</p>";
	quote_box(fullQuote);
}
	
