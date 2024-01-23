window.onload = function(){

	/* Typewriter JS */
	var app = document.getElementById('typewriterjs-app');

	var typewriter = new Typewriter(app, {
		loop: false,
		delay: 30, // Typing speed
		deleteSpeed: 10 // Delete speed
	});
	
	var charSpace = '\xa0';
	var charFrown = '<span class="hn-medium">\ufe35</span>';
	var charSmile = '<span class="hn-medium">\ufe36</span>';
	var charCloseup = '<span class="hn-bold">\u2050</span>';
	var charDoubleQuotesLeft = '<span class="hn-medium">``</span>';
	var charDoubleQuotesRight = '<span class="hn-medium">´´</span>';
	var charLowX = '<span class="hn-medium lowPosition">\u00d7</span>';
	var charLambda = '<span class="hn-medium lambda">&lambda;</span>';
	var charFrownCustom = charSpace + charFrown + charSpace;
	
	var charSmileCustom = '<span class="customLine">' + charSmile + '</span>';
	var charSmileCustom2 = '<span class="customLine2">' + charSmile + '</span>';
	var charInfinite = '<span class="hn-bold infinite">\u221e</span>';
	var charBracketLeft = '<span class="hn-bold">(</span>';
	var charBracketRight = '<span class="hn-bold">)</span>';
	var charEye = '<span class="hn-medium">ө</span>';
	var charPipe = '<span class="hn-medium">|</span>';
	var charSlashLeft = '<span class="hn-bold">\\</span>';
	var charSlashRight = '<span class="hn-bold">/</span>';
	
	var charNonsense1 = '<span class="hn-medium">"1"</span>';
	var charNonsense2 = '<span class="hn-medium">* 8 *</span>';
	var charNonsense3 = '<span class="hn-medium">"/' + charFrownCustom + charFrownCustom + '/"</span>';
	var charNonsense4 = '<span class="hn-medium">' + charCloseup + '@=@' + charCloseup + '</span>';
	var charNonsense5 = '<span class="hn-medium">4</span>';
	var charNonsense6 = '<span class="hn-medium">6 I)(l 9</span>';
	var charNonsense7 = '<span class="hn-medium">p</span>';

	typewriter.typeString('')
		.pauseFor(2000)
		.typeString(charNonsense1)
		.typeString('<br>')
		.typeString(charSpace + charNonsense2)
		.pauseFor(1000)
		.deleteAll()
		.typeString(charNonsense3)
		.pauseFor(1000)
		.typeString('<br>')
		.typeString(charNonsense4)
		.typeString('<br>')
		.typeString(charNonsense5)
		.typeString('<br>')
		.typeString('(')
		.pauseFor(1000)
		.deleteAll()
		.typeString(charFrownCustom + charFrownCustom)
		.typeString('<br>')
		.typeString(charCloseup + charBracketLeft + charEye + charDoubleQuotesLeft + charSpace + charPipe + charSpace + charDoubleQuotesRight + charEye + charBracketRight + charCloseup)
		.typeString('<br>')
		.typeString(charNonsense6)
		.typeString('<br>')
		.typeString(charSpace + charNonsense7)
		.pauseFor(1500)
		.deleteChars(19)
		.typeString(charSpace + charPipe + charSpace + charDoubleQuotesRight + charEye + charBracketRight + charCloseup)
		.typeString('<br>')
		.typeString(charSlashLeft + charSpace + charPipe + charSpace + charSpace + charSpace + charSpace + charPipe + charSpace + charSlashRight)
		.typeString('<br>')
		.typeString(charLowX)
		.typeString('<br>')
		.typeString(charSmileCustom)
		.pauseFor(2000)
		.deleteChars(13)
		.typeString(charSpace + charPipe + charSpace + charSpace + charSpace + charSpace + charPipe + charSpace + charSlashRight)
		.typeString('<br>')
		.typeString(charLambda)
		.typeString('<br>')
		.typeString(charSmileCustom2)
		.callFunction(() => {
			document.getElementsByClassName('Typewriter__cursor')[0].style.display = 'none';
		})
		.typeString('<br>')
		.pauseFor(1500)
		.typeString(charInfinite)
		.start();

	/* References */
	// Init vars
	/*
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
	*/

	/* Location */
	let resultDiv = document.querySelector("#location");
	let csvUrl = "https://europe-west1-csv-proxy.cloudfunctions.net/csv";

	const fetchDataAndRender = async () => {
		resultDiv.innerText = 'Locating the sheep, satellites scanning...';
		
		try {
			const response = await fetch(csvUrl);
			const data = await response.text();
			const records = data.split("\n").slice(1);
			const currentDate = new Date();
			let validCities = records.reduce((accumulator, record) => {
				const [place, sheep, from, until] = record.split(",");
				const fromDate = from ? new Date(from) : null;
				const untilDate = until ? new Date(until) : null;

				if (!accumulator[sheep] || (fromDate && fromDate <= currentDate
											&& (!untilDate || untilDate >= currentDate)
											&& (!accumulator[sheep].fromDate || fromDate > accumulator[sheep].fromDate))) {
					accumulator[sheep] = {
						place,
						fromDate,
						untilDate
					};
				}
				return accumulator;
			}, {});

			let seenCities = new Set();
			validCities = Object.values(validCities)
				.map(record => record.place.trim())
				.filter((city) => {
					const lowerCaseCity = city.toLowerCase();
					if (!seenCities.has(lowerCaseCity)) {
						seenCities.add(lowerCaseCity);
						return true;
					} else {
						return false;
					}
				})
				.sort();

			// Show the data with 1 sec delay, to preserve time for the loading placeholder
			setTimeout(function(){
				resultDiv.innerText = validCities.join(' | ');
			}, 1000);
			
		} catch (error) {
			console.error('Fetch data error: ', error);
		}
		
	};

	// Initial Call
	fetchDataAndRender();

	// Fetches the csv every 4 hours and re-renders the locations element 
	setInterval(fetchDataAndRender, 1000*60*60*1);

	/* Flock sheep gallery shuffle */
	function shuffle(array) {
		var currentIndex = array.length,
			temporaryValue, randomIndex;

		// While there remain elements to shuffle...
		while (0 !== currentIndex) {

			// Pick a remaining element...
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex -= 1;

			// And swap it with the current element.
			temporaryValue = array[currentIndex];
			array[currentIndex] = array[randomIndex];
			array[randomIndex] = temporaryValue;
		}

		return array;
	}

	// Get the DOM object of the parent div
	//const container = document.querySelector('.flock-container');
	const container = document.querySelectorAll('.flock-container')[0];
	
	// Check if the element exists
	if (typeof(container) != 'undefined' && container != null) {

		// Turn container.children, which is an HTMLCollection, into an array
		// See https://stackoverflow.com/a/222847 for more on this
		const children = [...container.children];

		// The shuffle function above mutates the argument, so here we shuffle
		// the array of children; note that this is not yet reflected in the DOM
		shuffle(children);

		// Reinsert the children to the parent according to the new order
		for (const child of children) {
			container.appendChild(child);
		}
	
	}

}
