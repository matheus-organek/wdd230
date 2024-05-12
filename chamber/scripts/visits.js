const visitsDisplay = document.querySelector(".visits");
const lastVisit = window.localStorage.getItem("lastVisitDate");
const currentDate = new Date();
const oneDay = 24 * 60 * 60 * 1000;

if (!lastVisit) {
	visitsDisplay.textContent = "Welcome! Let us know if you have any questions.";
}

else {
	const daysSinceLastVisit = Math.round(Math.abs((currentDate - new Date(lastVisit)) / oneDay));

	if (daysSinceLastVisit < 1) {
		visitsDisplay.textContent = "Back so soon! Awesome!";
	}

	else if (daysSinceLastVisit === 1) {
		visitsDisplay.textContent = "You last visited 1 day ago.";
	}

	else {
		visitsDisplay.textContent = `You last visited ${daysSinceLastVisit} days ago.`;
	}
}

window.localStorage.setItem("lastVisitDate", currentDate.toISOString());