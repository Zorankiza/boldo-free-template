// main.js
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


$('.button').on('click', function(e) {
	e.preventDefault();

	var email = $('#email');
	if (email[0].value.match(validRegex)) {
		alert("Thank you for subscribing!");
		} else {
		alert("Please enter a valid email.")
		};
});

