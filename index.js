let scoreHome = document.getElementById("score-home")
let scoreGuest = document.getElementById("score-guest")

let scoreHomeContainer = document.getElementById("score-home-container")
let scoreGuestContainer = document.getElementById("score-guest-container")


function score(id, points) {
	if(id.id == "home") {
		scoreHome.textContent = parseInt(scoreHome.textContent) + points
	} else {
		scoreGuest.textContent = parseInt(scoreGuest.textContent) + points
	}

	if(parseInt(scoreHome.textContent) > parseInt(scoreGuest.textContent)) {
		//apply the winning class to score-home-container
		scoreGuestContainer.classList.remove("winning")
		scoreHomeContainer.classList.add("winning")
	} else {
		//apply the winning class to score-guest-container
		scoreHomeContainer.classList.remove("winning")
		scoreGuestContainer.classList.add("winning")
	}
}

function newGame() {
	scoreHome.textContent = 0
	scoreGuest.textContent = 0
	scoreHomeContainer.classList.remove("winning")
	scoreGuestContainer.classList.remove("winning")
}