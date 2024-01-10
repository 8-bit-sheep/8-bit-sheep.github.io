window.onload = function() {

	// Init
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

			resultDiv.innerText = validCities.join(' | ');
		} catch (error) {
			console.error('Fetch data error: ', error);
		}
	};



	// Initial Call
	fetchDataAndRender();

	// Fetches the csv every 4 hours and re-renders the locations element 
	setInterval(fetchDataAndRender, 1000*60*60*1);

}
