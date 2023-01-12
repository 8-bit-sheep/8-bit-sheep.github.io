window.onload = function(){

	/* Typewriter JS */
	var app = document.getElementById('typewriterjs-app');

	var typewriter = new Typewriter(app, {
		loop: false,
		delay: 30, // Typing speed
		deleteSpeed : 0
	});
	
	var charFrown = '\u2322';
	var charSmile = '\u2323';
	var charCloseup = '\u2050';
	var charSpace = '\xa0';
	var charDoubleQuotesLeft = '\u030F';
	var charDoubleQuotesRight = '\u02DD';
	var charLowX = '<span class="lowPosition">\u00d7</span>';
	var charLambda = '<span class="flip">y</span>';
	var charSmileCustom = '<span class="customLine">' + charSmile + '</span>';
	var charInfinite = '<span class="infinite">\u221e</span>';
	var charArrowDown = '<span class="customLine2">\u21e9</span>';

	typewriter.typeString('')
		.typeString('')
		.pauseFor(2000)
		.typeString('"1"')
		.typeString('<br>')
		.typeString(charSpace + '* 8 *')
		.pauseFor(500)
		.deleteAll()
		.typeString('"/' + charFrown + charFrown + '/"')
		.pauseFor(500)
		.typeString('<br>')
		.typeString(charCloseup + '@=@' + charCloseup)
		.typeString('<br>')
		.typeString('4')
		.typeString('<br>')
		.typeString('(')
		.pauseFor(500)
		.deleteAll()
		.typeString(charFrown + charFrown)
		.typeString('<br>')
		.typeString(charCloseup + '(ө' + charDoubleQuotesLeft + charSpace + ' | ' + charDoubleQuotesRight + 'ө)' + charCloseup)
		.typeString('<br>')
		.typeString('6 I)(l 9')
		.typeString('<br>')
		.typeString(charSpace + 'p')
		.pauseFor(1500)
		.deleteChars(17)
		.typeString(' | ' + charDoubleQuotesRight + 'ө)' + charCloseup)
		.typeString('<br>')
		.typeString('\\ | ' + charSpace + ' | /')
		.typeString('<br>')
		.typeString(charLowX)
		.typeString('<br>')
		.typeString(charSmileCustom)
		.pauseFor(2000)
		.deleteChars(11)
		.typeString(' | ' + charSpace + ' | /')
		.typeString('<br>')
		.typeString(charLambda)
		.typeString('<br>')
		.typeString(charSmileCustom)
		.callFunction(() => {
			document.getElementsByClassName('Typewriter__cursor')[0].style.display = 'none';
		})
		.typeString('<br>')
		.pauseFor(1500)
		.typeString(charInfinite)
		.pauseFor(2000)
		.callFunction(() => {
			app.insertAdjacentHTML('beforeend', '<div class="title">8-bit-sheep</div>' + 
				'<div class="contact-details">' + 
					'<a href="mailto:info@8-bit-sheep.com">info@8-bit-sheep.com</a><br>' + 
					'<a href="tel:+358405182981">+358 40 518 2981</a>' + 
				'</div>');
		})
		.pauseFor(1500)
		.callFunction(() => {
			app.insertAdjacentHTML('beforeend', charArrowDown);
		})
		.start();

	/* References */
	// Init vars
	var referenceNavItems = document.querySelectorAll(".reference-nav a");
	var referenceCases = document.querySelectorAll(".reference-case");
	
	// Loop thru items
	referenceNavItems.forEach((referenceNavItem, i) => {
	
		// Store ref case index
		var referenceCase = referenceCases[i];
		
		// Event listeners
		referenceNavItem.addEventListener("click", function(e){
		
			// Prevent href default behavior
			e.preventDefault();
			
			// Hide all - Nav items
			referenceNavItems.forEach((navItems) => {
				navItems.className = ""; // Clear class
			});
			
			// Hide all - Cases
			referenceCases.forEach((cases) => {
				cases.className = "reference-case"; // Set class to default
			});
			
			// Show active - Nav item + case
			referenceNavItem.className += "active";
			referenceCase.className += "active";
		
		});
		
	});

}