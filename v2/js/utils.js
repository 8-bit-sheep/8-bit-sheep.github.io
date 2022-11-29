window.onload = function(){

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