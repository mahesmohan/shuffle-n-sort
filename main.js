(() => {
	// Modify this to feed the cards
	const cards = [
		{ id: 1, type: "light" },
		{ id: 2, type: "regular" },
		{ id: 3, type: "dark" },
		{ id: 4, type: "regular" },
		{ id: 5, type: "dark" },
		{ id: 6, type: "gray" },
		{ id: 7, type: "gray" },
		{ id: 8, type: "light" },
		{ id: 9, type: "dark" },
	];

	let currentDeck = [];
	let sortedCards = false;

	function createCardElement(card) {
		const cardElement = document.createElement("div");
		cardElement.innerText = card.id;
		const className = `card ${
			card.type != "regular" ? "card-" + card.type : ""
		}`;
		cardElement.setAttribute("class", className);
		return cardElement;
	}

	function renderGrid() {
		const grid = document.querySelector("#grid");
		grid.innerHTML = "";
		currentDeck.forEach((card) => {
			grid.append(createCardElement(card));
		});
	}

	function getCurrentDeck() {
		return [...currentDeck];
	}

	function setCurrentDeck(cardsList) {
		currentDeck = [...cardsList];
	}

	const grid = {
		init: () => {
			setCurrentDeck(cards);
			renderGrid();
		},
		shuffle: () => {
			const tempDeck = getCurrentDeck();
			let shuffledDeck = [];
			for (let i = 0; i < cards.length; i++) {
				const randIndex = Math.floor(Math.random() * tempDeck.length);
				shuffledDeck.push(tempDeck.splice(randIndex, 1)[0]);
			}
			setCurrentDeck(shuffledDeck);
			sortedCards = false;
			renderGrid();
		},
		sortCards: () => {
			if (!sortedCards) {
				const sortedDeck = getCurrentDeck().sort((curr, next) => {
					return curr.id - next.id;
				});
				setCurrentDeck(sortedDeck);
				sortedCards = true;
			}
			renderGrid();
		},
	};
	this.gridTools = grid;
})();
