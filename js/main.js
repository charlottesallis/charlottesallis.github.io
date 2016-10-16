function askQuestions() {

	var firstName= prompt('what is your first name?');
	var lastName= prompt('what is your last name?');
	var fullname= firstName + '' + lastName; 
	console.log (fullname);

	var age= prompt('How old are you?');
			age= parseInt(age);
	console.log (age);	

	if (age >= 18) {
	console.log ('User is adult!');
	} else if (age >= 13) {
	console.log ('User is a teen!');
	} else {
	console.log ('User is a child!');
	}

	var faveColour= prompt ('What is your favourite colour?');
	faveColour = faveColour.toLowerCase().trim ();
	if (faveColour == 'red' ||
	faveColour== 'blue' ||
	faveColour== 'green' ||
	faveColour== 'yellow') {
	$('h1').css('color',faveColour);
	}

	// if the user's first name is 'General' and thier last name is NOT 'Asembly', then greet the general!

	var firstName= prompt ('What is your first name?')

	if (firstName=== 'General') {
		// $('h1').html ('Hello General');
	 	if (lastName !== 'Assembly') {
			$('h1').html ('Hello General');
		}
	}
}

// when the page has loaded 
$ (function() {

// When the user clicks image, run askQuestions 
	$('img').on ('click', askQuestions);



	// when the user clicks an h3
	$('h3').on('click', function() {

		// Toggle the next element
		$ (this).next().slideToggle(100);
	});

}); 